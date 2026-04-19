<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';

  interface Props {
    density?: number;
    color?: string;
    accentColor?: string;
    speed?: number;
    connectionDistance?: number;
    firingRate?: number;
  }

  let {
    density = 60,
    color = '#0891b2',
    accentColor = '#22d3ee',
    speed = 0.3,
    connectionDistance = 150,
    firingRate = 0.015
  }: Props = $props();

  let canvas: HTMLCanvasElement;

  interface Neuron {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    baseSize: number;
    firing: boolean;
    fireTime: number;
    pulsePhase: number;
  }

  interface Signal {
    fromX: number;
    fromY: number;
    toX: number;
    toY: number;
    progress: number;
    speed: number;
  }

  onMount(() => {
    if (!browser) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    const ctx: CanvasRenderingContext2D = context;

    let neurons: Neuron[] = [];
    let signals: Signal[] = [];
    let width = 0;
    let height = 0;
    let animationId: number;
    let running = true;

    function resize() {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;

      if (width === 0 || height === 0) {
        width = window.innerWidth;
        height = window.innerHeight;
      }

      canvas.width = width;
      canvas.height = height;
      initNeurons();
    }

    function initNeurons() {
      const maxNeurons = 100;
      const count = Math.min(maxNeurons, Math.floor((width * height) / (20000 / density)));
      neurons = [];

      for (let i = 0; i < count; i++) {
        const baseSize = Math.random() * 2 + 2;
        neurons.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * speed,
          vy: (Math.random() - 0.5) * speed,
          size: baseSize,
          baseSize,
          firing: false,
          fireTime: 0,
          pulsePhase: Math.random() * Math.PI * 2
        });
      }
    }

    function fireNeuron(neuron: Neuron) {
      neuron.firing = true;
      neuron.fireTime = 0;

      for (const target of neurons) {
        if (target === neuron) continue;
        const dx = target.x - neuron.x;
        const dy = target.y - neuron.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < connectionDistance && Math.random() < 0.3) {
          signals.push({
            fromX: neuron.x,
            fromY: neuron.y,
            toX: target.x,
            toY: target.y,
            progress: 0,
            speed: 0.02 + Math.random() * 0.02
          });
        }
      }
    }

    function animate() {
      if (!running) return;

      ctx.clearRect(0, 0, width, height);

      // Update neurons
      for (const neuron of neurons) {
        neuron.x += neuron.vx;
        neuron.y += neuron.vy;

        // Wrap around edges
        if (neuron.x < -20) neuron.x = width + 20;
        if (neuron.x > width + 20) neuron.x = -20;
        if (neuron.y < -20) neuron.y = height + 20;
        if (neuron.y > height + 20) neuron.y = -20;

        // Pulse animation
        neuron.pulsePhase += 0.02;
        const pulse = Math.sin(neuron.pulsePhase) * 0.3 + 1;
        neuron.size = neuron.baseSize * pulse;

        // Random firing
        if (!neuron.firing && Math.random() < firingRate / 60) {
          fireNeuron(neuron);
        }

        // Update firing state
        if (neuron.firing) {
          neuron.fireTime++;
          if (neuron.fireTime > 30) {
            neuron.firing = false;
          }
        }
      }

      // Draw connections
      ctx.lineWidth = 0.5;
      for (let i = 0; i < neurons.length; i++) {
        for (let j = i + 1; j < neurons.length; j++) {
          const dx = neurons[i].x - neurons[j].x;
          const dy = neurons[i].y - neurons[j].y;

          if (Math.abs(dx) > connectionDistance || Math.abs(dy) > connectionDistance) continue;

          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.25;
            const isFiring = neurons[i].firing || neurons[j].firing;

            ctx.strokeStyle = isFiring ? accentColor : color;
            ctx.globalAlpha = isFiring ? alpha * 2.5 : alpha;

            ctx.beginPath();
            ctx.moveTo(neurons[i].x, neurons[i].y);
            ctx.lineTo(neurons[j].x, neurons[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw signals
      for (let i = signals.length - 1; i >= 0; i--) {
        const signal = signals[i];
        signal.progress += signal.speed;

        if (signal.progress >= 1) {
          const targetNeuron = neurons.find(n =>
            Math.abs(n.x - signal.toX) < 20 && Math.abs(n.y - signal.toY) < 20
          );
          if (targetNeuron && !targetNeuron.firing && Math.random() < 0.4) {
            fireNeuron(targetNeuron);
          }
          signals.splice(i, 1);
          continue;
        }

        const x = signal.fromX + (signal.toX - signal.fromX) * signal.progress;
        const y = signal.fromY + (signal.toY - signal.fromY) * signal.progress;

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, 8);
        gradient.addColorStop(0, accentColor);
        gradient.addColorStop(1, 'transparent');

        ctx.globalAlpha = 1 - signal.progress * 0.5;
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw neurons
      for (const neuron of neurons) {
        // Glow effect when firing
        if (neuron.firing) {
          const glowSize = neuron.size * 4;
          const gradient = ctx.createRadialGradient(
            neuron.x, neuron.y, 0,
            neuron.x, neuron.y, glowSize
          );
          gradient.addColorStop(0, accentColor);
          gradient.addColorStop(0.5, `${accentColor}40`);
          gradient.addColorStop(1, 'transparent');

          ctx.globalAlpha = 1 - neuron.fireTime / 30;
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(neuron.x, neuron.y, glowSize, 0, Math.PI * 2);
          ctx.fill();
        }

        // Neuron body
        ctx.beginPath();
        ctx.arc(neuron.x, neuron.y, neuron.size, 0, Math.PI * 2);
        ctx.fillStyle = neuron.firing ? accentColor : color;
        ctx.globalAlpha = neuron.firing ? 1 : 0.8;
        ctx.fill();
      }

      animationId = requestAnimationFrame(animate);
    }

    // Initialize after a short delay to ensure DOM is ready
    setTimeout(() => {
      resize();
      animate();
    }, 150);

    window.addEventListener('resize', resize);

    return () => {
      running = false;
      window.removeEventListener('resize', resize);
      if (animationId) cancelAnimationFrame(animationId);
    };
  });
</script>

<canvas bind:this={canvas} class="neural-canvas"></canvas>

<style>
  .neural-canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
</style>
