import { Link } from "react-router-dom";
import StartTrial from "./StartTrial";
export default function Hero({ banner }) {
  const hero = banner?.[0] || {};

  return (
    <>
      <section className="hero-section hero-1 bg-cover bg-light">
        <div className="container">

          <div className="row">
            <div className="col-12 col-xl-6">
              <div className="hero-content">
                <h1 className="title-anim text-start fw-bold">
                  {hero.heading || "Power your business with"}{" "}
                  <span>{hero.highlight_heading || "Edtech AMS"}</span>
                </h1>
                <p className="wow fadeInUp text-start" data-wow-delay=".3s"> {hero.sub_heading || ""} </p>

                <ul className="text-start ps-1 my-3">
                  <li className="mb-2">
                    <i className="fa-sharp fa-solid fa-circle-check text-success me-2"></i>
                    <span className="text-muted">
                      <b>1000+</b> Reviews on
                    </span>
                  </li>
                  <li className="mb-2">
                    <i className="fa-sharp fa-solid fa-circle-check text-success me-2"></i>
                    <span className="text-muted">No credit card required</span>
                  </li>
                  <li className="mb-2">
                    <i className="fa-sharp fa-solid fa-circle-check text-success me-2"></i>
                    <span className="text-muted"> Trusted by <b>200+</b> Companies </span>
                  </li>
                </ul>

                <div className="hero-button mb-4">
                  <StartTrial />
                  <Link
                    to="#"
                    className="theme-btn style-2 video-popup wow fadeInUp d-none d-lg-block"
                    data-wow-delay=".5s"
                  >
                    Watch demo <i className="fa-regular fa-circle-play"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-12 col-xl-6">
              <div className="dashboard-section custom_none">
                <div className="dashboard-image rounded-3" >
                  <img src={hero.image} alt="Hero Banner" className="img-fluid" fetchPriority="high" loading="eager" />
                  {/* <picture>
              <source srcSet={hero.image} type="image/avif" />
              <source srcSet={hero.image} type="image/webp" />
              <img
                src={hero.image}
                alt="Hero Banner"
                className="img-fluid rounded-3"
                loading="lazy"
                width="1270"
                height="700"
              />
            </picture> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
