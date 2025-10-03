import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
    return (
        <>
            {/* Breadcrumb Section starts */}
            <div className="breadcrumb-wrapper bg-cover" style={{ backgroundImage: "url('assets/img/breadcrumb.jpg')" }} >
                <div className="container">
                    <div className="page-heading">
                        <div className="page-heading-text">
                            <h1 className="wow fadeInUp" data-wow-delay=".3s"> Privacy Policy </h1>
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
                                    <i className="fa-solid fa-arrow-right"></i>
                                </li>
                                <li>
                                    Privacy Policy
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
                                    <div className="terms-header">
                                        <h2 className="fs-1 mb-0"> Privacy Policy </h2>
                                    </div>
                                    <p className="mb-5">
                                        This website is operated by the EDTECH Innovate and its affiliates . This Privacy Policy governs how we collect, use, disclose, and store information collected through our website.
                                    </p>

                                    <div className="wrapper_terms-conditions">
                                        <div className="tc mb-4">
                                            <h4 className="mb-1">1. Collection Of Personal Data:</h4>
                                            <p>
                                                We collect personal data that you provide to us voluntarily when you create an account and interact with our website, including contact information and other information such as your name and e-mail address. We may also collect usage data, including your IP address, browser type and language, access times, and the pages you view while using our website.
                                            </p>
                                        </div>

                                        <div className="tc mb-4">
                                            <h4 className="mb-1">2. Use Of Personal Data:</h4>
                                            <p>
                                                The personal data we collect is used to provide and improve our services, respond to customer service inquiries, process orders, send communications related to our services, detect and prevent fraud, comply with applicable laws and regulations, as well as for other legitimate business purposes.
                                            </p>
                                        </div>

                                        <div className="tc mb-4">
                                            <h4 className="mb-1">3. Disclosure Of Personal Data:</h4>
                                            <p>
                                                We do not sell or rent personal data to third parties for their marketing purposes without your express consent. We may share your data with third parties in certain limited circumstances, including when required by law or if the disclosure is necessary for safety and security purposes. We may also share your data with other third parties with your consent.
                                            </p>
                                        </div>

                                        <div className="tc mb-4">
                                            <h4 className="mb-1">4. Data Security:</h4>
                                            <p>
                                                We take reasonable precautions to protect the personal data we collect from loss, misuse, unauthorized access, disclosure, alteration, and destruction. We also employ reasonable security measures to protect against unauthorized access to personal data stored in our systems.
                                            </p>
                                        </div>

                                        <div className="tc mb-4">
                                            <h4 className="mb-1">5. Changes To This Policy:</h4>
                                            <p>
                                                This Privacy Policy is subject to change. We will post changes to this policy on our website. If we make any material changes to this Policy, we will notify you by email or by posting a notice on our website before the change becomes effective.
                                            </p>
                                        </div>

                                        <div className="tc mb-4">
                                            <h4 className="mb-1">6. Privacy Concerns:</h4>
                                            <p>
                                                If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at{" "}
                                                <a href="mailto:info@edtechinnovate.com">info@edtechinnovate.com</a>.
                                            </p>
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
