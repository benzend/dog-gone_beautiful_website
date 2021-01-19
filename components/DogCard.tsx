import { Box, Card, CardContent, CardMedia } from "@material-ui/core";

export default function DogCard({ classes, imageStyle }: any) {
  return (
    <Card className={classes.card}>
      <CardContent>
        <CardMedia>
          <div className={imageStyle}></div>
        </CardMedia>
        <Box className={classes.textContainer}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            animi debitis obcaecati architecto?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
            porro nihil fuga placeat veniam officia reprehenderit accusantium
            recusandae.
          </p>
        </Box>
      </CardContent>
    </Card>
  );
}
