import { Link } from "react-router-dom";
import Head from "../../components/Head/Head";
import Noname from "../../components/Noname/Noname";
import Project from "../../components/Prioject/Project";
import classes from "./Home.module.scss";

const Home = () => {
  
  return (
    <main className={classes.Home}>
      <Head/>
      <Noname/>
      <Project/>
    </main>
  );
};

export default Home;
