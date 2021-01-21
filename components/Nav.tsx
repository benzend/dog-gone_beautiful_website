import Image from "next/image";

import { Box, Container, makeStyles, IconButton } from "@material-ui/core";
import { Facebook } from "@material-ui/icons";
import { useState } from "react";
import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  nav: {
    position: "sticky",
    top: 0,
    left: 0,
    padding: "1rem",
    zIndex: 10,
  },
  logo: {
    [theme.breakpoints.down("xs")]: {
      width: "40px",
      height: "40px",
    },
  },
  navContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navLinks: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      width: "500px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "300px",
    },
    [theme.breakpoints.down("xs")]: {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100%",
      height: "0",
      overflow: "hidden",
      flexDirection: "column",
      alignItems: "flex-start",
      backgroundColor: "#FFF798dd",
      transition: "height .3s ease",
      ["&.active"]: {
        height: "400px",
      },
    },
  },
  navPageLinks: {
    display: "flex",
    justifyContent: "space-around",
    width: "700px",
    fontWeight: "bold",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      width: "fit-content",
      height: "200px",
    },
  },
  navPageLink: {
    cursor: "pointer",
    borderRadius: 30,
    padding: "1rem 2rem",
    transition: "all .3s ease",
    ["&:hover"]: {
      background: "#F8ED6C",
    },
    [theme.breakpoints.down("sm")]: {
      padding: ".2rem .4rem",
    },
  },
  socialNavLinks: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "-8px",
    },
  },
  hamburger: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      cursor: "pointer",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "fixed",
      top: "10px",
      right: "10px",
    },
  },
  hamLines: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    left: "-10px",
    height: "40px",
    width: "40px",
  },
  hamLineTop: {
    position: "absolute",
    backgroundColor: "black",
    width: "30px",
    height: "3px",
    transition: "all .3s ease",

    ["&.active"]: {
      transform: "rotate(90deg)",
    },
  },
  hamLineMiddle: {
    position: "absolute",
    top: "10px",
    backgroundColor: "black",
    width: "30px",
    height: "3px",
    transition: "all .3s ease",

    ["&.active"]: {
      width: "15px",
      transform: "rotate(-45deg)",
      top: "10px",
      left: "8px",
    },
  },
  hamLineBottom: {
    position: "absolute",
    top: "28px",
    backgroundColor: "black",
    width: "30px",
    height: "3px",
    transition: "all .3s ease",
    ["&.active"]: {
      width: "15px",
      transform: "rotate(45deg)",
      top: "10px",
      left: "18px",
    },
  },
}));

export default function Nav() {
  const [navActive, setNavActive] = useState<boolean>(false);
  const classes = useStyles();
  return (
    <Box className={classes.nav} component="nav">
      <motion.div initial={{ y: -400 }} animate={{ y: 0 }}>
        <Container className={classes.navContainer}>
          <a href="#home" className={classes.logo}>
            <Image
              src="/images/dog-on_logo.jpg"
              alt="dog-gone logo"
              width="121px"
              height="121px"
            />
          </a>
          <Box
            className={
              navActive ? classes.navLinks + " active" : classes.navLinks
            }
          >
            <Box className={classes.hamburger}>
              <div
                className={classes.hamLines}
                onClick={() => setNavActive((prev) => !prev)}
              >
                <div
                  className={
                    navActive
                      ? classes.hamLineTop + " active"
                      : classes.hamLineTop
                  }
                ></div>
                <div
                  className={
                    navActive
                      ? classes.hamLineMiddle + " active"
                      : classes.hamLineMiddle
                  }
                ></div>
                <div
                  className={
                    navActive
                      ? classes.hamLineBottom + " active"
                      : classes.hamLineBottom
                  }
                ></div>
              </div>
            </Box>
            <Box className={classes.navPageLinks}>
              <a onClick={() => setNavActive((prev) => !prev)} href="#home">
                <div className={classes.navPageLink}>Home</div>
              </a>
              <a onClick={() => setNavActive((prev) => !prev)} href="#about">
                <div className={classes.navPageLink}>About</div>
              </a>
              <a onClick={() => setNavActive((prev) => !prev)} href="#services">
                <div className={classes.navPageLink}>Satisfaction</div>
              </a>
              <a onClick={() => setNavActive((prev) => !prev)} href="#contact">
                <div className={classes.navPageLink}>Contact</div>
              </a>
            </Box>
            <Box className={classes.socialNavLinks}>
              <a
                href="https://www.facebook.com/DogGoneBeautifulID/"
                target="_blank"
              >
                <IconButton>
                  <Facebook />
                </IconButton>
              </a>
            </Box>
          </Box>
        </Container>
      </motion.div>
    </Box>
  );
}
