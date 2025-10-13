import { Link } from "react-router-dom";
import DOMPurify from "dompurify";
export default function AboutUsSection({ about }) {
  return (
    <>
      <section
        className="project-section style-1 fix section-padding ams_none1 pb-4 "
        id="about-us"
      >
        <div className="container custom-pt-0 custom-pt-3">
          <div className="ams_none">
            <div className="custom-pt-0 custom-pt-3"></div>
            <div className="custom-pt-0 custom-pt-3"></div>
          </div>
          <div className="row align-items-center custom-pt-0 custom-pt-3">
            <div className="col-12 col-md-6 d-none d-lg-block ">
              <div className="about-us-img">
                <img
                  fetchPriority="low"
                  src={about?.[0]?.image}
                  alt="img"
                  className="img-fluid rounded-3 w-100"
                  loading="lazy"
                  width="636"
                  height="444"
                />
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-6">
              <div className="about-us-content">
                <div className="text-start mb-2">
                  <h2 className="title-anim h2 orange-clr fw-bold">
                    {" "}
                    About Us
                  </h2>
                </div>
                {/* <h2 className='fs-2'> About Us </h2> */}
                {/* <p
                  className="mb-0"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(about?.[0]?.message),
                  }}
                ></p> */}
                <p className="mb-0">
                  {" "}
                  EdTech Innovate Pvt. Ltd. is a leading architect of the
                  digital education ecosystem in India. Our Admission Management
                  system (AMS) transforms admission into sacred beginnings. It
                  replaces manual relics with intelligent, student-centric work
                  flows. From inquiry to alumni, AMS streamlines every step with
                  grace and precision.Institutions gain access to real-time
                  tracking, secure uploads and automated communication.
                  Dashboards offer clarity to admin teams, while CRM integration
                  ensures seamless outreach. AMS adapts to institutions of all
                  sizes, honouring their unique rhythms. We design with empathy,
                  update with intention and celebrate every milestone together.
                  Student dignity and institutional excellence are at the heart
                  of our philosophy. Every feature is a blessing , every login a
                  step toward transformation. We promise clarity, speed and
                  integrity in every admission journey. With us in AMS,
                  admissions become not just efficient but ceremonial.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
