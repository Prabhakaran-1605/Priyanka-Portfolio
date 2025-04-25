import React from "react";
import {
  Box,
  Typography,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import profilePic from "../assets/profile.jpg"; // Replace with your image

// Animation variants
const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

const textContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const emojiVariants = {
  hidden: { rotate: 0, y: 0 },
  visible: {
    rotate: [0, -15, 15, -10, 10, 0],
    y: [0, -5, 5, -5, 5, 0],
    transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
  },
};

function Home() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        px: { xs: 3, md: 10 },
        py: 8,
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // responsive layout
        alignItems: "center",
        justifyContent: "space-between",
        gap: 6,
        overflowX: "hidden",
      }}
    >
      {/* Left: Content */}
      <Box sx={{ flex: 1 }}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textContainerVariants}
        >
          <Typography variant="h3" gutterBottom>
            Hi, I'm{" "}
            <motion.span
              variants={letterVariants}
              style={{
                color: "#1976d2",
                display: "inline-block",
                fontWeight: 700,
              }}
            >
              {"Priyanka Kola".split("").map((char, index) => (
                <motion.span key={index} variants={letterVariants}>
                  {char}
                </motion.span>
              ))}
            </motion.span>{" "}
            <motion.span
              variants={emojiVariants}
              style={{ display: "inline-block" }}
            >
              💼
            </motion.span>
          </Typography>

          <motion.div
            animate={{
              color: ["#FF4500", "#f5b041", "#52be80", "#6a11cb", "#FF69B4"],
            }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
              Associate Manager – Human Resources
            </Typography>
          </motion.div>

          <Typography variant="body1" sx={{ mt: 2, color: "#555" }}>
            Passionate HR professional with 5+ years in onboarding, employee engagement,
            payroll, and compliance. Building positive workplace cultures through empathy,
            structure, and process excellence.
          </Typography>

          <Typography variant="body2" sx={{ mt: 2, color: "#777" }}>
            Currently at <b>HEEDDATA India Pvt Ltd</b>, leading HR initiatives and
            employee development programs across the organization.
          </Typography>

          <Button
            variant="contained"
            href="Priya_K_HR.pdf"
            download="Priyanka_Kola_Resume.pdf"
            sx={{
              mt: 1,
              background: "linear-gradient(to right, #6a11cb, #2575fc)",
              color: "#fff",
              px: 4,
              py: 1.5,
              borderRadius: 2,
              textTransform: "none",
              fontWeight: 600,
              boxShadow: 2,
              "&:hover": {
                background: "linear-gradient(to right, #5b0dba, #1d63e4)",
              },
            }}
          >
            Download Resume
          </Button>
        </motion.div>
      </Box>

      {/* Right: Profile Image */}
      <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
        <motion.img
          src={profilePic}
          alt="Priyanka Kola"
          style={{
            width: "100%",
            maxWidth: "320px",
            borderRadius: "16px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
          }}
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
        />
      </Box>
    </Box>
  );
}

export default Home;
