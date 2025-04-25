import React from 'react';
import {
  Box,
  Typography,
  Link,
  Stack,
  Paper
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = () => {
  return (
    <Box sx={{ py: 8, px: 3, maxWidth: 700, mx: 'auto' }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: 600,
          background: 'linear-gradient(to right, #6a11cb, #2575fc)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textAlign: 'center',
          mb: 4
        }}
      >
        Contact Me
      </Typography>

      <Paper
        elevation={4}
        sx={{
          borderRadius: 4,
          background: 'linear-gradient(to right, #e3f2fd, #ede7f6)',
          p: { xs: 4, md: 5 },
        }}
      >
        <Typography
          variant="body1"
          sx={{ color: '#444', mb: 4, textAlign: 'center', fontSize: '1.05rem' }}
        >
          I'm always open to networking, opportunities, and collaborations in the HR, employee engagement,
          and people operations space. Feel free to reach out!
        </Typography>

        <Stack spacing={3}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <EmailIcon sx={{ color: '#1976d2' }} />
            <Link
              href="mailto:priyankakola29@gmail.com"
              underline="hover"
              sx={{ fontWeight: 500, color: '#333' }}
            >
              priyankakola29@gmail.com
            </Link>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <LinkedInIcon sx={{ color: '#0a66c2' }} />
            <Link
              href="https://www.linkedin.com/in/priyanka-kola"
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
              sx={{ fontWeight: 500, color: '#333' }}
            >
              linkedin.com/in/priyanka-kola
            </Link>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <LocationOnIcon sx={{ color: '#e91e63' }} />
            <Typography variant="body2" sx={{ color: '#444' }}>
              Hyderabad, India
            </Typography>
          </Box>
        </Stack>
      </Paper>
    </Box>
  );
};

export default Contact;
