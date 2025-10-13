import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from "react-router-dom";


const RefundPolicy = () => {
  return (
    <>
      {/* Breadcrumb Section starts */}
      <div className="breadcrumb-wrapper bg-cover" style={{ backgroundImage: "url('assets/img/breadcrumb.jpg')" }} >
        <div className="container">
          <div className="page-heading">
            <div className="page-heading-text">
              <h1 className="wow fadeInUp" data-wow-delay=".3s">Cancellation and Refund Policy</h1>
              {/* <h2 className="wow fadeInUp" data-wow-delay=".5s">In Your Business.</h2> */}
            </div>
            <div className="breadcrumb-main-items">
              <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
                <li>
                  <Link to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <FaArrowRightLong/>
                </li>
                <li>
                  Refund Policy
                </li>
              </ul>
              {/* <div className="breadcrumb-text-items">
                <div id="scrollDown" className="icon wow fadeInUp" data-wow-delay=".3s">
                  <i className="fa-solid fa-arrow-down"></i>
                </div>
                <p className="wow fadeInUp" data-wow-delay=".5s">
                  CRM management is comprehensive contact management, allowing businesses.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb Section ends */}


      {/* Terms Start  */}
      <section className="terms-section fix section-padding">
        <div className="container">
          <div className="terms-wrapper">
            <div className="row">
              <div className="col-xl-12">
                <div className="terms-single-content">

                  <div className="wrapper_terms-conditions">
                    <div className="tc mb-4">
                      <h4 className="mb-1"> 1. Cancellation Policy: </h4>
                      <p> If you need to cancel your enrolment in a course or event on the EDTECH Innovate website, please contact us as soon as possible. The following cancellation policy will apply: </p>
                      <ul className='ms-4'>
                        <li>- If you cancel more than 14 days before the start of the course or event, you will receive a full refund of your registration fee.</li>
                        <li>- If you cancel between 7 and 14 days before the start of the course or event, you will receive a 50% refund of your registration fee.</li>
                        <li>- If you cancel less than 7 days before the start of the course or event, no refund will be given. </li>
                      </ul>
                    </div>

                    <div className="tc mb-4">
                      <h4 className="mb-1"> 2. Refund Policy: </h4>
                      <p> If you have already paid for a course or event on the EDTECH Innovate website and need to request a refund, please contact us as soon as possible. The following refund policy will apply: </p>
                      <ul className='ms-4'>
                        <li>- If you have not yet started the course or event and you cancel the admission before 14 days, you will receive a full refund of your registration fee.</li>
                        <li>- If you have started the course or event no refund will be given.</li>
                        <li>- Refund will initiate within 4 - 8 business working days. </li>
                      </ul>
                    </div>

                    <div className="tc mb-4">
                      <h4 className="mb-1"> 3. Exceptions: </h4>
                      <p> In some cases, exceptions to this policy may be made in extenuating circumstances, such as illness or family emergencies. If you believe you have a valid reason for requesting a refund outside of the terms outlined above, please contact us to discuss your situation. </p>
                    </div>

                    <div className="tc mb-4">
                      <h4 className="mb-1"> 4. Changes To Courses Or Events: </h4>
                      <p> We reserve the right to cancel or reschedule any course or event on the EDTECH Innovate website due to unforeseen circumstances or low enrollment. In such cases, we will make every effort to notify registered participants as soon as possible and will provide a full refund of the registration fee. Thank you for your understanding and cooperation. We hope that you find our cancellation and refund policy to be fair and reasonable, and we look forward to providing you with quality educational resources and opportunities. </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Terms End  */}
    </>
  )
}

export default RefundPolicy;