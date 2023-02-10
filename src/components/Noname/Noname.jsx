import classes from "./Noname.module.scss";

const Noname = () => {
      const img2 = "data:image/png;base64,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" 
  return (
    <section className={classes.Noname}>
      <h3>Lorem ipsum dolor sit amet.</h3>
      <div>
        <article>
          <img src={img2} width={100} height={100} alt="icon" />
          <p>Lorem ipsum dolor sit.</p>
        </article>
        <article>
          <img src={img2} width={100} height={100} alt="icon" />
          <p>Lorem ipsum dolor sit.</p>
        </article>
        <article>
          <img src={img2} width={100} height={100} alt="icon" />
          <p>Lorem ipsum dolor sit.</p>
        </article>
      </div>
    </section>
  );
};

export default Noname;
