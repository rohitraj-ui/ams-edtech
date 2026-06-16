// src/pages/NotFound.jsx
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Best AMS - Edtech Innovate</title>
        <meta
          name="description"
          content="Best AMS Service - Edtech Innovate Pvt Ltd"
        />
      </Helmet>
      <section className="container my-5 py-3 text-center">
        <img src="/assets/img/404.png" alt="not_found image" loading="lazy" />
        <h2 className="mt-4">404 - Not Found</h2>
        <p>
          That page doesn’t exist. Go <Link to="/">home</Link>.
        </p>
      </section>
    </>
  );
}
