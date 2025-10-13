import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import { SlCalender } from "react-icons/sl";

export default function BlogSection({ blogData }) {
  // JSON Data for Blogs
  // const blogData = [
  //     {
  //         id: 1,
  //         image: "/assets/img/news/01.jpg",
  //         date: "07 May,2024",
  //         link: "#",
  //         title: "How to Comprehensive at SaaS Developments",
  //     },
  //     {
  //         id: 2,
  //         image: "/assets/img/news/02.jpg",
  //         date: "07 May,2024",
  //         link: "#",
  //         title: "6 Essential Tips for Big Commerce Stores",
  //     },
  //     {
  //         id: 3,
  //         image: "/assets/img/news/03.jpg",
  //         date: "07 May,2024",
  //         link: "#",
  //         title: "Empowering Startups & Small Businesses",
  //     },
  // ];

  return (
    <section className="news-section section-padding fix">
      <div className="container">
        <div className="section-title text-center mb-20">
          <div className="sub-text justify-content-center wow fadeInUp">
            <img
              src="/assets/img/star.png"
              alt="img"
              loading="lazy"
              fetchPriority="low"
            />
            <p className="h6 mb-0 ">Blog & Article</p>{" "}
            <img
              src="/assets/img/star.png"
              alt="img"
              loading="lazy"
              fetchPriority="low"
            />
          </div>
          <h2 className="title-anim">Our Latest Blogs</h2>
          {/* <p className="mt-3 wow fadeInUp" data-wow-delay=".3s">
            Welcome to our FAQS section, where we address common queries and
            provide helpful <br /> solutions to ensure you get the most out of
            our CRM software.
          </p> */}
        </div>

        <div className="row">
          {blogData.slice(0,3).map((blog) => (
            <div
              key={blog.id ? blog.id : blog.Name}
              className="col-xl-4 col-lg-6 col-md-6 d-flex align-items-stretch"
            >
              <div className="news-box-items img-custom-anim-top">
                <Link to={`/blog/${blog.Slug}`}>
                  <div className="news-thumb">
                    <img
                      src={blog.Photo}
                      alt={blog.Name}
                      loading="lazy"
                      fetchPriority="low"
                      width="375"
                      height="250"
                    />
                  </div>
                </Link>
                <div className="news-content">
                  <ul className="post-date ps-0">
                    <li>
                      <Link to={`/blog/${blog.Slug}`} className="text-black">
                         <SlCalender className="me-2"/>
                        {blog.Created_At}
                      </Link>
                    </li>
                  </ul>
                  <h3 className="fs-4 my-3">
                    <Link to={`/blog/${blog.Slug}`} className="text-black">
                      {blog?.Name && blog.Name.length > 35
                        ? blog.Name.slice(0, 35) + "..."
                        : blog?.Name}
                    </Link>
                  </h3>
                  <Link to={`/blog/${blog.Slug}`} className="link-btn secondary-color">
                    Continue Reading
                   <GoArrowUpRight className="fw-bold text-black" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="service-button text-center mb-1 wow fadeInUp mt-4 mt-md-5"
          data-wow-delay=".3s"
        >
          <Link to="/blogs" className="theme-btn">
            See All Blogs <GoArrowUpRight className="fw-bold" />
          </Link>
        </div>
      </div>
    </section>
  );
}
