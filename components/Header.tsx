import Link from "next/link";
import { Box, Container, makeStyles } from "@material-ui/core";
import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "70vh",
    [theme.breakpoints.down("sm")]: {
      height: "600px",
    },
    [theme.breakpoints.down("xs")]: {},
  },
  headerImage: {
    borderRadius: 14,
    border: "1px solid black",
    background: "url('/images/dog-on_header.jpg') center center/cover",
    maxWidth: "1182px",
    height: "271px",
    margin: "auto",
    boxShadow: "4px 4px 4px #0005",
    [theme.breakpoints.down("md")]: {
      height: "200px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "140px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "90px",
    },
  },
  headerText: {
    fontSize: "3rem",
    color: "#444",
    textAlign: "center",
  },
  headerButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "87px",
    width: "315px",
    cursor: "pointer",
    background: "#FFF798",
    boxShadow: "4px 4px 4px #0005",
    fontSize: "1.8rem",
    color: "#111",
    fontWeight: "bolder",
    margin: "auto",
    borderRadius: 27,
    transition: "all .3s ease",
    ["&:hover"]: {
      boxShadow: "50px 50px 30px #0002",
      transform: "scale(1.05)",
    },
    ["&:active"]: {
      boxShadow: "35px 35px 20px #0003",
      transform: "scale(1.03)",
    },
    [theme.breakpoints.down("xs")]: {
      width: "250px",
      height: "70px",
    },
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
    >
      <Box id="home" component="header" className={classes.root}>
        <Container>
          <div className={classes.headerImage}></div>
          <h1 className={classes.headerText}>
            Come and get your dog beautified here!
          </h1>
          <motion.div>
            <Link href="#contact">
              <div className={classes.headerButton}>Get in Touch</div>
            </Link>
          </motion.div>
        </Container>
      </Box>
    </motion.div>
  );
}
