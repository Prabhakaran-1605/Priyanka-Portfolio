import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
  Card,
  CardContent
} from '@mui/material';

import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SchoolIcon from '@mui/icons-material/School';
import GavelIcon from '@mui/icons-material/Gavel';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import BusinessIcon from '@mui/icons-material/Business';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

const skills = [
  {
    title: "HRMS & Payroll",
    icon: <AccountBalanceWalletIcon fontSize="large" color="primary" />,
    bg: "#e3f2fd"
  },
  {
    title: "Recruitment & Onboarding",
    icon: <GroupAddIcon fontSize="large" color="secondary" />,
    bg: "#fce4ec"
  },
  {
    title: "Employee Relations",
    icon: <Diversity3Icon fontSize="large" sx={{ color: "#4caf50" }} />,
    bg: "#e8f5e9"
  },
  {
    title: "Exit Management",
    icon: <ExitToAppIcon fontSize="large" sx={{ color: "#ef6c00" }} />,
    bg: "#fff3e0"
  },
  {
    title: "Training & Development",
    icon: <SchoolIcon fontSize="large" sx={{ color: "#7e57c2" }} />,
    bg: "#ede7f6"
  },
  {
    title: "Compliance & Audits",
    icon: <GavelIcon fontSize="large" sx={{ color: "#ab47bc" }} />,
    bg: "#f3e5f5"
  },
  {
    title: "PF, TDS, GST Handling",
    icon: <ReceiptLongIcon fontSize="large" sx={{ color: "#00acc1" }} />,
    bg: "#e0f2f1"
  },
  {
    title: "Office Administration",
    icon: <BusinessIcon fontSize="large" sx={{ color: "#fbc02d" }} />,
    bg: "#fffde7"
  },
  {
    title: "Performance Management",
    icon: <TrendingUpIcon fontSize="large" sx={{ color: "#3f51b5" }} />,
    bg: "#f1f8e9"
  },
  {
    title: "Employee Engagement Strategies",
    icon: <SentimentSatisfiedAltIcon fontSize="large" sx={{ color: "#ec407a" }} />,
    bg: "#fbe9e7"
  }
];

const Skills = () => {
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
        Skills
      </Typography>

      <Card elevation={5} sx={{ borderRadius: 4, p: 3.5, backgroundColor: "#fafafa" }}>
        <CardContent>
          <Grid container spacing={3}>
            {skills.map((skill, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    height: '100%',
                    textAlign: 'center',
                    borderRadius: 3,
                    fontWeight: 500,
                    backgroundColor: skill.bg,
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.03)',
                    }
                  }}
                >
                  <Box sx={{ mb: 1 }}>{skill.icon}</Box>
                  <Typography variant="body1">{skill.title}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Skills;
