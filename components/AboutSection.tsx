import Link from "next/link";
import Image from "next/image";
import { Box, Container, Divider, Grid, makeStyles } from "@material-ui/core";
import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  section: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      height: "1000px",
    },
  },
  bg: {
    position: "absolute",
    background: "#FFFAC2",
    height: "100%",
    width: "100%",
    zIndex: -10,
    [theme.breakpoints.down("sm")]: {
      height: "1000px",
    },
  },

  content: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    [theme.breakpoints.down("sm")]: {
      height: "300px",
      width: "300px",
    },
  },
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
      boxShadow: "30px 30px 20px #0003",
    },
    ["&:active"]: {
      transform: "scale(1.03)",
      boxShadow: "20px 20px 15px #0004",
    },
  },
}));

export default function AboutSection() {
  const classes = useStyles();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Box id="about" className={classes.section} component="section">
        <div className={classes.bg}></div>
        <Container>
          <Grid container className={classes.content}>
            <Grid className={classes.image} item>
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
                  <h2 className={classes.title}>My Mission</h2>
                  <Divider />
                </Grid>
                <Grid item>
                  <p className={classes.text}>
                    <span className="bold">My mission is simple</span> and that
                    is to give each and every animal the <em>cleanest</em> and
                    most <em>comfortable</em> grooming experience imaginable.
                  </p>
                  <p className={classes.text}>
                    I treat and care for each animal as if they were my own, and
                    use the best grooming techniques and products for them, as
                    they deserve the best!
                  </p>
                  <p className={classes.text}>
                    Doing this is just something that I love! As an highly
                    experienced groomer, I never disappoint!
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
    </motion.div>
  );
}
