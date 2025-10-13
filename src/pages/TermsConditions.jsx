import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function TermsConditions() {
    return (
        <>
            {/* Breadcrumb Section starts */}
            <div className="breadcrumb-wrapper bg-cover" style={{ backgroundImage: "url('assets/img/breadcrumb.jpg')" }} >
                <div className="container">
                    <div className="page-heading">
                        <div className="page-heading-text">
                            <h1 className="wow fadeInUp" data-wow-delay=".3s">Terms & Condition</h1>
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
                                    Terms & Condition
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
                                        <h2 className="fs-1 mb-0"> Terms & Conditions </h2>
                                    </div>
                                    <p className="mb-5">
                                        Welcome to the EDTECH Innovate CRM Website. By using this website, you agree to comply with and be bound by the following terms and conditions. Please read these terms and conditions carefully before using the website. If you do not agree to these terms and conditions, you should not use this website.
                                    </p>

                                    <div className="wrapper_terms-conditions">
                                        <div className="tc mb-4 mb-4">
                                            <h4 className="mb-1">1. Acceptance of Terms:</h4>
                                            <p>By using the EDTECH Innovate website, you agree to these terms and conditions. EDTECH Innovate reserves the right to modify, amend, or change these terms and conditions at any time without prior notice to you. By using the website after any modifications, amendments or changes have been made, you agree to be bound by such modifications, amendments, or changes.</p>
                                        </div>

                                        <div className="tc mb-4">
                                            <h4 className="mb-1">2. Intellectual Property:</h4>
                                            <p>All content on the EDTECH Innovate website, including but not limited to, text, graphics, logos, images, audio clips, data compilations, and software, is the property of EDTECH Innovate or its licensors and is protected by Indian Government copyright laws.</p>
                                        </div>

                                        <div className="tc mb-4">
                                            <h4 className="mb-1">3. Use of Website:</h4>
                                            <p>You may use the EDTECH Innovate website for personal, non-commercial use only. You may not use the website for any illegal purpose or in any manner that violates any applicable laws or regulations. You may not use the website to transmit any viruses, worms, or other harmful code. Likewise, you may not use the website in any manner that could damage, disable, overburden, or impair the website.</p>
                                        </div>

                                        <div className="tc mb-4">
                                            <h4 className="mb-1">4. User Content:</h4>
                                            <p>By submitting content to the EDTECH Innovate website, you grant EDTECH Innovate a non-exclusive, worldwide, royalty-free, perpetual, irrevocable, and fully sub-licensable right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such content in any media.</p>
                                        </div>

                                        <div className="tc mb-4">
                                            <h4 className="mb-1">5. Links to Third-Party Websites:</h4>
                                            <p>The EDTECH Innovate website may contain links to third-party websites that are not owned or controlled by EDTECH Innovate. Our website has no control over and assumes no responsibility for the content, privacy policies, or practices of any third-party websites. By using the website, you expressly relieve EDTECH Innovate from all liability arising from your use of any third-party website.</p>
                                        </div>

                                        <div className="tc mb-4">
                                            <h4 className="mb-1">6. Disclaimer of Warranties:</h4>
                                            <p>The EDTECH Innovate website is provided on an "as is" and "as available" basis. EDTECH Innovate makes no representations or warranties of any kind, express or implied, as to the operation of the website or the information, content, materials, or products included on the website. You expressly agree that your use of the website is at your sole risk.</p>
                                        </div>

                                        <div className="tc mb-4">
                                            <h4 className="mb-1">7. Limitation of Liability:</h4>
                                            <p>In no event shall EDTECH Innovate be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with your use of the website.</p>
                                        </div>

                                        <div className="tc mb-4">
                                            <h4 className="mb-1">8. Indemnification:</h4>
                                            <p>You agree to indemnify, defend, and hold harmless EDTECH Innovate and its officers, directors, employees, agents, and affiliates from and against any claims, damages, liabilities, costs, and expenses (including reasonable attorneys' fees) arising out of or in connection with your use of the website.</p>
                                        </div>

                                        <div className="tc mb-4">
                                            <h4 className="mb-1">9. Governing Law and Jurisdiction:</h4>
                                            <p>These terms and conditions shall be governed by and construed by the laws of the Indian Government. You agree that any legal action or proceeding arising out of or in connection with your use of the EDTECH Innovate website shall be brought to the state or central courts located in Uttar Pradesh, India.</p>
                                        </div>

                                        <div className="tc mb-4">
                                            <h4 className="mb-1">10. Termination:</h4>
                                            <p>EDTECH Innovate may terminate these terms and conditions at any time without notice to you. Upon termination, you must immediately cease all use of the EDTECH Innovate website.</p>
                                        </div>

                                        <div className="tc mb-4">
                                            <h4 className="mb-1">11. Entire Agreement:</h4>
                                            <p>These terms and conditions constitute the entire agreement between you and EDTECH Innovate regarding the use of the website.</p>
                                        </div>

                                        <h5 className="fw-bold"> Note: </h5>
                                        <p className="mb-3"> If you have any questions or concerns about these terms and conditions, please contact EDTECH Innovate at +91 8851920153 or info@edtechinnovate.com. If any provision of these terms and conditions is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect. The failure of EDTECH Innovate to enforce any right or provision of these terms and conditions shall not be deemed a waiver of such right or provision. These terms and conditions do not create any agency, partnership, joint venture, or employment relationship between you and EDTECH Innovate. </p>

                                        <p> By using the EDTECH Innovate website, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions. If you do not agree to these terms and conditions, you should not use the EDTECH Innovate website. </p>

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
