import { Link } from 'react-router-dom'

export default function Services({services}) {
    // JSON-like data array
    // const servicesData = [
    //     {
    //         id: 1,
    //         icon: "/assets/img/icon/01.svg",
    //         title: "Key to control",
    //         description:
    //             "Customer Relationship Management CRM is the key to governing consumer connection by offering a control. This is done through a transparent central data system, streamlining communication.",
    //         link: "#",
    //         delay: ".3s",
    //     },
    //     {
    //         id: 2,
    //         icon: "/assets/img/icon/02.svg",
    //         title: "Data Collection",
    //         description:
    //             "CRM systems collect data by capturing every interaction between a company and it’s consumers via emails, purchases, feedback, preferences with history. This data is stored in a centralized.",
    //         link: "#",
    //         delay: ".5s",
    //     },
    //     {
    //         id: 3,
    //         icon: "/assets/img/icon/03.svg",
    //         title: "CRM the Joystick",
    //         description:
    //             "CRM is the joystick/language for modern engagement. Move left right up down and you get your desired customer activities, marketing, support, precision and assured results.",
    //         link: "#",
    //         delay: ".7s",
    //     },
    //     {
    //         id: 4,
    //         icon: "/assets/img/icon/04.svg",
    //         title: "Track Customers",
    //         description:
    //             "CRM tracks consumer needs and demand by capturing every interaction such as purchases, feedback, preferences by organising them into its clear transparent framework.",
    //         link: "#",
    //         delay: ".3s",
    //     },
    //     {
    //         id: 5,
    //         icon: "/assets/img/icon/05.svg",
    //         title: "CRM’s Promise",
    //         description:
    //             "CRM promises a longer, happier and a healthier relationship between companies and their customers by nurturing trust, simplifying interactions and with crystal clear responses.",
    //         link: "#",
    //         delay: ".5s",
    //     },
    //     {
    //         id: 6,
    //         icon: "/assets/img/icon/06.svg",
    //         title: "Grading your workforce",
    //         description:
    //             "One of the best tools of CRM includes the grading of the company’s workforce. The real time evaluation done by CRM is a cutting edge algorithm with the highest precision.",
    //         link: "#",
    //         delay: ".7s",
    //     },
    // ];

    return (
        <section className="service-section style-1 fix" >
            <div className="container">
                {/* Section title */}
                <div className="section-title text-center">
                    <div className="sub-text justify-content-center wow fadeInUp">
                        <img src="/assets/img/star.png" alt="star" loading='lazy' fetchPriority="low" />
                        <p className="h6 mb-0 fw-bold"> Service</p>
                        <img src="/assets/img/star.png" alt="star" loading='lazy' fetchPriority="low" />
                    </div>
                    <h2 className="title-anim">Exploring Essential Services </h2>
                    <p className="mt-3 wow fadeInUp" data-wow-delay=".3s">
                        AMS management is a comprehensive student and admission management system, allowing institutions to <br /> centralize and organize student and applicant information for easy access.
                    </p>
                </div>

                {/* Services grid */}
                <div className="row" id='service'>
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp position-relative d-flex align-items-stretch"
                            // data-wow-delay={service.delay}
                        >
                            <div className="service-box-items shadow-sm">
                                {/* Shapes */}
                                {/* <div className="item-shape">
                                    <img src="/assets/img/service/item-shape.png" alt="shape" loading='lazy' fetchPriority="low" />
                                </div> */}
                                {/* <div className="item-shape-2">
                                    <img
                                    fetchPriority="low"
                                        src="/assets/img/service/item-shape-2.png"
                                        alt="shape"
                                    />
                                </div> */}

                                {/* Icon */}
                                <div className="icon">
                                    <img src={service.image} alt={service.title} width="100" height="100" className='seervice_img' loading='lazy'  fetchPriority="low" />
                                </div>

                                {/* Content */}
                                <div className="content">
                                    <h3> {service.title} </h3>
                                    <p>{service.message}</p>
                                </div>

                                {/* Arrow */}
                                {/* <Link to={service.link} className="arrow-icon">
                                    <i className="fa-sharp fa-solid fa-arrow-right"></i>
                                </Link> */}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Button */}
                <div
                    className="service-button text-center mb-1 wow fadeInUp"
                    data-wow-delay=".3s"
                >
                    {/* <Link to="#" className="theme-btn">
                        See All Services{" "}
                        <i className="fa-sharp fa-regular fa-arrow-right"></i>
                    </Link> */}
                </div>
            </div>
        </section>
    );
}
