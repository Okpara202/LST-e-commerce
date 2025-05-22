import { Link } from "react-router-dom";
import styles from "./heroStyles.module.css";

function Hero() {
  return (
    <div className={styles.container}>
      <section className={styles.heroParent}>
        <div className={`${styles.div} ${styles.relativeDiv}`}>
          {/* left image */}
          <img src="/img/realFuniture1.png" alt="furniture1" />
          <div className={styles.absoluteDiv}>
            <h6>5 Items</h6>
            <h2>Furniture</h2>
            <Link to="#">Read More</Link>
          </div>
        </div>

        <div className={styles.heroRightParent}>
          <div className={styles.relativeDiv}>
            {/* Top right image */}
            <img src="/img/funiture2.png" alt="furniture2" />
            <div className={styles.absoluteDiv}>
              <h6>5 Items</h6>
              <h3>Furniture</h3>
              <Link to="#">Read More</Link>
            </div>
          </div>

          <div className={styles.heroRightBottomParent}>
            {/* Bottom Right Images */}
            <div className={styles.relativeDiv}>
              <img src="/img/funiture3.png" alt="furniture3" />
              <div className={styles.absoluteDiv}>
                <h6>5 Items</h6>
                <h3>Furniture</h3>
                <Link to="#">Read More</Link>
              </div>
            </div>

            <div className={styles.relativeDiv}>
              <img src="/img/funiture4.png" alt="furniture4" />
              <div className={styles.absoluteDiv}>
                <h6>5 Items</h6>
                <h3>Furniture</h3>
                <Link to="#">Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
