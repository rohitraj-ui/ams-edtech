import React, { Suspense } from "react";
import { useData } from "../context/DataContext";
import { useInView } from "react-intersection-observer";

import Hero from "../components/Hero";

// Lazy load sections
const AboutUsSection = React.lazy(() => import("../components/AboutUsSection"));
const Brands = React.lazy(() => import("../components/Brands"));
const Services = React.lazy(() => import("../components/Services"));
const Features = React.lazy(() => import("../components/Features"));
const Connect = React.lazy(() => import("../components/Connect"));
const Testimonials = React.lazy(() => import("../components/Testimonials"));
const Pricing = React.lazy(() => import("../components/Pricing"));
const Marquee = React.lazy(() => import("../components/Marquee"));
const Faq = React.lazy(() => import("../components/Faq"));
const BlogSection = React.lazy(() => import("../components/BlogsSection"));

export default function Home() {
  const {
    clients,
    testimonials,
    plains,
    faqs,
    blogs,
    banner,
    services,
    keyFeatures,
    about,
  } = useData();

  // Intersection observers
  const [brandsRef, brandsInView] = useInView({ triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true });
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true });
  const [connectRef, connectInView] = useInView({ triggerOnce: true });
  const [testimonialsRef, testimonialsInView] = useInView({
    triggerOnce: true,
  });
  const [pricingRef, pricingInView] = useInView({ triggerOnce: true });
  const [marqueeRef, marqueeInView] = useInView({ triggerOnce: true });
  const [faqRef, faqInView] = useInView({ triggerOnce: true });
  const [blogRef, blogInView] = useInView({ triggerOnce: true });

  return (
    <>
      {/* Above-the-fold */}
      <Hero banner={banner} />
      <AboutUsSection about={about} />
      {/* Lazy-loaded sections */}

      <div ref={brandsRef}>
        {brandsInView && (
          <Suspense
            fallback={<div className="text-center p-6">Loading Brands...</div>}
          >
            <Brands clients={clients} />
          </Suspense>
        )}
      </div>

      <div ref={servicesRef}>
        {servicesInView && (
          <Suspense
            fallback={
              <div className="text-center p-6">Loading Services...</div>
            }
          >
            <Services services={services} />
          </Suspense>
        )}
      </div>

      <div ref={featuresRef}>
        {featuresInView && (
          <Suspense
            fallback={
              <div className="text-center p-6">Loading Features...</div>
            }
          >
            <Features keyFeatures={keyFeatures} />
          </Suspense>
        )}
      </div>

      <div ref={connectRef}>
        {connectInView && (
          <Suspense
            fallback={<div className="text-center p-6">Loading Connect...</div>}
          >
            <Connect />
          </Suspense>
        )}
      </div>

      <div ref={testimonialsRef}>
        {testimonialsInView && (
          <Suspense
            fallback={
              <div className="text-center p-6">Loading Testimonials...</div>
            }
          >
            <Testimonials testimonialsData={testimonials} />
          </Suspense>
        )}
      </div>

      <div ref={pricingRef}>
        {pricingInView && (
          <Suspense
            fallback={<div className="text-center p-6">Loading Pricing...</div>}
          >
            <Pricing pricing={plains} />
          </Suspense>
        )}
      </div>

      <div ref={marqueeRef}>
        {marqueeInView && (
          <Suspense
            fallback={<div className="text-center p-6">Loading Marquee...</div>}
          >
            <Marquee />
          </Suspense>
        )}
      </div>

      <div ref={faqRef}>
        {faqInView && (
          <Suspense
            fallback={<div className="text-center p-6">Loading FAQs...</div>}
          >
            <Faq faqs={faqs} />
          </Suspense>
        )}
      </div>

      <div ref={blogRef}>
        {blogInView && (
          <Suspense
            fallback={
              <div className="text-center p-6">Loading Blog Section...</div>
            }
          >
            <BlogSection blogData={blogs} />
          </Suspense>
        )}
      </div>
    </>
  );
}
