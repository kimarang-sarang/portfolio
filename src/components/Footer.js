import { Box, Typography } from "@mui/material";
import React from "react";
import afLogo from "../assets/images/afLogo.svg";
import instagramLogo from "../assets/images/instagramLogo.svg";
import namuLogo from "../assets/images/namuLogo.svg";
import tiktokLoo from "../assets/images/tiktokLogo.svg";
import youtubeLogo from "../assets/images/youtubeLogo.svg";
import CopyrightIcon from "@mui/icons-material/Copyright";
// import ygosuLogo from '../assets/images/ygosuLogo.png'

const Footer = () => {
  return (
    <Box
      sx={{
        maxWidth: "1200px",
        mx: "auto",
        padding: 3,
        display: "flex",
        justifyContent: { xs: "center", sm: "center", md: " flex-start" },
      }}
    >
      {/* <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="body1"
          sx={{ color: "#7B89A8", fontWeight: "bold", mb: 2 }}
        >
          PAGES
        </Typography>

        <Link
          to="home"
          className="link"
          smooth
          style={{ color: "white", margin: "0.5rem 0", cursor: "pointer" }}
        >
          Home
        </Link>
        <Link
          to="experience"
          className="link"
          smooth
          style={{ color: "white", margin: "0.5rem 0", cursor: "pointer" }}
        >
          Experience
        </Link>
        <Link
          to="about"
          className="link"
          smooth
          style={{ color: "white", margin: "0.5rem 0", cursor: "pointer" }}
        >
          About
        </Link>

        <Typography
          variant="body2"
          sx={{ color: "white", my: 1, cursor: "pointer" }}
        >
          Home
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "white", my: 1, cursor: "pointer" }}
        >
          Experience
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "white", my: 1, cursor: "pointer" }}
        >
          About
        </Typography>
      </Box> */}

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="body1"
          sx={{ color: "#7B89A8", fontWeight: "bold", mb: 2 }}
        >
          SOCIAL
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            marginBottom: 1,
          }}
        >
          <a
            href="https://bj.afreecatv.com/candyrang00"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={afLogo} width={25} alt="af" />
          </a>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            marginBottom: 1,
          }}
        >
          <a
            href="https://www.youtube.com/channel/UC7IQpjDxaNT3DF61wk0UgGg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={youtubeLogo} width={25} alt="youtube" />
          </a>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            marginBottom: 1,
          }}
        >
          <a
            href="https://www.instagram.com/ha_rang_sa_rang/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramLogo} width={25} alt="youtube" />
          </a>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            marginBottom: 1,
          }}
        >
          <a
            href="https://www.tiktok.com/@harangsarang0920"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={tiktokLoo} width={25} alt="youtube" />
          </a>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            marginBottom: 1,
          }}
        >
          <a
            href="https://namu.wiki/w/%ED%95%98%EB%9E%91e"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={namuLogo} width={25} alt="youtube" />
          </a>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 1,
          }}
        >
          {/* <a

            href="https://ygosu.com/board/starbbs"
            target="_blank"
            rel="noopener noreferrer"
          >
          <img src={ygosuLogo} width={25} alt='ygosu'/>
          </a> */}
          <CopyrightIcon />
          <Typography variant="body2">YGOSU SBG</Typography>
        </Box>
        {/* <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <GitHubIcon sx={{ mr: 2, color: "#50586c" }} />
          <Typography variant="body2" sx={{ color: "#50586c", my: 1 }}>
            Afreeca TV
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <EmailIcon sx={{ mr: 2, color: "#50586c" }} />
          <Typography variant="body2" sx={{ color: "#50586c", my: 1 }}>
            Email
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <LinkedInIcon sx={{ mr: 2, color: "#50586c" }} />
          <Typography variant="body2" sx={{ color: "#50586c", my: 1 }}>
            LinkedIn
          </Typography>
        </Box> */}
      </Box>
    </Box>
  );
};

export default Footer;
