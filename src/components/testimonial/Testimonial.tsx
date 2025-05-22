import styles from "./testimonialStyles.module.css";

function Testimonial() {
  return (
    <div>
      <section className={styles.testimonial}>
        <div className={styles.testimonialParentDiv}>
          {/* Testimonial */}

          <aside className={styles.aside1}>
            {/* Testimonial text */}
            <h3>What they say about us</h3>
            <img src="img/userImage.png" alt="image of a testifier" />
            <img
              src="/img/stars.png"
              alt="image of a testifier's star review "
            />
            <h6>
              Slate helps you see how many more days you need to work to reach
              your financial goal.
            </h6>
            <p>Regina Miles</p>
            <h5>Designer</h5>
          </aside>

          <aside className={styles.aside2}>
            {/* Testimonial gallery */}

            <img src="/img/img1.png" alt="testimonial gallery image" />
            <img src="/img/img2.png" alt="testimonial gallery image" />
            <img src="/img/img3.png" alt="testimonial gallery image" />
            <img src="/img/img4.png" alt="testimonial gallery image" />
            <img src="/img/img5.png" alt="testimonial gallery image" />
            <img src="/img/img6.png" alt="testimonial gallery image" />
            <img src="/img/img7.png" alt="testimonial gallery image" />
            <img src="/img/img8.png" alt="testimonial gallery image" />
            <img src="/img/img9.png" alt="testimonial gallery image" />
          </aside>
        </div>
      </section>

      <section className={styles.cta}>
        {/* Call To Action */}
        <div>
          <h6>Designing Better Experience</h6>
          <h2>Problems trying to resolve the conflict between </h2>
          <p>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics:{" "}
          </p>
          <h3>$16.48</h3>
          <button>ADD YOUR CALL TO ACTION</button>
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
