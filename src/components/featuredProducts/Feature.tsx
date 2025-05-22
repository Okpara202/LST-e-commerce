import { Link } from "react-router-dom";
import styles from "./feature.module.css";

function Feature() {
  return (
    <section className={styles.feature}>
      <aside className={styles.featureAside1}>
        {/* Featured Products */}

        <div className={styles.featureProductsTitle}>
          <h4>Featured Products</h4>
          <h3>THE BEST SERVICES</h3>
          <p>Problems trying to resolve the conflict between </p>
        </div>

        <div className={styles.featureAnalysis}>
          <div>
            <img src="/img/easy.svg" alt="Easy icon" />
            <h3>Easy Wins</h3>
            <p>
              Get your best looking smile <br /> now!
            </p>
          </div>

          <div>
            <img src="/img/concrete.svg" alt="concrete icon" />
            <h3>Concrete</h3>
            <p>
              Defalcate is most focused in <br /> helping you discover your most
              <br />
              beautiful smile
            </p>
          </div>

          <div>
            <img src="/img/hack.svg" alt="hack icon" />
            <h3>Hack Growth</h3>
            <p>
              Overcome any hurdle or any <br /> other problem.
            </p>
          </div>
        </div>
      </aside>

      <aside className={styles.featureAside2}>
        {/* Featured Posts */}

        <div className={styles.featureProductsTitle}>
          <h6>Practice Advice</h6>
          <h2>Featured Posts</h2>
        </div>

        <div className={styles.FeaturedPost}>
          <div className={styles.featuredPostParentDiv}>
            <aside className={styles.featuredPostParentDivAside1}>
              <img src="/img/post1.png" alt="bedroom image" />
              <p>NEW</p>
            </aside>

            <aside className={styles.featuredPostParentDivAside2}>
              <div className={styles.featuredSpan}>
                <span>Google</span>
                <span>Trending</span>
                <span>New</span>
              </div>

              <h4>
                Loudest à la Madison #1 <br />
                (L'integral)
              </h4>

              <p>
                We focus on ergonomics and meeting <br /> you where you work.
                It's only a <br /> keystroke away.
              </p>

              <div className={styles.clock}>
                <p>
                  <img src="/img/clock.png" alt="clock icon" /> 22 April 2021
                </p>
                <p>
                  <img src="/img/analyze.png" alt="clock icon" /> 10 comments
                </p>
              </div>

              <Link to={"#"}>
                Learn More <img src="/img/caretSide.png" alt="caret icon" />
              </Link>
            </aside>
          </div>

          <div className={styles.featuredPostParentDiv}>
            <aside className={styles.featuredPostParentDivAside1}>
              <img src="/img/post2.png" alt="bedroom image" />
              <p>NEW</p>
            </aside>

            <aside className={styles.featuredPostParentDivAside2}>
              <div className={styles.featuredSpan}>
                <span>Google</span>
                <span>Trending</span>
                <span>New</span>
              </div>

              <h4>
                Loudest à la Madison #1 <br />
                (L'integral)
              </h4>

              <p>
                We focus on ergonomics and meeting <br /> you where you work.
                It's only a <br /> keystroke away.
              </p>

              <div className={styles.clock}>
                <p>
                  <img src="/img/clock.png" alt="clock icon" /> 22 April 2021
                </p>
                <p>
                  <img src="/img/analyze.png" alt="clock icon" /> 10 comments
                </p>
              </div>

              <Link to={"#"}>
                Learn More <img src="/img/caretSide.png" alt="caret icon" />
              </Link>
            </aside>
          </div>

          <div className={styles.featuredPostParentDiv}>
            <aside className={styles.featuredPostParentDivAside1}>
              <img src="/img/post3.png" alt="bedroom image" />
              <p>NEW</p>
            </aside>

            <aside className={styles.featuredPostParentDivAside2}>
              <div className={styles.featuredSpan}>
                <span>Google</span>
                <span>Trending</span>
                <span>New</span>
              </div>

              <h4>
                Loudest à la Madison #1 <br />
                (L'integral)
              </h4>

              <p>
                We focus on ergonomics and meeting <br /> you where you work.
                It's only a <br /> keystroke away.
              </p>

              <div className={styles.clock}>
                <p>
                  <img src="/img/clock.png" alt="clock icon" /> 22 April 2021
                </p>
                <p>
                  <img src="/img/analyze.png" alt="clock icon" /> 10 comments
                </p>
              </div>

              <Link to={"#"}>
                Learn More <img src="/img/caretSide.png" alt="caret icon" />
              </Link>
            </aside>
          </div>
        </div>
      </aside>
    </section>
  );
}

export default Feature;
