import { Link } from "react-router-dom";
import classes from "./Home.module.scss";

const Home = () => {
      const img1 = "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
  return (
    <main className={classes.Home}>
      <section className={classes.first}>
        <h1>Lorem, ipsum. Lorem, ipsum dolor.</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae,
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dolorem porro eaque soluta rerum 
          quis.
        </p>

        <Link to="contacts">
            Call
        </Link>
      </section>
      <section>
            <img src={img1} alt="this axaxa"  width={500}/>
      </section>
    </main>
  );
};

export default Home;
