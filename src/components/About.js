import { Box, Typography, styled } from "@mui/material";
import React from "react";
import Testimonial from "./Testimonial";

const About = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      gap: "2rem",
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

  // const CustomButton = styled(Button)(({ theme }) => ({
  //   border: "3px solid white",
  //   borderRadius: "25px",
  //   color: "#50586c",
  //   width: "15%",
  //   display: "block",
  //   "&:hover": {
  //     border: "3px solid #00C7FF",
  //   },
  //   [theme.breakpoints.down("md")]: {
  //     width: "50%",
  //   },
  //   [theme.breakpoints.down("sm")]: {
  //     width: "75%",
  //   },
  // }));

  return (
    <Box sx={{ maxWidth: "1300px", my: 10, padding: 3, mx: "auto" }} id="about">
      <CustomTitleBox
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
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
          하랑이는..
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

      <CustomBox sx={{ my: 7 }}>
        <Testimonial
          msg="인간 비타민이다. 밝은 에너지 그 자체이다."
          name="염보성"
          position="YB Entertainment 대표"
        />
        <Testimonial
          msg="실물을 보는 순간 얼어붙었다. 원래 좋아하는 스타 여캠이 있었지만 하랑이를 보는 순간 내 꿈과 목표가 바뀌었다."
          name="황디임"
          position="(주)와이고수 공동 대표"
        />
        <Testimonial
          msg="스타여캠 GOAT. 원래 모시던 주인님이 있었지만 하랑이를 처음 본 순간 내 삶이 통째로 부정당하는 느낌을 받았다. 오! 강렬했다."
          name="검은수야"
          position="CEO of YGOSU"
        />
      </CustomBox>

      <div
        style={{
          height: "5px",
          backgroundColor: "#00C7FF",
          width: "100%",
          mx: "auto",
          border: 0,
          borderRadius: "25px",
        }}
      ></div>

      {/* <Typography
        variant="h4"
        sx={{ color: "#50586c", mt: 12, textAlign: "center" }}
      >
        Interested in Working Together?
      </Typography>
      <CustomButton
        variant="outlined"
        sx={{
          mx: "auto",
          mt: 3,
          mb: 8,
        }}
      >
        Get in Touch
      </CustomButton> */}
    </Box>
  );
};

export default About;
