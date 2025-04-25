import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(to right, #6a11cb, #2575fc)',
        py: 4,
        textAlign: 'center',
        color: '#fff',
        mt: 8,
      }}
    >
      <Typography variant="body2" sx={{ fontWeight: 500 }}>
        © {new Date().getFullYear()} Priyanka Kola &nbsp;|&nbsp; All rights reserved.
      </Typography>

      <Typography variant="body2" sx={{ mt: 1 }}>
        <Link
          href="mailto:priyankakola29@gmail.com"
          underline="hover"
          sx={{ color: '#fff', fontWeight: 500, transition: '0.3s', '&:hover': { color: '#ffd54f' } }}
        >
          priyankakola29@gmail.com
        </Link>
        &nbsp;|&nbsp;
        <Link
          href="https://www.linkedin.com/in/priyanka-kola"
          target="_blank"
          rel="noopener"
          underline="hover"
          sx={{ color: '#fff', fontWeight: 500, transition: '0.3s', '&:hover': { color: '#ffd54f' } }}
        >
          LinkedIn
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
