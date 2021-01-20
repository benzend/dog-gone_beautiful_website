import { Box, Container, Grid, makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    background: "#F8ED6C",
    height: "75px",
    display: "flex",
    alignItems: "center",
  },
  madeunlinkedText: {
    marginRight: "20px",
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
        <Grid container>
          <Grid item>
            <small className={classes.madeunlinkedText}>
              Copyright @ MadeUnlinked
            </small>
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
