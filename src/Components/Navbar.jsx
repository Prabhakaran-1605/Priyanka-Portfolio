import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = ({ scrollToSection, refs }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuClick = (ref) => {
    scrollToSection(ref);
    setMobileOpen(false); // Close drawer on click
  };

  const menuItems = [
    { label: 'Home', ref: refs.homeRef },
    { label: 'About', ref: refs.aboutRef },
    { label: 'Experience', ref: refs.experienceRef },
    { label: 'Skills', ref: refs.skillsRef },
    { label: 'Contact', ref: refs.contactRef },
  ];

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: '#6a11cb', px: 2 }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Priyanka Kola
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            {menuItems.map((item) => (
              <Button
                key={item.label}
                color="inherit"
                onClick={() => scrollToSection(item.ref)}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Hamburger Menu (Mobile/Tablet) */}
          <IconButton
            color="inherit"
            edge="end"
            sx={{ display: { xs: 'flex', md: 'none' } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ '& .MuiDrawer-paper': { width: 220 } }}
      >
        <List>
          {menuItems.map((item) => (
            <ListItem button key={item.label} onClick={() => handleMenuClick(item.ref)}>
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
