/* eslint-disable react/no-unescaped-entities */
import { FaApple, FaFilm, FaMagic } from "react-icons/fa";
import { Grid, Typography, Box } from "@mui/material";
import { MdOutlineDesignServices } from "react-icons/md";
import { SiAdobe } from "react-icons/si";

const Skills = () => {
  // Skill data (app name, logo, percentage)
  const skillData = [
    {
      name: "Premiere Pro",
      icon: <SiAdobe className="text-6xl " />,
      percentage: "90%",
    },
    {
      name: "After Effects",
      icon: <FaMagic className="text-6xl " />,
      percentage: "85%",
    },
    {
      name: "DaVinci Resolve",
      icon: <FaFilm className="text-6xl " />,
      percentage: "80%",
    },
    {
      name: "Final Cut Pro",
      icon: <FaApple className="text-6xl " />,
      percentage: "75%",
    },
  ];

  return (
    <Box sx={{ padding: "50px", color: "white", mt: 10 }}>
      {/* Header Button */}
      <button className="header-button">
        <MdOutlineDesignServices />
        Services
      </button>

      {/* Section Headers */}
      <h1 className="text-5xl text-white" style={{ lineHeight: "1.1" }}>
        My <span className="text-[#14c5fd]">Advantages</span>
      </h1>

      {/* Skill Cards */}
      <Grid container spacing={3} justifyContent="center">
        {skillData.map((skill, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px",
                height: "200px",
                borderRadius: "50px",
                border: "2px solid #565656",
                transition: "0.3s",
                "&:hover": { borderColor: "#14c5fd" },
                mt: 10,
              }}
            >
              {/* Icon */}
              {skill.icon}

              {/* Percentage */}
              <Typography
                sx={{
                  color: "#14c5fd",
                  mt: 2,
                  fontSize: "30px",
                }}
              >
                {skill.percentage}
              </Typography>
            </Box>

            {/* App Name */}
            <Typography
              sx={{
                color: "white",
                mt: 2,
                fontSize: "20px",
                textAlign: "center",
              }}
            >
              {skill.name}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
