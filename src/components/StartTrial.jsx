import { Link } from "react-router-dom";

export default function Hero({ banner }) {
  return (
    <>
      <Link to="/pay/freeTrial" className="theme-btn wow fadeInUp d-none d-lg-block" data-wow-delay=".3s">
        Start free trial <i className="fa-solid fa-arrow-right"></i>
      </Link>
       <Link to="/pay/freeTrial" className="theme-btn style-2 video-popup wow fadeInUp d-block d-lg-none" data-wow-delay=".5s">
               Start free trial <i className="fa-solid fa-arrow-right"></i>
            </Link>
    </>
  );
}
