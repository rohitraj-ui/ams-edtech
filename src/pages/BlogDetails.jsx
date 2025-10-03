import { Link, useParams } from "react-router-dom";
import { useData } from "../context/DataContext";

export default function BlogDetails() {
  const { slug } = useParams(); // slug from URL
  const { blogs } = useData(); // global blogs from context

  // ✅ match by Slug (string, not number)
  const blog = blogs.find((b) => b.Slug === slug);

  if (!blog) return <p>Blog not found</p>;

  return (
    <>
      {/* Breadcrumb */}
      <div
        className="breadcrumb-wrapper bg-cover"
        style={{ backgroundImage: "url('/assets/img/breadcrumb.jpg')" }}
      >
        <div className="container">
          <div className="page-heading">
            <div className="page-heading-text">
              <h1 className="wow fadeInUp" data-wow-delay=".3s">
                Latest News
              </h1>
              <h2 className="wow fadeInUp" data-wow-delay=".5s">
                Blog & Article
              </h2>
            </div>
            <div className="breadcrumb-main-items">
              <ul
                className="breadcrumb-items wow fadeInUp"
                data-wow-delay=".5s"
              >
                <li>
                  <Link to="/"> Home </Link>
                </li>
                <li>
                  <i className="fa-solid fa-arrow-right"></i>
                </li>
                <li>{blog.Name}</li>
              </ul>
              <div className="breadcrumb-text-items">
                <div
                  id="scrollDown"
                  className="icon wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <i className="fa-solid fa-arrow-down"></i>
                </div>
                <p className="wow fadeInUp" data-wow-delay=".5s">
                  {blog.Meta_Description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* News Details */}
      <section className="news-details-section fix section-padding">
        <div className="container">
          <div className="news-details-wrapper">
            <div className="row">
              <div className="col-lg-8">
                <h2 className="details-title fs-3">{blog.Name}</h2>
                <div className="list-items">
                  <ul className="style-2">
                    <li>
                      <i className="fa-solid fa-calendar-days"></i>
                      {new Date(blog.Created_At).toLocaleDateString()}
                    </li>
                  </ul>
                </div>
                <div className="details-image">
                  <img src={blog.Photo} alt={blog.Name} />
                </div>
                <div className="news-details-content">
                  <div className="content">
                    <div
                      dangerouslySetInnerHTML={{ __html: blog.Content }}
                      className="mb-3"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="border border-1 rounded-3 p-3">
                  <div className="section-title mb-4">
                    <h2 className="title-anim fs-4">Our Latest Blogs</h2>
                  </div>

                  <div className="row">
                    {blogs
                      .filter((b) => b.Slug !== slug) // exclude current blog
                      .slice(0, 4) // show 3 latest
                      .map((b) => (
                        <div className="col-12" key={b.ID}>
                          <div className="news-box-items img-custom-anim-top">
                            <Link to={`/blog/${b.Slug}`}>
                              <div className="news-thumb">
                                <img
                                  src={b.Photo}
                                  alt={b.Name}
                                  loading="lazy"
                                />
                              </div>
                            </Link>
                            <div className="news-content">
                              <ul className="post-date">
                                <li>
                                  <i className="fa-solid fa-calendar-days"></i>
                                  {new Date(b.Created_At).toLocaleDateString()}
                                </li>
                              </ul>
                              <h3>
                                <Link to={`/blog/${b.Slug}`} className="text-black">{b.Name}</Link>
                              </h3>
                              <Link to={`/blog/${b.Slug}`} className="link-btn">
                                Continue Reading{" "}
                                 <i className="fa-solid fa-arrow-right"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section if available */}
      {blog.FAQs && blog.FAQs.length > 0 && (
        <section className="faq-section section-padding pt-0 fix">
          <div className="container">
            <div className="section-title text-center mb-70">
              <h2 className="title-anim">FAQs</h2>
            </div>
            <div className="faq-wrapper">
              <div className="row justify-content-center">
                <div className="col-xl-8">
                  <div className="accordion" id="accordionExample">
                    {blog.FAQs.map((faq, i) => (
                      <div className="accordion-item" key={i}>
                        <h2 className="accordion-header" id={`heading${i}`}>
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse${i}`}
                            aria-expanded={i === 0 ? "true" : "false"}
                            aria-controls={`collapse${i}`}
                          >
                            Q. {faq.question}
                          </button>
                        </h2>
                        <div
                          id={`collapse${i}`}
                          className={`accordion-collapse collapse ${
                            i === 0 ? "show" : ""
                          }`}
                          aria-labelledby={`heading${i}`}
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p
                              dangerouslySetInnerHTML={{ __html: faq.answer }}
                            ></p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Recent Posts */}
      {/* <div className="container mb-5">
        <div className="section-title text-center mb-40">
          <h2 className="title-anim">Our Latest Blogs</h2>
        </div>

        <div className="row">
          {blogs
            .filter((b) => b.Slug !== slug) // exclude current blog
            .slice(0, 3) // show 3 latest
            .map((b) => (
              <div className="col-xl-4 col-lg-6 col-md-6" key={b.ID}>
                <div className="news-box-items img-custom-anim-top">
                  <Link to={`/blog/${b.Slug}`}>
                    <div className="news-thumb">
                      <img src={b.Photo} alt={b.Name} loading="lazy" />
                    </div>
                  </Link>
                  <div className="news-content">
                    <ul className="post-date">
                      <li>
                        <i className="fa-light fa-calendar-days"></i>
                        {new Date(b.Created_At).toLocaleDateString()}
                      </li>
                    </ul>
                    <h3>
                      <Link to={`/blog/${b.Slug}`}>{b.Name}</Link>
                    </h3>
                    <Link to={`/blog/${b.Slug}`} className="link-btn">
                      Continue Reading{" "}
                      <i className="fa-sharp fa-regular fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div> */}
    </>
  );
}
