import React from "react";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";

import rang1 from "../assets/images/1.jpg";
import rang2 from "../assets/images/2.jpg";
import rang3 from "../assets/images/3.jpg";
import rang4 from "../assets/images/4.jpg";
import rang5 from "../assets/images/5.jpg";
import rang6 from "../assets/images/6.jpg";
import rang7 from "../assets/images/7.jpg";
import rang8 from "../assets/images/8.png";
import rang9 from "../assets/images/9.jpg";
import rang10 from "../assets/images/10.webp";
import rang11 from "../assets/images/11.jpg";
import rang12 from "../assets/images/12.webp";
import rang13 from "../assets/images/13.jpg";
import rang14 from "../assets/images/14.jpg";
import rang15 from "../assets/images/15.jpg";
import { Container, Typography } from "@mui/material";
import classes from "./Gallery.module.css";

// const Label = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(0.5),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
//   borderBottomLeftRadius: 0,
//   borderBottomRightRadius: 0,
// }));

export default function Gallery() {
  return (
    <Container disableGutters>
      <Box
        sx={{
          width: { xs: "auto", md: 800, lg: 1200 },
          minHeight: 830,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
        id="gallery"
      >
        <Typography
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
          GALLERY
        </Typography>
        <Masonry columns={{ xs: 2, sm: 3, md: 5, lg: 7 }} spacing={2}>
          {itemData.map((item, index) => (
            <div key={index} className={classes.image_container}>
              {/* <Label>{index + 1}</Label> */}
              <img
                srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                src={`${item.img}?w=162&auto=format`}
                alt={item.title}
                loading="lazy"
                style={{
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                  display: "block",
                  width: "100%",
                }}
              />
            </div>
          ))}
        </Masonry>
      </Box>
    </Container>
  );
}

const itemData = [
  { img: rang1, title: "rang1" },
  { img: rang2, title: "rang2" },
  { img: rang3, title: "rang3" },
  { img: rang4, title: "rang4" },
  { img: rang5, title: "rang5" },
  { img: rang6, title: "rang6" },
  { img: rang7, title: "rang7" },
  { img: rang8, title: "rang8" },
  { img: rang9, title: "rang9" },
  { img: rang10, title: "rang10" },
  { img: rang11, title: "rang11" },
  { img: rang12, title: "rang12" },
  { img: rang13, title: "rang13" },
  { img: rang14, title: "rang14" },
  { img: rang15, title: "rang15" },
];
