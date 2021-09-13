import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import { useState } from "react";
import PopUp from "./components/PopUp";
import Contact from "./components/Contact";
import Header from "./components/Header";

function App() {
  const [showpopup, setShowpopup] = useState(false);
  const [hidesection, setHidesection] = useState(false);

  // -------------------About Tabs--------------
  // const tabsContainer = window.document.querySelector(".about_tabs"),
  // aboutSection = window.document.querySelector(".about_section");

  // const changeTab = (e) => {
  //   if(e.target.classList.contains("tab_item") && !e.target.classList.contains(".active")){
  //     tabsContainer.querySelector(".active").classList.remove(".active");
  //     e.target.classList.add(".active");
  //     const target = e.target.getAttribute("data-target");
  //     aboutSection.querySelector(".tab_content.active").classList.remove(".active");
  //     aboutSection.querySelector(target).classList.add(".active")
  //   }
  // }

  window.addEventListener("load", () => {
    document.querySelector(".app").classList.remove("hidden");
    document.querySelector(".home_section").classList.add("active")

    // page loader
    document.querySelector(".page_loader").classList.add("fade-out");
    setTimeout(() =>{
      document.querySelector(".page_loader").style.display = "none"
    }, 600)
  })

  const toggleNav = () => {
    setHidesection(!hidesection);
    window.document.body.classList.toggle("hide_scrolling");
  };

  const handlePopup = (e) => {
    if (e.target.classList.contains("view_project_btn")) {
      setShowpopup(!showpopup);
      window.document.body.classList.toggle("hide_scrolling");
      window.document.querySelector(".portfolio_popup").scrollTo(0, 0);
      portfolioItemDetails(e.target.parentElement);
    }
  };

  const closePopup = () => {
    setShowpopup(!showpopup);
    window.document.body.classList.toggle("hide_scrolling");
  };

  const portfolioItemDetails = (portfolioItem) => {
    window.document.querySelector(".pp_thumbnail img").src =
      portfolioItem.querySelector(".portfolio_item_thumbnail img").src;
    window.document.querySelector(".pp_header h3").innerHTML =
      portfolioItem.querySelector(".portfolio_item_title").innerHTML;
    window.document.querySelector(".pp_body").innerHTML =
      portfolioItem.querySelector(".portfolio_item_details").innerHTML;
  };

  window.document.addEventListener("click", (e) => {
    if (e.target.classList.contains("pp_inner")) {
      setShowpopup(false);
      // document.body.classList.toggle("hide_scrolling");
    }
  });

  window.document.addEventListener("click", (e) => {
    if (e.target.classList.contains("link_item") && e.target.hash !== "") {
      window.document.querySelector(".overlay").classList.add("active");
      if (e.target.classList.contains("nav_item")) {
        setHidesection(!hidesection);
      } else {
        // setHidesection(!hidesection);
        document.body.classList.add("hide_scrolling");
      }

      setTimeout(() => {
        window.document
          .querySelector("section.active")
          .classList.remove("active", "fade_out");
        window.document.querySelector(e.target.hash).classList.add("active");
        window.scrollTo(0, 0);
        document.body.classList.remove("hide_scrolling");
        window.document.querySelector(".overlay").classList.remove("active");
      }, 500);
    }
  });

  return (
    <div>
<div className="page_loader">
  <div></div>
  <div></div>
  <div></div>
</div>

      <div className="bg_circles">
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="circle3"></div>
        <div className="circle4"></div>
      </div>
      <div className="overlay"></div>
      <div className={`app hidden ${showpopup ? "fade_out" : ""}`}>
        <Header hidesection={hidesection} toggleNav={toggleNav} />
        <Home hidesection={hidesection} />
        <About />
        <Portfolio
          showpopup={showpopup}
          handlePopup={handlePopup}
          closePopup={closePopup}
        />
      </div>
      <Contact />
      <PopUp showpopup={showpopup} closePopup={closePopup} />
    </div>
  );
}

export default App;
