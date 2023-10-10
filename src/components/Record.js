import { Box, Container, Typography, styled } from "@mui/material";
import React from "react";
import ybLogo from "../assets/images/ybLogo.png";
import afLogo from "../assets/images/afLogo.svg";

export default function Record() {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      // gap: "1rem",
    },
  }));

  return (
    <Container sx={{ height: "100vh" }}>
      <CustomBox sx={{ display: "flex", justifyContent: "space-around" }}>
        <Box>
          <img src={ybLogo} alt="yb" width="100%" />
        </Box>
        <Box sx={{ margin: { lg: 10 } }}>
          <Typography variant="h4" fontFamily="cursive" fontWeight="bolder  ">
            MATCHES
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginBottom: 1,
            }}
          >
            <Typography m={1} variant="body1" fontFamily="cursive">
              vs 다뉴 1승
            </Typography>
            <a
              href="https://bj.afreecatv.com/candyrang00"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={afLogo} width={25} alt="af" />
            </a>
          </Box>
        </Box>
      </CustomBox>
    </Container>
  );
}

// https://vod.afreecatv.com/player/105005672
