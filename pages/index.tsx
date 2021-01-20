import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import {
  Box,
  Container,
  Grid,
  Card,
  makeStyles,
  IconButton,
  Avatar,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import { Facebook, Instagram, House, Phone } from "@material-ui/icons";
import Nav from "../components/Nav";
import Header from "../components/Header";
import AboutSection from "../components/AboutSection";
import { url } from "inspector";
import SatisfiedDogsSection from "../components/SatisfiedDogsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const useStyles = makeStyles({
  root: {
    fontFamily: "Montserrat, sans-serif",
  },
});
export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Head>
        <title>Dog-Gone Beautiful</title>
        <meta
          name="description"
          content="I have been Professionally Grooming Dogs for the past Ten Years, making them look beautiful and squeaky clean! Give me a call today!"
        />
        <meta
          name="keywords"
          content="Grooming, Groomer, Dogs, Dog, Poodles, Poodle, Pitbulls, Pitbull, Clean, Beautiful, Pretty, Chiwawas, Professional, Services, Dog-Gone Beautiful"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Nav />
      <Header />
      <AboutSection />
      <SatisfiedDogsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
