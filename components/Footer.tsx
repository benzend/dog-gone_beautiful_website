import { Box, Container, Grid, makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    background: "#F8ED6C",
    height: "75px",
    display: "flex",
    alignItems: "center",
    padding: "0 2rem",
  },
  dogGoneText: {
    fontWeight: "bold",
  },
});

export default function Footer() {
  const classes = useStyles();
  return (
    <Box className={classes.root} component="footer">
      <Container>
        <Grid spacing={7} container>
          <Grid item>
            <small>Copyright @ MadeUnlinked</small>
          </Grid>
          <Grid item>
            <small>
              <span className={classes.dogGoneText}>Dog-Gone Beautiful</span> -
              A Dog Grooming Business
            </small>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
