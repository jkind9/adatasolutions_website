// src/components/HeaderComponents/Header.jsx
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import logo from '../../assets/images/logo.png';
import '../../styles/Header.css';
import { useNavigate } from 'react-router-dom'


export default function Header() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };
  const navigate = useNavigate()
  const drawerItems = [
    { label: 'Services', href: '#' },
    { label: 'Portfolio', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Contact', href: '#' },
    { 
      label: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/james-alexander-146239a4/',
      external: true,
    },
  ];

  const drawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {drawerItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component="a"
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar className="header-root"> 
        <Toolbar className="header-toolbar">
          {/* Left side: logo + text */}
          <Box className="header-left">
            <Box
              component="img"
              src={logo}
              alt="James Alexander Logo"
              className="header-logo"
            />
            <Box className="header-text-container">
              <Typography variant="h6" noWrap className="header-name">
                Alexander Data Solutions
              </Typography>
              <Typography variant="caption" noWrap className="header-tagline">
                Pioneering new technology across all industries.
              </Typography>
            </Box>
          </Box>

          {/* Right side: desktop links */}
          <Box className="header-links">
            <Button
              onClick={() => navigate('/')}
              color="inherit"
              className="header-link-btn"
            > 
              Home
            </Button>
            {/* <Button color="inherit" className="header-link-btn">
              Services
            </Button> */}

            <Button
              onClick={() => navigate('/expertise')}
              color="inherit"
              className="header-link-btn"
            > 
              Expertise
            </Button>
            <Button
              onClick={() => navigate('/about')}
              color="inherit"
              className="header-link-btn"
            > 
              About
            </Button>
            {/* <Button color="inherit" className="header-link-btn">
              Contact
            </Button> */}
            <Button
              variant="outlined"
              href="https://www.linkedin.com/in/james-alexander-146239a4/"
              target="_blank"
              rel="noopener noreferrer"
              className="header-link-outlined"
            >
              LinkedIn
            </Button>
          </Box>

          {/* Mobile hamburger menu icon */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            className="header-menu-icon"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile nav */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerList}
      </Drawer>
    </>
  );
}