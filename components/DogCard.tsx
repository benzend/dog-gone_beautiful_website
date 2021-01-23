import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CardHeader,
} from "@material-ui/core";
import { motion } from "framer-motion";

export default function DogCard({
  classes,
  imageStyle,
  text,
  text2,
  text3,
  name,
}: any) {
  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <Card className={classes.card}>
        <CardContent>
          <CardMedia>
            <div className={imageStyle}></div>
          </CardMedia>
          <h3>{name}</h3>
          <Box className={classes.textContainer}>
            <p>{text}</p>
            <p>{text2}</p>
            <p>{text3}</p>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
}
