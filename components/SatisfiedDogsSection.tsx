import { Box, Container, Grid, makeStyles } from "@material-ui/core";
import DogCard from "./DogCard";
const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Montserrat, sans-serif",
  },
  section: {
    position: "relative",
    marginTop: "7%",
  },
  title: {
    textAlign: "center",
    fontSize: "2rem",
    color: "#111",
  },
  card1Image: {
    background: 'url("/images/dog-on_bw-dog.jpg") center/cover',
    width: "165px",
    height: "177px",
    borderRadius: "50%",
    margin: "auto",
  },
  card2Image: {
    background: 'url("/images/dog-on_small-dog.jpg") center/cover',
    width: "165px",
    height: "177px",
    borderRadius: "50%",
    margin: "auto",
  },
  card3Image: {
    background: 'url("/images/dog-on_poodle.jpg") center/cover',
    width: "165px",
    height: "177px",
    borderRadius: "50%",
    margin: "auto",
  },
  card: {
    maxWidth: "380px",
    height: "450px",
    borderRadius: "30px",
    [theme.breakpoints.down("xs")]: {
      height: "510px",
    },
  },
  textContainer: {
    padding: "0 3rem",
    textAlign: "center",
    color: "#444",
  },
}));
export default function SatisfiedDogsSection() {
  const classes = useStyles();
  return (
    <Box id="services" className={classes.section} component="section">
      <Container>
        <h2 className={classes.title}>Meet My Satisfied Dogs</h2>
        <Grid spacing={3} justify="center" alignItems="center" container>
          <Grid item>
            <DogCard classes={classes} imageStyle={classes.card1Image} />
          </Grid>
          <Grid item>
            <DogCard classes={classes} imageStyle={classes.card2Image} />
          </Grid>
          <Grid item>
            <DogCard classes={classes} imageStyle={classes.card3Image} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
