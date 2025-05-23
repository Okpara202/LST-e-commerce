import { useState } from "react";
import headerStyle from "./headerStyles.module.css";
import { Link } from "react-router-dom";

function Header() {
  const [toggleMiniNav, setToggleMiniNav] = useState<boolean>(false);

  // Open and Close mobile menu
  const handleToggleMiniNav = () => {
    setToggleMiniNav((prevState) => !prevState);
  };

  return (
    <header>
      {/* DropDown Mobile menu */}
      <nav
        className={
          toggleMiniNav ? headerStyle.mobileMenu : headerStyle.initialMobileMenu
        }
      >
        <ul>
          <Link to="#">
            <li>Home</li>
          </Link>
          <Link to="#">
            <li>Shop</li>
          </Link>
          <Link to="#">
            <li>Product</li>
          </Link>
          <Link to="#">
            <li>Pricing</li>
          </Link>
          <Link to="#">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>

      {/* Green announcement on top */}
      <section className={headerStyle.announcement}>
        <div className={headerStyle.parentDiv}>
          <div className={headerStyle.annoucementTelephone}>
            <p>
              <img src="img/telephone.png" alt="telephone icon" /> (225)
              555-0118
            </p>
            <p>
              <img src="img/email.png" alt="Email icon" />{" "}
              michelle.rivera@example.com
            </p>
          </div>
          <div>
            <p>Follow Us and get a chance to win 80% off</p>
          </div>
          <div className={headerStyle.socials}>
            <p>Follow Us :</p>
            <img src="/img/instagram.png" alt="instagram icon" />
            <img src="/img/youtube.png" alt="youtube icon" />
            <img src="/img/facebook.png" alt="facebook icon" />
            <img src="/img/twitter.png" alt="twitter icon" />
          </div>
        </div>
      </section>

      {/* Main Header Nav */}
      <section className={headerStyle.headerNav}>
        <nav>
          <h1>Bandage</h1>
          <ul>
            <Link to="#">
              <li>Home</li>
            </Link>
            <Link to="#">
              <li>
                Shop <img src="/img/down arrow.png" alt="arrow down icon" />
              </li>
            </Link>
            <Link to="#">
              <li>About</li>
            </Link>
            <Link to="#">
              <li>Blog</li>
            </Link>
            <Link to="#">
              <li>Contact</li>
            </Link>
            <Link to="#">
              <li>Pages</li>
            </Link>
          </ul>
        </nav>
        <div className={headerStyle.cartSection}>
          <p>
            <img src="/img/user.png" /> Login / Register
          </p>
          <img src="/img/search.png" />
          <img src="/img/cart.png" />
          <img src="/img/favorite.png" />
        </div>

        {/* Mobile screen nav buttons */}
        <aside className={headerStyle.miniIcon}>
          <Link to="#">
            <img src="img/miniSearch.png" alt="search icon" />
          </Link>
          <Link to="#">
            <img src="img/miniCart.png" alt="cart icon" />
          </Link>
          <Link to="#">
            <img
              onClick={handleToggleMiniNav}
              src="img/menuBar.png"
              alt="Bar icon"
            />
          </Link>
        </aside>
      </section>
    </header>
  );
}

export default Header;
