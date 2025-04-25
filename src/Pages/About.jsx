import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableContainer
} from '@mui/material';

const coreCompetencies = [
  "Onboarding",
  "Employee Engagement",
  "Payroll & Benefits",
  "Training Coordination",
  "Separation Process",
  "Medical Insurance",
  "Employee BGV",
  "Facilities Management"
];

const About = () => {
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
        About Me
      </Typography>

      {/* Summary Card */}
      <Paper
        elevation={3}
        sx={{
          background: 'linear-gradient(to right, #e0ecff, #f9f9f9)',
          padding: 4,
          borderRadius: 3,
          mb: 5
        }}
      >
        <Typography variant="body1" sx={{ color: '#333', fontSize: '1.05rem' }}>
          I’m an <strong>Associate Manager of Human Resources</strong> with over 5 years of experience in HR operations, employee lifecycle management, and culture building. I bring expertise in onboarding, payroll, compliance, performance tracking, training programs, and employee well-being.
          <br /><br />
          I thrive in fast-paced environments where empathy, communication, and process matter. My goal is to create people-first workplaces where individuals grow and succeed.
        </Typography>
      </Paper>

      {/* Table of Competencies */}
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
        Core Competencies
      </Typography>

      <TableContainer component={Paper} elevation={2} sx={{ borderRadius: 2 }}>
        <Table>
          <TableBody>
            {coreCompetencies.reduce((rows, skill, i) => {
              const rowIndex = Math.floor(i / 2);
              if (!rows[rowIndex]) rows[rowIndex] = [];
              rows[rowIndex].push(skill);
              return rows;
            }, []).map((row, index) => (
              <TableRow key={index}>
                {row.map((skill, i) => (
                  <TableCell key={i} sx={{ fontWeight: 500, color: '#444', py: 2 }}>
                    ✅ {skill}
                  </TableCell>
                ))}
                {row.length < 2 && <TableCell />} {/* if odd number of skills */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default About;
