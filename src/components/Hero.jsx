import React, { useState, useEffect, Suspense } from "react";
import { Link } from "react-router-dom";
import StartTrial from "./StartTrial";
import PhoneInput from "react-phone-input-2";
// import DatePicker from "react-datepicker";
import axios from "axios";
import { Toaster, toast } from "sonner";
import { MdOutlinePlayCircle } from "react-icons/md";
import "react-phone-input-2/lib/bootstrap.css";
// import "react-datepicker/dist/react-datepicker.css";
// import "bootstrap/dist/css/bootstrap.min.css";

export default function Hero({ banner }) {
  const hero = banner?.[0] || {};

  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    state: "",
    date: null,
  });

  const [errors, setErrors] = useState({});

  // ✅ useEffect example: runs on mount
  useEffect(() => {
    console.log("Hero component mounted");
    // You can put any side-effect here, like fetching additional data
    // Example:
    // axios.get("/api/banner").then(res => console.log(res.data));
  }, []); // empty dependency array → runs once on mount

  // ✅ Validation logic
  const validate = () => {
    const newErrors = {};

    if (!formData.company.trim() || !/^[A-Za-z\s]+$/.test(formData.company))
      newErrors.company = "Company/Institution name must contain only letters.";

    if (!formData.name.trim() || !/^[A-Za-z\s]+$/.test(formData.name))
      newErrors.name = "Name must contain only letters.";

    if (!formData.state.trim() || !/^[A-Za-z\s]+$/.test(formData.state))
      newErrors.state = "State must contain only letters.";

    if (!/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = "Enter a valid email address.";

    if (!formData.phone || !/^\d+$/.test(formData.phone))
      newErrors.phone = "Phone number must contain only numbers.";

    if (!formData.date) newErrors.date = "Please select an appointment date.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ Controlled input handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (
      ["company", "name", "state"].includes(name) &&
      !/^[A-Za-z\s]*$/.test(value)
    )
      return;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date) => setFormData({ ...formData, date });

  // ✅ Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await axios.post(
        "https://www.edtechinnovate.com/admin/app/service/appointment/store",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            "X-Pid": 7,
          },
        }
      );

      toast.success("✅ Appointment request submitted successfully!");
      console.log("Server Response:", response.data);

      setFormData({
        company: "",
        name: "",
        email: "",
        phone: "",
        state: "",
        date: null,
      });
      setErrors({});
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("❌ Failed to submit. Please try again later!");
    }
  };

  return (
    <>
      <Toaster position="top-right" richColors />

      <section className="hero-section hero-1 bg-cover bg-light custom_branding_p1">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            {/* LEFT CONTENT */}
            <div className="col-12 col-xl-6">
              <div className="hero-content">
                <h1 className="title-anim text-start fw-bold">
                  {hero.heading || "Power your business with"}{" "}
                  <span>{hero.highlight_heading || "Edtech AMS"}</span>
                </h1>
                <p className="wow fadeInUp text-start" data-wow-delay=".3s">
                  {hero.sub_heading || ""}
                </p>
                <div className="cutomhide1">
                  <ul className="text-start  ps-1 my-3 d-flex flex-wrap gap-4">
                    <li className="mb-2">
                      <i className="fa-solid fa-circle-check text-success me-2"></i>
                      <span className="text-muted">
                        <b>1000+</b> Reviews on
                      </span>
                    </li>
                    <li className="mb-2">
                      <i className="fa-solid fa-circle-check text-success me-2"></i>
                      <span className="text-muted">
                        No credit card required
                      </span>
                    </li>
                    <li className="mb-2">
                      <i className="fa-solid fa-circle-check text-success me-2"></i>
                      <span className="text-muted">
                        Trusted by <b>200+</b> Companies
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="hero-button mb-4 cutomhide2">
                  <StartTrial />
                  <Link
                    to="#"
                    className="theme-btn style-2 video-popup wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    Watch demo <MdOutlinePlayCircle />
                  </Link>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="col-12 col-xl-6 cutomhide2 position-relative">
              <div className="dashboard-section custom_none">
                <div className="dashboard-image rounded-3">
                  <img
                    src={hero.image}
                    alt="Hero Banner"
                    className="img-fluid rounded-3"
                    loading="lazy"
                    fetchPriority="high"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* FORM SECTION */}
          <Suspense fallback={<div>Loading form...</div>}>
            <div className="position-relative">
              <div className="row custom_position">
                <div className="col-lg-12">
                  <div className="pt-4 pt-lg-5">
                    <form onSubmit={handleSubmit} noValidate>
                      <div className="row g-3 bg-white shadow-sm py-3 px-2 rounded-4">
                        {[
                          {
                            label: "Company/Institution",
                            name: "company",
                            type: "text",
                            placeholder: "Institution Name",
                          },
                          {
                            label: "Person Name",
                            name: "name",
                            type: "text",
                            placeholder: "Full Name",
                          },
                          {
                            label: "Email",
                            name: "email",
                            type: "email",
                            placeholder: "you@example.com",
                          },
                          {
                            label: "State",
                            name: "state",
                            type: "text",
                            placeholder: "Your State",
                          },
                        ].map((field) => (
                          <div
                            className="col-lg-4 col-md-6 col-sm-12"
                            key={field.name}
                          >
                            <label className="form-label fw-semibold">
                              {field.label}
                            </label>
                            <input
                              type={field.type}
                              className={`form-control cutom_home_field ${
                                errors[field.name] ? "is-invalid" : ""
                              }`}
                              name={field.name}
                              value={formData[field.name]}
                              onChange={handleChange}
                              placeholder={field.placeholder}
                            />
                            {errors[field.name] && (
                              <div className="invalid-feedback">
                                {errors[field.name]}
                              </div>
                            )}
                          </div>
                        ))}

                        {/* PHONE FIELD */}
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <label className="form-label fw-semibold">
                            Phone
                          </label>
                          <PhoneInput
                            country="in"
                            value={formData.phone}
                            onChange={(phone) =>
                              setFormData({ ...formData, phone })
                            }
                            inputClass={`w-100 cutom_home_field ${
                              errors.phone ? "is-invalid" : ""
                            }`}
                            containerClass="w-100"
                            specialLabel=""
                          />
                          {errors.phone && (
                            <div className="text-danger small">
                              {errors.phone}
                            </div>
                          )}
                        </div>

                        {/* DATE FIELD */}
                        {/* <div className="col-lg-4 col-md-6 col-sm-12">
                        <label className="form-label fw-semibold">
                          Appointment Date
                        </label>
                        <DatePicker
                          selected={formData.date}
                          onChange={handleDateChange}
                          className={`form-control cutom_home_field w-100 ${
                            errors.date ? "is-invalid" : ""
                          }`}
                          dateFormat="dd/MM/yyyy"
                          placeholderText="Select Date"
                          minDate={new Date()}
                        />
                        {errors.date && (
                          <div className="invalid-feedback">{errors.date}</div>
                        )}
                      </div> */}
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <label className="form-label fw-semibold">
                            Appointment Date
                          </label>
                          <input
                            type="date"
                            className={`form-control cutom_home_field ${
                              errors.date ? "is-invalid" : ""
                            }`}
                            name="date"
                            value={formData.date || ""}
                            onChange={(e) =>
                              setFormData({ ...formData, date: e.target.value })
                            }
                            min={new Date().toISOString().split("T")[0]} // prevents past dates
                          />
                          {errors.date && (
                            <div className="invalid-feedback">
                              {errors.date}
                            </div>
                          )}
                        </div>

                        {/* SUBMIT BUTTON */}
                        <div className="col-12 text-center mt-3">
                          <button
                            type="submit"
                            className="theme-btn style-2 px-4 py-3"
                          >
                            Book Appointment
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="cutomhide3 mt-4">
              <div className="hero-button  ">
                <StartTrial />
                <Link
                  to="#"
                  className="theme-btn style-2 video-popup wow fadeInUp w-100 mt-3"
                  data-wow-delay=".5s"
                >
                  Watch demo <MdOutlinePlayCircle />
                </Link>
              </div>
              <div className="col-12 col-xl-6 position-relative mt-3">
                <div className="dashboard-section ">
                  <div className="dashboard-image rounded-3">
                    <img
                      src={hero.image}
                      alt="Hero Banner"
                      className="img-fluid rounded-3"
                      loading="lazy"
                      fetchPriority="high"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Suspense>
        </div>
      </section>
    </>
  );
}
