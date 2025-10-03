import { Link } from "react-router-dom";

export default function Fail() {
  return (
    <section className="container my-5 py-3 text-center">
      <img
        src="/assets/img/fail-payment.jpg"
        width="400"
        alt="failed payment"
        className="img-fluid"
        loading="lazy"
      />
      <p className="mt-3 text-danger fw-bold">
        Payment Failed. Please try again or contact support.
      </p>
      <p>
        Go back to <Link to="/" > <span className="text-black fw-bold link-underline-dark" style={{ textDecoration: 'underline' }}> Home </span></Link>
      </p>
    </section>
  );
}
