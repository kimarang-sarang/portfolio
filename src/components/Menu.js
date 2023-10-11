import { Box, Typography, styled } from "@mui/material";
import React from "react";
import StarsTwoToneIcon from "@mui/icons-material/StarsTwoTone";

export default function Menu() {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    backgroundColor: "pink",
    borderRadius: "6px",
    padding: 3,
    maxWidth: "90vw",
    flexDirection: "column",
    justifyContent: "space-around",
    [theme.breakpoints.down("fold")]: {
      flexWrap: "no-wrap",
    },
    [theme.breakpoints.up("fold")]: {
      flexWrap: "wrap",
      maxHeight: "80vh",
    },
  }));

  const CustomTitleBox = styled(Box)(({ theme }) => ({
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      gap: "2rem",
    },
  }));
  return (
    <Box sx={{ maxWidth: "1300px", padding: 3, mx: "auto" }}>
      <CustomTitleBox
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          mb: 1,
        }}
      >
        <Typography
          variant="h4"
          style={{
            color: "#50586c",
            textAlign: "center",
            fontFamily: "monospace",
            fontWeight: "bolder",
          }}
        >
          MENU
        </Typography>
        <div
          style={{
            height: "5px",
            backgroundColor: "#00C7FF",
            width: "50%",
            border: 0,
            borderRadius: "25px",
          }}
        ></div>
      </CustomTitleBox>

      {/* <Typography
        variant="h4"
        style={{
          color: "#50586c",
          fontFamily: "monospace",
          fontWeight: "bolder",
          alignSelf: "flex-start",
          marginTop: 15,
          marginLeft: 20,
        }}
      >
        MENU
      </Typography> */}
      <CustomBox sx={{}}>
        {menu.map((m) => (
          <Box
            key={m.name}
            sx={{ display: "flex", alignItems: "center", flexGrow: "1" }}
          >
            <StarsTwoToneIcon sx={{ color: "yellow" }} />
            <Typography variant="body2">{m.name}</Typography>
          </Box>
        ))}
      </CustomBox>
    </Box>
  );
}

const menu = [
  { name: "닭춤 [30초] 99개" },
  { name: "콩나물 [30초] 111개" },
  { name: "지나패 112개" },
  { name: "띰뽀띰뽀 130개" },
  { name: "랑쿠란보 131개" },
  { name: "홍박사 155개" },
  { name: "퍼킹뱅어 185개" },
  { name: "DOLPHIN 190개" },
  { name: "GUCCI 197개" },
  { name: "I AM 200개" },
  { name: "핫해 282개" },
  { name: "난 예술이야 289개" },
  { name: "이꾸욧 296개" },
  { name: "무이 300개" },
  { name: "러브쉐이크 328개" },
  { name: "랑테츠 [1분] 333개" },
  { name: "SUPER SHY 342개" },
  { name: "FAST FORWARD 390개" },
  { name: "AH YEAH 399개" },
  { name: "던던댄스 402개" },
  { name: "레디올낫 403개" },
  { name: "테디베어 404개" },
  { name: "OMG 409개" },
  { name: "다이너마이트 411개" },
  { name: "퀸카 428개" },
  { name: "1분1초 441개" },
  { name: "DANGER 444개" },
  { name: "언포기븐 446개" },
  { name: "띵띵땅땅 454개" },
  { name: "킥드배 456개" },
  { name: "티모송 475개" },
  { name: "SPICY 477개" },
  { name: "HYPE BOY 488개" },
  { name: "댄스 492개" },
  { name: "룰렛 92개 920개" },
];
