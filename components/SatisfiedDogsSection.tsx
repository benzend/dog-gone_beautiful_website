import { Box, Container, Grid, makeStyles } from "@material-ui/core";
import { motion } from "framer-motion";
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
            <DogCard
              classes={classes}
              imageStyle={classes.card1Image}
              name="Fluffy"
              text="The owner was extremely satisfied with how his boy turned out!"
              text2="He came in a complete mess but came out with a shimmering white coat that put sparkles in our eyes."
              text3="They definitely walked out happy that day!"
            />
          </Grid>
          <Grid item>
            <DogCard
              classes={classes}
              imageStyle={classes.card2Image}
              name="Sparky"
              text="A sweety little puppy that never gives me a hard time!"
              text2="Sparky tends to just love being groomed and the owners are such kind, sweet people. I love all of them with all my heart!"
            />
          </Grid>
          <Grid item>
            <DogCard
              classes={classes}
              imageStyle={classes.card3Image}
              name="Denny"
              text="Denny is a casual who also loves the shop. I love giving him treats and playing around with him and his coat is so fluffy and nice!"
              text2="The first time the owners came in, they told me they're looking for a new place to groom there dog."
              text3="I've been seeing them ever since!"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
