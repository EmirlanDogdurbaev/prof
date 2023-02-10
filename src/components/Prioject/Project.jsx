import { Link } from "react-router-dom";
import classes from "./Project.module.scss";

const Project = () => {
  const prod =
    "https://gweb-research-imagen.web.app/compositional/An%20oil%20painting%20of%20a%20British%20Shorthair%20cat%20wearing%20a%20cowboy%20hat%20and%20red%20shirt%20skateboarding%20on%20a%20beach./1_.jpeg";
  return (
    <section className={classes.Project}>
      <h4>мои проекты</h4>
      <div className={classes.card_cont}>
        <article className={classes.card}>
          <img src={prod} alt="projects " height={400} width={350} />
          <div>
            <h3>Lorem, ipsum dolor.</h3>
            <Link to="name1">see more</Link>
          </div>
        </article>
        <article className={classes.card}>
          <img src={prod} alt="projects " height={400} width={350} />
          <div>
            <h3>Lorem, ipsum dolor.</h3>
            <Link to="name1">see more</Link>
          </div>
        </article>
        <article className={classes.card}>
          <img src={prod} alt="projects " height={400} width={350} />
          <div>
            <h3>Lorem, ipsum dolor.</h3>
            <Link to="name1">see more</Link>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Project;
