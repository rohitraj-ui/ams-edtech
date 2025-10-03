import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home"; // Home can stay normal if it's critical
import React, { Suspense } from "react";
// import 'bootstrap/scss/bootstrap.scss';

// Lazy load non-critical pages
const TermsConditions = React.lazy(() => import("./pages/TermsConditions"));
const Blogs = React.lazy(() => import("./pages/Blogs"));
const BlogDetails = React.lazy(() => import("./pages/BlogDetails"));
const BuyNow = React.lazy(() => import("./pages/BuyNow"));
const PrivacyPolicy = React.lazy(() => import("./pages/PrivacyPolicy"));
const Success = React.lazy(() => import("./pages/Success"));
const Fail = React.lazy(() => import("./pages/Fail"));
const RefundPolicy = React.lazy(() => import("./pages/RefundPolicy"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const Pricing = React.lazy(() => import("./components/Pricing"));

export default function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            {/* child routes */}
            <Route index element={<Home />} />
            <Route path="#pricing" element={<Pricing />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route
              path="/cancellation-and-refund-policy"
              element={<RefundPolicy />}
            />
            <Route path="/success" element={<Success />} />
            <Route path="/fail" element={<Fail />} />
            {/* <Route path="/buy-now/:planId" element={<BuyNow />} /> */}
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog/:slug" element={<BlogDetails />} />
            <Route path="/pay/:planId" element={<BuyNow />} />
            {/* catch all unmatched routes */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}
