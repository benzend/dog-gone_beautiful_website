import Link from "next/link";
import { Box, Container, Divider, makeStyles } from "@material-ui/core";
import { Business, PhoneAndroid } from "@material-ui/icons";
const useStyles = makeStyles({
  section: {
    position: "relative",
    marginTop: "7%",
  },
  bgContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    background: "#FFFAC2",
    zIndex: -10,
  },
  bg: {
    position: "absolute",
    zIndex: -10,
    width: "100%",
  },
  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  textContainer: {
    height: "44%",
    textAlign: "center",
  },
  title: {
    color: "#111",
    fontSize: "2rem",
  },
  subTitle: {
    paddingTop: "1rem",
  },
  text: {
    color: "#333",
    fontWeight: "bold",
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#FFF798",
    borderRadius: 27,
    width: 208,
    height: 58,
    boxShadow: "4px 4px 4px #0005",
    cursor: "pointer",
  },
});

export default function ContactSection() {
  const classes = useStyles();
  return (
    <Box className={classes.section} component="section">
      <Box className={classes.bgContainer}></Box>
      <Container>
        <Box className={classes.content}>
          <Box className={classes.textContainer}>
            <h2 className={classes.title}>Get In Touch with Me</h2>
            <h3 className={classes.subTitle}>
              Business Address and Phone Number
            </h3>
            <Divider />
            <Box marginTop="1rem">
              <Business />
              <p className={classes.text}>911 Caldwell Blvd</p>
              <p className={classes.text}>Nampa, ID, 83651</p>
              <PhoneAndroid />
              <p className={classes.text}>(208) 283-1234</p>
              <p className={classes.text}>Texting Prefered!</p>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
