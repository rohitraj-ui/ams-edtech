import { createContext, useContext, useEffect, useState, useMemo } from "react";
import axios from "axios";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [clients, setClients] = useState([]);
  const [banner, setBanner] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [plains, setPlains] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [services, setServices] = useState([]);
  const [keyFeatures, setKeyFeatures] = useState([]);
  const [about, setAbout] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("https://www.edtechinnovate.com/admin/app/service/api/lmsApi", {
        headers: { "X-Pid": "3" },
      });

      if (res.data.status === 200) {
        const data = res.data.data;
        setBanner(data.heroData);
        setClients(data.clientLogos);
        setTestimonials(data.testimonialsData);
        setPlains(data.plainsData);
        setFaqs(data.faqData);
        setBlogs(data.blogData);
        setServices(data.serviceData);
        setKeyFeatures(data.keyFeaturesData);
        setAbout(data.aboutData);
      }
    } catch (err) {
      console.error("API Error:", err);
    }
  };

  useEffect(() => {
    fetchData(); // initial fetch
  }, []);

  const contextValue = useMemo(
    () => ({ clients, banner, testimonials, plains, faqs, blogs, services, keyFeatures, about }),
    [clients, banner, testimonials, plains, faqs, blogs, services, keyFeatures, about]
  );

  return <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>;
};

export const useData = () => useContext(DataContext);
