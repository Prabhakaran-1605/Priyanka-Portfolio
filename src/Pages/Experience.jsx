import React from 'react';
import { Box, Typography, Divider, Paper } from '@mui/material';

const experienceList = [
  {
    title: 'Associate Manager - Human Resources',
    company: 'HEEDDATA INDIA PVT LTD',
    duration: 'Jul 2023 – Present',
    description: `Managing recruitment, onboarding, performance reviews, training programs, benefits, employee relations, and exit processes. 
    Also handled payroll compliance including PF, TDS, PT & GST, and office admin tasks.`,
    color: '#e3f2fd'
  },
  {
    title: 'Executive - Human Resources',
    company: 'INFOLOB GLOBAL INC',
    duration: 'Aug 2021 – Jul 2023',
    description: `Managed HR operations, onboarding, payroll and benefits, attendance, medical insurance, leave management, and exit procedures.`,
    color: '#ede7f6'
  },
  {
    title: 'Admin cum Academic Coordinator',
    company: 'Jupiter Play School',
    duration: 'Jun 2017 – Apr 2020',
    description: `Mentored students, coordinated school activities, provided performance feedback, and nurtured leadership skills among children.`,
    color: '#fce4ec'
  }
];

const Experience = () => {
  return (
    <Box sx={{ py: 8, px: 3, maxWidth: 1000, mx: 'auto' }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: 600,
          background: 'linear-gradient(to right, #6a11cb, #2575fc)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}
      >
        Experience
      </Typography>

      {experienceList.map((item, index) => (
        <Paper
          key={index}
          elevation={4}
          sx={{
            p: 3,
            my: 3,
            borderRadius: 3,
            backgroundColor: item.color,
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'translateY(-4px)',
            }
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            {item.title}
          </Typography>
          <Typography variant="subtitle2" sx={{ color: '#555', mb: 1 }}>
            {item.company} | {item.duration}
          </Typography>
          <Typography variant="body2" sx={{ color: '#444' }}>
            {item.description}
          </Typography>
        </Paper>
      ))}

      <Divider sx={{ mt: 4 }} />
    </Box>
  );
};

export default Experience;
