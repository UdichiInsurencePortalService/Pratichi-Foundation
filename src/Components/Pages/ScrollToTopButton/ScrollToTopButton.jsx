import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px", // 👈 Right side
        width: "55px",
        height: "55px",
        borderRadius: "50%",
        background: "linear-gradient(135deg, #0d6efd, #6610f2)",
        color: "#fff",
        display: visible ? "flex" : "none",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        boxShadow: "0 6px 15px rgba(0,0,0,0.3)",
        transition: "all 0.3s ease",
        zIndex: 1000,
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.transform = "scale(1.1)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.transform = "scale(1)")
      }
    >
      <ArrowUp size={35} />       

    </div>
  );    
};

export default ScrollToTopButton;