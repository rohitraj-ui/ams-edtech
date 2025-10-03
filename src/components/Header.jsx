// src/components/Header.jsx
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>     
      <header className="header sticky-top">
        <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img
                src="/assets/img/logo/logo.png"
                width="150"
                height="150"
                alt="edtech logo"
                class="img-fluid rounded-3"
                loading="eager"
                fetchpriority="high"
              />
              {/* <picture>
                <source
                  srcSet="/assets/img/logo/logo.webp 480w, /assets/img/logo/logo.webp 768w, /assets/img/logo/logo.webp 1270w"
                  type="image/webp"
                  sizes="(max-width: 480px) 50px, (max-width: 768px) 60px, 120px"
                />
                <img
                  src="/assets/img/logo/logo.png"
                  alt="Hero Banner"
                  className="img-fluid rounded-3"
                  width="120"
                  height="60"
                  fetchPriority="high"
                  loading="eager"
                  style={{ objectFit: "cover" }}
                />
              </picture> */}
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  {/* <Link className="nav-link active" aria-current="page" to="#"> About Us </Link> */}
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#about-us"
                  >
                    {" "}
                    About Us{" "}
                  </a>
                </li>
                <li className="nav-item">
                  {/* <Link className="nav-link" to="#"> Services </Link> */}
                  <a className="nav-link" href="#service">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  {/* <Link className="nav-link" to="#pricing"> Pricing </Link> */}
                  <a className="nav-link" href="#pricing">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  {/* <Link className="nav-link" to="#"> Contact Us </Link> */}
                  <a className="nav-link" href="#footer">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
