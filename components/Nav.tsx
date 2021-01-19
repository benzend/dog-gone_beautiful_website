import Link from "next/link";
import Image from "next/image";

import {
  Box,
  Container,
  Grid,
  Card,
  makeStyles,
  IconButton,
} from "@material-ui/core";
import { Facebook, Instagram } from "@material-ui/icons";

const useStyles = makeStyles({
  nav: {
    position: "sticky",
    top: 0,
    left: 0,
    padding: "1rem",
    zIndex: 10,
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
  },
  navPageLinks: {
    display: "flex",
    justifyContent: "space-around",
    width: "700px",
    fontWeight: "bold",
  },
  navPageLink: {
    cursor: "pointer",
    borderRadius: 30,
    padding: "1rem 2rem",
    transition: "all .3s ease",
    ["&:hover"]: {
      background: "#F8ED6C",
    },
  },
  socialNavLinks: {
    display: "flex",
  },
});

export default function Nav() {
  const classes = useStyles();
  return (
    <Box className={classes.nav} component="nav">
      <Container className={classes.navContainer}>
        <Box>
          <Image
            src="/images/dog-on_logo.jpg"
            alt="dog-gone logo"
            width="121px"
            height="121px"
          />
        </Box>
        <Box className={classes.navLinks}>
          <Box className={classes.navPageLinks}>
            <Link href="/">
              <div className={classes.navPageLink}>Home</div>
            </Link>
            <Link href="/services">
              <div className={classes.navPageLink}>Services</div>
            </Link>
            <Link href="/about">
              <div className={classes.navPageLink}>About</div>
            </Link>
            <Link href="/contact">
              <div className={classes.navPageLink}>Contact</div>
            </Link>
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
            {/* <a href="https://instagram.com">
              <IconButton>
                <Instagram />
              </IconButton>
            </a> */}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
