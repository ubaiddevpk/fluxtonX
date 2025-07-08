import app from "../assets/services/images/app.jpg";
import datanaylisis from "../assets/services/images/dataanalysis.jpg";
import digitalmarkeeting from "../assets/services/images/digital.png";
import productdevelopmnet from "../assets/services/images/product.jpeg";
import secuirtysystem from "../assets/services/images/secuirtysystem.jpeg";
import uidesign from "../assets/services/images/uiux.jpg";
import datavisual from "../assets/services/images/datavisual.jpg";
import web from "../assets/services/images/web.jpg";

import {
  FaCogs,
  FaPaintBrush,
  FaBullhorn,
  FaChartBar,
  FaLock,
  FaChartPie,
  FaMobileAlt,
  FaGlobe,
} from "react-icons/fa";

const ServicesData = [
  {
    title: "Web Development",
    slug: "web-development",
    desc: "Crafting dynamic and responsive web applications tailored to meet your business needs, ensuring a seamless user experience.",
    icon: FaGlobe,
    img: web,
    link: "/services/web-development",
  },
  {
    title: "App Development",
    slug: "app-development",
    desc: "Designing and building mobile applications for Android and iOS, delivering engaging user experiences and robust functionality.",
    icon: FaMobileAlt,
    img: app,
    link: "/services/app-development",
  },
  {
    title: "Product Development",
    slug: "product-development",
    desc: "Our team specializes in building innovative products, delivering scalable solutions tailored to meet the specific needs of your business.",
    icon: FaCogs,
    img: productdevelopmnet,
    link: "/services/product-development",
  },
  {
    title: "UI/UX Designing",
    slug: "ui-ux-designing",
    desc: "Crafting engaging and user-friendly interfaces to enhance user experience, ensuring your product is intuitive and visually appealing.",
    icon: FaPaintBrush,
    img: uidesign,
    link: "/services/ui-ux-designing",
  },
  {
    title: "Digital Marketing",
    slug: "digital-marketing",
    desc: "Boost your online presence with our strategic marketing services, helping you connect with your audience and grow your business.",
    icon: FaBullhorn,
    img: digitalmarkeeting,
    link: "/services/digital-marketing",
  },
  {
    title: "Data Analysis",
    slug: "data-analysis",
    desc: "Unlock valuable insights from your data with our comprehensive analysis services, helping you make informed decisions based on real-time data.",
    icon: FaChartBar,
    img: datanaylisis,
    link: "/services/data-analysis",
  },
  {
    title: "Security System",
    slug: "security-system",
    desc: "We offer robust security solutions to safeguard your business, protecting sensitive data and ensuring compliance with the latest standards.",
    icon: FaLock,
    img: secuirtysystem,
    link: "/services/security-system",
  },
  {
    title: "Data Visualization",
    slug: "data-visualization",
    desc: "Transform complex data into clear, actionable insights through our cutting-edge data visualization tools and techniques.",
    icon: FaChartPie,
    img: datavisual,
    link: "/services/data-visualization",
  },
];

export default ServicesData;
