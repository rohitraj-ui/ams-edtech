import { Link } from "react-router-dom";

export default function Success() {
  return (

    <>

      <section>
        <div className="container mb-5">
          <div className="row align-items-center justify-content-center">
            <div className="col-12 col-md-5">
              <div className="video">
                <video
                  src="/assets/img/work-process/payment-done.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  // width={600}
                  alt="success image"
                  className="img-fluid"
                  loading='lazy' />
              </div>
            </div>

            <div className="col-12 col-md-12">
              <div className="message text-center">
                <h2 className="mb-3 text-success fs-1">Payment Successful 🎉</h2>
                <p className="lead">Thank you for your payment! Your transaction was completed successfully.</p>
                <p className="mt-4"> Go to <Link to="/" className="fw-bold">home</Link>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}