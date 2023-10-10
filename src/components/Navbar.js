import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

// const pages = [{ name: "Home",icon:,link:}];

export default function Navbar() {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "rgba(0,0,0,0.25)" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography>abc</Typography>
        <Typography>def</Typography>
      </Toolbar>
    </AppBar>
  );
}
