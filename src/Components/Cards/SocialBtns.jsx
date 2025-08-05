import React, { useEffect } from "react";
import styled from "styled-components";
import { GrLinkedin } from "react-icons/gr";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { getcontactinfo } from "../../api/contactapi";

const SocialBtns = () => {
  const [contactinfo, setContactinfo] = React.useState({});

  useEffect(() => {
    getcontactinfo().then((data) => setContactinfo(data));
  }, []);

  const icons = [
    {
      icon: <GrLinkedin className="text-xl" />,
      link: contactinfo.socialLinks?.linkedin
        ? `${contactinfo.socialLinks.linkedin}`
        : "#",
      className: "linkedin",
    },
    {
      icon: <FaFacebookF className="text-xl" />,
      link: contactinfo.socialLinks?.facebook
        ? `${contactinfo.socialLinks.facebook}`
        : "#",
      className: "facebook",
    },
    {
      icon: <FaInstagram className="text-xl" />,
      link: contactinfo.socialLinks?.instagram
        ? `${contactinfo.socialLinks.instagram}`
        : "#",
      className: "instagram",
    },
    {
      icon: <FaWhatsapp className="text-xl" />,
      link: contactinfo.phone
        ? `https://api.whatsapp.com/send?phone=${contactinfo.phone.replace(
            /[^0-9]/g,
            ""
          )}&text=Hello,%20I'm%20interested%20in%20your%20web%20and%20software%20development%20services.%20Could%20you%20please%20provide%20more%20details%3F
`
        : "#",
      className: "whatsapp",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 20,
      },
    },
  };

  return (
    <StyledWrapper>
      <motion.div
        className="share"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {icons.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn ${item.className}`}
            variants={itemVariants}
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            {item.icon}
          </motion.a>
        ))}
      </motion.div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .share {
    display: flex;
    gap: 1em;
    margin-top: 10px;
  }

  .btn {
    width: 3em;
    height: 3em;
    border: none;
    border-radius: 50%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s all;
    cursor: pointer;
  }

  .linkedin {
    color: #0a66c2;
  }

  .linkedin:hover {
    background-color: #0a66c2;
    color: white;
  }

  .facebook {
    color: #3b5998;
  }

  .facebook:hover {
    background-color: #3b5998;
    color: white;
  }

  .instagram {
    color: #e1306c;
  }

  .instagram:hover {
    background-color: #e1306c;
    color: white;
  }

  .whatsapp {
    color: #25d366;
  }

  .whatsapp:hover {
    background-color: #25d366;
    color: white;
  }
`;

export default SocialBtns;
