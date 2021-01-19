import Link from "next/link";
import Image from "next/image";
import { Box, Container, Divider, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  section: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  bg: {
    position: "absolute",
    background: "#FFFAC2",
    height: "100%",
    width: "100%",
    zIndex: -10,
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {},
  textContainer: {
    width: 800,
    padding: "0 2rem",
  },
  title: {
    color: "#111",
    fontSize: "2rem",
  },
  text: {
    color: "#333",
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#FFF798",
    borderRadius: 27,
    width: 208,
    height: 58,
    fontWeight: "bold",
    boxShadow: "4px 4px 4px #0005",
    cursor: "pointer",
    marginTop: "1rem",
    transition: "all .3s ease",
    ["&:hover"]: {
      transform: "scale(1.05)",
      boxShadow: "10px 10px 8px #0004",
    },
    ["&:active"]: {
      transform: "scale(1.03)",
      boxShadow: "8px 8px 7px #00045",
    },
  },
});

export default function AboutSection() {
  const classes = useStyles();
  return (
    <Box className={classes.section} component="section">
      <div className={classes.bg}></div>
      <Container>
        <Grid container className={classes.content}>
          <Grid item>
            <Image
              src="/images/dog-on_pitbull.jpg"
              width={400}
              height={400}
              alt="pitbull for dog-gone"
            />
          </Grid>
          <Grid className={classes.textContainer} item>
            <Grid container>
              <Grid item>
                <h2 className={classes.title}>What I Do</h2>
                <Divider />
              </Grid>
              <Grid item>
                <p className={classes.text}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos animi debitis obcaecati architecto?
                </p>
                <p className={classes.text}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Harum porro nihil fuga placeat veniam officia reprehenderit
                  accusantium recusandae.
                </p>
                <p className={classes.text}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Inventore
                </p>
              </Grid>
              <Grid item>
                <Link href="/about">
                  <div className={classes.button}>More About Me</div>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
