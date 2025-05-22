import { Link } from "react-router-dom";
import footerStyles from "./footerStyles.module.css";

function Footer() {
  return (
    <div className="">
      <div className={footerStyles.bandageParentDiv}>
        <section className={footerStyles.bandageDiv}>
          {/* Bandage and icon section */}
          <div className={footerStyles.bandage}>
            <h3>Bandage</h3>
            <aside>
              <img src="/img/blueFacebook.png" alt="facebook icon" />
              <img src="/img/blueInstagram.png" alt="Instagram icon" />
              <img src="/img/blueTwitter.png" alt="Twitter icon" />
            </aside>
          </div>
        </section>
      </div>

      <section className={footerStyles.footerLinks}>
        {/* Footer Links */}

        <aside>
          <h5>Company Info</h5>
          <Link to="#">About us</Link>
          <Link to="#">Carrier</Link>
          <Link to="#">We are hiring</Link>
          <Link to="#">Blog</Link>
        </aside>

        <aside>
          <h5>Legal</h5>
          <Link to="#">About us</Link>
          <Link to="#">Carrier</Link>
          <Link to="#">We are hiring</Link>
          <Link to="#">Blog</Link>
        </aside>

        <aside>
          <h5>Features</h5>
          <Link to="#">Business Marketing</Link>
          <Link to="#">User Analytic</Link>
          <Link to="#">Live Chat</Link>
          <Link to="#">Unlimited Support</Link>
        </aside>

        <aside>
          <h5>Resources</h5>
          <Link to="#">IOS & Android</Link>
          <Link to="#">Watch a Demo</Link>
          <Link to="#">Customers</Link>
          <Link to="#">Api</Link>
        </aside>

        <aside className={footerStyles.footerInput}>
          <h5>Get In Touch</h5>
          <div>
            <input type="email" placeholder="Your Email" />
            <button>Subscribe</button>
          </div>
          <p>Lore imp sum dolor Amit</p>
        </aside>
      </section>

      <section className={footerStyles.footerText}>
        {/* Bottom Text */}
        <h6>
          <span>Made With Love By</span> <span>Finland All Right Reserved</span>
        </h6>
      </section>
    </div>
  );
}

export default Footer;
