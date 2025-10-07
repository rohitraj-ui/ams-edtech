import axios from "axios";
import { Link } from "react-router-dom";
export default function Pricing({ pricing = [] }) {
  const styles = ["", "style-2", "style-3"];
  return (
    <section
      id="pricing"
      className="pricing-section section-padding fix"
      style={{ backgroundImage: "url('/assets/img/pricing-bg.png')" }}
    >
      <div className="container">
        <div className="section-title text-center mb-80">
          <div className="sub-text justify-content-center wow fadeInUp">
            <img
              src="/assets/img/star.png"
              alt="img"
              loading="lazy"
              fetchPriority="low"
            />
            <p className="h6 mb-0 fw-bold">PRICING PLAN</p>
            <img
              src="/assets/img/star.png"
              alt="img"
              loading="lazy"
              fetchPriority="low"
            />
          </div>
          <h2 className="title-anim">Starter Plan For Everyone</h2>
          <p className="mt-3 wow fadeInUp" data-wow-delay=".3s">
            Choose from our tiered options, each tailored to match your specific
            needs and budget.
            <br /> Enjoy transparent pricing with no hidden fees.
          </p>
        </div>

        {/* crm price code here */}
        {/* <div className="tab-content" id="pricing">
          <div
            id="Yearly"
            className="tab-pane fade show active"
            role="tabpanel"
          >
            <div className="row">
              {pricing.length > 0 ? (
                pricing.map((plan, index) => {
                  let features = [];
                  try {
                    features = plan.features ? JSON.parse(plan.features) : [];
                  } catch (e) {
                    console.error("Invalid features JSON:", plan.features);
                  }

                  return (
                    <div
                      className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                      data-wow-delay={`${0.3 + index * 0.2}s`}
                      key={plan.plain_id}
                    >
                      <div
                        className={`pricing-card-item ${
                          styles[index % styles.length]
                        }`}
                      >
                        {plan.tag && (
                          <div className="tag">
                            <img src={plan.tag} alt="tag" loading="lazy" fetchPriority="low" />
                          </div>
                        )}
                        <div className="pricing-header">
                          <div className="pricing-shape">
                            <img
                              src="/assets/img/pricing-shape.png"
                              alt="shape"
                              loading="lazy"
                              fetchPriority="low"
                            />
                          </div>
                          <h3>{plan.category_name}</h3>
                          <div className="pricing-text">
                            <h2>₹{plan.discout_price}</h2>
                            <div className="price">
                              <span>
                                <del>₹{plan.actual_price}</del> Off
                              </span>
                              <p>Billed Yearly</p>
                            </div>
                          </div>
                        </div>
                        <div className="pricing-list">
                          <p className="h4 mb-0">Key features:</p>
                          <ul>
                            {features.map((f, i) => (
                              <li key={i}>
                                {f.status === 1 ? (
                                  <i className="fa-solid fa-check"></i>
                                ) : (
                                  <i className="fa-sharp fa-regular fa-xmark color-1"></i>
                                )}
                                {f.feature}
                              </li>
                            ))}
                          </ul>
                          
                          <Link to={`/pay/${plan.plain_id}`} className="theme-btn">
                            Pick your plan{" "}
                           <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p className="text-center">No plans available</p>
              )}
            </div>
          </div>
        </div> */}

        {/* lms price code here */}
        <div class="row">
          {pricing.length > 0 ? (
            pricing.map((plan, index) => {
              let features = [];
              try {
                features = plan.features ? JSON.parse(plan.features) : [];
              } catch (e) {
                console.error("Invalid features JSON:", plan.features);
              }

              return (
                <div class="col-md-6" key={plan.plain_id}>
                  <div class="pricing-table purple border border-1 rounded-5 mb-3">
                    <div class="pricing-label"> Buy Now </div>
                    <h2 className="fs-2 mb-4 fw-semibold">
                      {plan.category_name}
                    </h2>
                    <h5 className="fs-6 fw-bold text-dark">Key features:</h5>
                    <div className="row">
                      {(() => {
                        const mid = Math.ceil(features.length / 2); // find middle
                        const firstHalf = features.slice(0, mid);
                        const secondHalf = features.slice(mid);

                        return (
                          <>
                            <div className="col-12 col-xl-6">
                              <ul className="ps-0">
                                {firstHalf.map((f, i) => (
                                  <li key={i} className="mb-1 fs-6">
                                    {f.status == 1 ? (
                                      <i className="fa-solid fa-circle-check text-success me-2"></i>
                                    ) : (
                                      <i className="fa-sharp fa-regular fa-xmark text-danger me-2"></i>
                                    )}
                                    {f.feature}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="col-12 col-xl-6">
                              <ul className="ps-0">
                                {secondHalf.map((f, i) => (
                                  <li key={i} className="mb-1 fs-6">
                                    {f.status == 1 ? (
                                      <i className="fa-solid fa-circle-check text-success me-2"></i>
                                    ) : (
                                      <i className="fa-sharp fa-regular fa-xmark text-danger me-2"></i>
                                    )}
                                    {f.feature}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </>
                        );
                      })()}
                    </div>

                    {/* <ul className="ps-0">
                      {features.map((f, i) => (
                        <li key={i} className="mb-1 fs-6">
                          {f.status === 1 ? (
                            <i className="fa-solid fa-circle-check text-success me-2"></i>
                          ) : (
                            <i className="fa-sharp fa-regular fa-xmark color-1 text-danger"></i>
                          )}
                          {f.feature}
                        </li>
                      ))}
                    </ul> */}
                    <div class="price-tag d-lg-flex align-items-center justify-content-center">
                      <div>
                        <span class="symbol">₹</span>
                        <span class="amount">{plan.discout_price}</span>
                      </div>
                      <div className="ms-2">
                        <p className="mb-0">
                          <del>₹{plan.actual_price}</del> Off
                        </p>
                        <span class="after">/Billed Yearly</span>
                      </div>
                    </div>
                    <Link
                      to={`/pay/${plan.plain_id}`}
                      class="price-button rounded-5"
                    >
                      Pick your plan <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-center">No plans available</p>
          )}
        </div>
      </div>
    </section>
  );
}
