import { Box } from "@mui/material";
import React from "react";
import shortOpener from "../assets/videos/shortOpener.mp4";

export default function Hero() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
      id="hero"
    >
      <video
        autoPlay
        loop
        muted
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <source src={shortOpener} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Box>
  );
}
