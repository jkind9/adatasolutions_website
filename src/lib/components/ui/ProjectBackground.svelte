<script lang="ts">
  interface Props {
    projectId: string;
    color: 'red' | 'blue' | 'green' | 'orange';
  }

  let { projectId, color }: Props = $props();

  const colorSchemes: Record<string, { primary: string; secondary: string; glow: string }> = {
    orange: { primary: '#f97316', secondary: '#ea580c', glow: 'rgba(249, 115, 22, 0.3)' },
    blue: { primary: '#3b82f6', secondary: '#2563eb', glow: 'rgba(59, 130, 246, 0.3)' },
    green: { primary: '#22c55e', secondary: '#16a34a', glow: 'rgba(34, 197, 94, 0.3)' },
    red: { primary: '#f97316', secondary: '#ea580c', glow: 'rgba(249, 115, 22, 0.3)' }
  };

  const scheme = $derived(colorSchemes[color] || colorSchemes.orange);
</script>

<div class="project-bg" style="--primary: {scheme.primary}; --secondary: {scheme.secondary}; --glow: {scheme.glow};">
  <!-- Base gradient -->
  <div class="bg-gradient"></div>

  <!-- Grid pattern -->
  <div class="bg-grid"></div>

  <!-- Project-specific SVG patterns -->
  {#if projectId === 'mclaren'}
    <!-- F1/Racing themed patterns -->
    <svg class="pattern pattern-1" viewBox="0 0 200 200" fill="none">
      <!-- Geometric F1 car silhouette -->
      <path d="M20 100 L60 80 L140 80 L180 100 L160 110 L140 105 L60 105 L40 110 Z"
            stroke="currentColor" stroke-width="1" fill="none" opacity="0.3"/>
      <!-- Wheel circles -->
      <circle cx="50" cy="105" r="12" stroke="currentColor" stroke-width="1" fill="none" opacity="0.2"/>
      <circle cx="150" cy="105" r="12" stroke="currentColor" stroke-width="1" fill="none" opacity="0.2"/>
    </svg>
    <svg class="pattern pattern-2" viewBox="0 0 100 100" fill="none">
      <!-- Sensor network nodes -->
      <circle cx="20" cy="20" r="3" fill="currentColor" opacity="0.4"/>
      <circle cx="50" cy="30" r="3" fill="currentColor" opacity="0.3"/>
      <circle cx="80" cy="25" r="3" fill="currentColor" opacity="0.4"/>
      <circle cx="30" cy="60" r="3" fill="currentColor" opacity="0.3"/>
      <circle cx="70" cy="70" r="3" fill="currentColor" opacity="0.4"/>
      <line x1="20" y1="20" x2="50" y2="30" stroke="currentColor" stroke-width="0.5" opacity="0.2"/>
      <line x1="50" y1="30" x2="80" y2="25" stroke="currentColor" stroke-width="0.5" opacity="0.2"/>
      <line x1="50" y1="30" x2="30" y2="60" stroke="currentColor" stroke-width="0.5" opacity="0.2"/>
      <line x1="30" y1="60" x2="70" y2="70" stroke="currentColor" stroke-width="0.5" opacity="0.2"/>
    </svg>
    <svg class="pattern pattern-3" viewBox="0 0 120 60" fill="none">
      <!-- Time series waveform -->
      <path d="M0 30 Q10 10, 20 30 T40 30 T60 30 T80 30 T100 30 T120 30"
            stroke="currentColor" stroke-width="1.5" fill="none" opacity="0.25"/>
      <path d="M0 35 Q15 50, 30 35 T60 35 T90 35 T120 35"
            stroke="currentColor" stroke-width="1" fill="none" opacity="0.15"/>
    </svg>

  {:else if projectId === 'intrum'}
    <!-- AWS/Cloud themed patterns -->
    <svg class="pattern pattern-1" viewBox="0 0 100 100" fill="none">
      <!-- Cloud shape -->
      <path d="M25 60 Q15 60, 15 50 Q15 40, 25 40 Q25 30, 40 30 Q55 30, 55 40 L75 40 Q85 40, 85 50 Q85 60, 75 60 Z"
            stroke="currentColor" stroke-width="1" fill="none" opacity="0.3"/>
      <!-- Connection lines -->
      <line x1="50" y1="60" x2="50" y2="80" stroke="currentColor" stroke-width="1" opacity="0.2"/>
      <circle cx="50" cy="85" r="4" stroke="currentColor" stroke-width="1" fill="none" opacity="0.3"/>
    </svg>
    <svg class="pattern pattern-2" viewBox="0 0 100 50" fill="none">
      <!-- Audio waveform -->
      <rect x="5" y="15" width="3" height="20" fill="currentColor" opacity="0.3"/>
      <rect x="12" y="10" width="3" height="30" fill="currentColor" opacity="0.4"/>
      <rect x="19" y="18" width="3" height="14" fill="currentColor" opacity="0.25"/>
      <rect x="26" y="5" width="3" height="40" fill="currentColor" opacity="0.35"/>
      <rect x="33" y="12" width="3" height="26" fill="currentColor" opacity="0.3"/>
      <rect x="40" y="20" width="3" height="10" fill="currentColor" opacity="0.25"/>
      <rect x="47" y="8" width="3" height="34" fill="currentColor" opacity="0.4"/>
      <rect x="54" y="15" width="3" height="20" fill="currentColor" opacity="0.3"/>
      <rect x="61" y="12" width="3" height="26" fill="currentColor" opacity="0.35"/>
      <rect x="68" y="18" width="3" height="14" fill="currentColor" opacity="0.25"/>
    </svg>
    <svg class="pattern pattern-3" viewBox="0 0 80 80" fill="none">
      <!-- Lambda icon simplified -->
      <path d="M20 60 L40 20 L50 40 L60 20" stroke="currentColor" stroke-width="2" fill="none" opacity="0.2"/>
    </svg>

  {:else if projectId === 'ensign'}
    <!-- Construction/Blueprint themed patterns -->
    <svg class="pattern pattern-1" viewBox="0 0 100 100" fill="none">
      <!-- Blueprint grid -->
      <line x1="0" y1="25" x2="100" y2="25" stroke="currentColor" stroke-width="0.5" opacity="0.15"/>
      <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" stroke-width="0.5" opacity="0.15"/>
      <line x1="0" y1="75" x2="100" y2="75" stroke="currentColor" stroke-width="0.5" opacity="0.15"/>
      <line x1="25" y1="0" x2="25" y2="100" stroke="currentColor" stroke-width="0.5" opacity="0.15"/>
      <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" stroke-width="0.5" opacity="0.15"/>
      <line x1="75" y1="0" x2="75" y2="100" stroke="currentColor" stroke-width="0.5" opacity="0.15"/>
    </svg>
    <svg class="pattern pattern-2" viewBox="0 0 60 60" fill="none">
      <!-- CAD symbol - door -->
      <rect x="10" y="10" width="20" height="40" stroke="currentColor" stroke-width="1" fill="none" opacity="0.3"/>
      <path d="M10 50 Q30 50, 30 30" stroke="currentColor" stroke-width="0.5" stroke-dasharray="2 2" fill="none" opacity="0.2"/>
      <!-- CAD symbol - window -->
      <rect x="40" y="20" width="15" height="15" stroke="currentColor" stroke-width="1" fill="none" opacity="0.3"/>
      <line x1="47.5" y1="20" x2="47.5" y2="35" stroke="currentColor" stroke-width="0.5" opacity="0.2"/>
      <line x1="40" y1="27.5" x2="55" y2="27.5" stroke="currentColor" stroke-width="0.5" opacity="0.2"/>
    </svg>
    <svg class="pattern pattern-3" viewBox="0 0 80 40" fill="none">
      <!-- Technical dimension line -->
      <line x1="10" y1="20" x2="70" y2="20" stroke="currentColor" stroke-width="1" opacity="0.25"/>
      <line x1="10" y1="15" x2="10" y2="25" stroke="currentColor" stroke-width="1" opacity="0.25"/>
      <line x1="70" y1="15" x2="70" y2="25" stroke="currentColor" stroke-width="1" opacity="0.25"/>
      <text x="40" y="15" font-size="8" fill="currentColor" text-anchor="middle" opacity="0.2">2400mm</text>
    </svg>

  {:else if projectId === 'excelitas'}
    <!-- Defense/IR Camera themed patterns -->
    <svg class="pattern pattern-1" viewBox="0 0 100 100" fill="none">
      <!-- Targeting crosshair -->
      <circle cx="50" cy="50" r="30" stroke="currentColor" stroke-width="1" fill="none" opacity="0.25"/>
      <circle cx="50" cy="50" r="20" stroke="currentColor" stroke-width="0.5" fill="none" opacity="0.2"/>
      <circle cx="50" cy="50" r="10" stroke="currentColor" stroke-width="0.5" fill="none" opacity="0.15"/>
      <line x1="50" y1="15" x2="50" y2="35" stroke="currentColor" stroke-width="1" opacity="0.3"/>
      <line x1="50" y1="65" x2="50" y2="85" stroke="currentColor" stroke-width="1" opacity="0.3"/>
      <line x1="15" y1="50" x2="35" y2="50" stroke="currentColor" stroke-width="1" opacity="0.3"/>
      <line x1="65" y1="50" x2="85" y2="50" stroke="currentColor" stroke-width="1" opacity="0.3"/>
    </svg>
    <svg class="pattern pattern-2" viewBox="0 0 80 80" fill="none">
      <!-- Camera lens geometry -->
      <circle cx="40" cy="40" r="25" stroke="currentColor" stroke-width="1.5" fill="none" opacity="0.2"/>
      <circle cx="40" cy="40" r="18" stroke="currentColor" stroke-width="1" fill="none" opacity="0.15"/>
      <circle cx="40" cy="40" r="8" fill="currentColor" opacity="0.1"/>
    </svg>
    <svg class="pattern pattern-3" viewBox="0 0 100 60" fill="none">
      <!-- Heat signature gradient lines -->
      <path d="M0 30 C20 10, 40 50, 60 30 S100 10, 100 30" stroke="currentColor" stroke-width="2" fill="none" opacity="0.2"/>
      <path d="M0 40 C25 55, 50 25, 75 40 S100 55, 100 40" stroke="currentColor" stroke-width="1" fill="none" opacity="0.15"/>
    </svg>
  {/if}

  <!-- Noise texture overlay -->
  <div class="bg-noise"></div>
</div>

<style>
  .project-bg {
    position: absolute;
    inset: 0;
    overflow: hidden;
    color: var(--primary);
    transition: transform 0.7s cubic-bezier(0.25, 0.8, 0.25, 1);
    will-change: transform;
  }

  .bg-gradient {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      var(--primary) 0%,
      transparent 40%,
      transparent 60%,
      var(--secondary) 100%
    );
    opacity: 0.15;
  }

  .bg-grid {
    position: absolute;
    inset: 0;
    background-image: linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
    background-size: 24px 24px;
  }

  .pattern {
    position: absolute;
    opacity: 0.6;
    color: var(--primary);
    animation: float 8s ease-in-out infinite;
  }

  .pattern-1 {
    top: 10%;
    right: -5%;
    width: 50%;
    height: auto;
    animation-delay: 0s;
  }

  .pattern-2 {
    bottom: 20%;
    left: 5%;
    width: 35%;
    height: auto;
    animation-delay: 2s;
    animation-duration: 10s;
  }

  .pattern-3 {
    top: 50%;
    right: 20%;
    width: 30%;
    height: auto;
    animation-delay: 4s;
    animation-duration: 12s;
  }

  @keyframes float {
    0%,
    100% {
      transform: translateY(0) rotate(0deg);
    }
    50% {
      transform: translateY(-10px) rotate(2deg);
    }
  }

  .bg-noise {
    position: absolute;
    inset: 0;
    opacity: 0.03;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
    mix-blend-mode: overlay;
    pointer-events: none;
  }
</style>
