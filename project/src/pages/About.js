import axios from "axios";
import FsLightbox from "fslightbox-react";
import React, { Suspense, useEffect, useState } from "react";
import * as Icon from "react-feather";
import { Helmet } from "react-helmet";
import ProgressiveImage from "react-progressive-image";
import Slider from "react-slick";
import Layout from "../components/Layout";
import Sectiontitle from "../components/Sectiontitle";
import Service from "../components/Service";
import Spinner from "../components/Spinner";
import Testimonial from "../components/Testimonial";

function About() {
  const [toggler, setToggler] = useState(false);
  const [information, setInformation] = useState("");
  const [services, setServices] = useState([]);
  const [reviews, setReviews] = useState([]);

  const sliderSettings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleToggler = (event) => {
    setToggler(!toggler);
  };

  useEffect(() => {
    axios.get("/api/information").then((response) => {
      setInformation(response.data);
    });
    axios.get("/api/services").then((response) => {
      setServices(response.data);
    });
    axios.get("/api/reviews").then((response) => {
      setReviews(response.data);
    });
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>About - Chester React Personal Portfolio Template</title>
        <meta
          name="description"
          content="Chester React Personal Portfolio Template About Page"
        />
      </Helmet>
      <Suspense fallback={<Spinner />}>
        <div className="mi-about-area mi-section mi-padding-top">
          <div className="container">
            <Sectiontitle title="About Me" />
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="mi-about-image">
                  <ProgressiveImage
                    src={information.aboutImage}
                    placeholder="/images/about-image-placeholder.png"
                  >
                    {(src) => (
                      <img
                        src={src}
                        alt="aboutimage"
                        onClick={() => handleToggler(!toggler)}
                      />
                    )}
                  </ProgressiveImage>
                  <span className="mi-about-image-icon">
                    <Icon.ZoomIn />
                  </span>
                  <FsLightbox
                    toggler={toggler}
                    sources={[information.aboutImageLg]}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mi-about-content">
                  <h3>
                    Who is <span className="color-theme">{information.name}?</span>
                  </h3>
                  <p>
                    Assembling my own computer during middle school provided me with a valuable education on the functionality and interplay of various computer components.
                    This understanding enabled me to secure a position at a public school, where I was responsible for repairing, reconstructing, and upkeeping computer systems.
                  </p>

                  <p>
                    The education and training I received at New York City College of Technology and Several Internships have been instrumental in my software development career, equipping me with the essential skills sought after in the industry.
                    Today, I stand as a versatile web developer, recognized for my keen design sensibilities and my proficiency in crafting interactive and responsive web applications.
                  </p>
                  <ul>
                    {!information.name ? null : (
                      <li>
                        <b>Full Name</b> {information.name}
                      </li>
                    )}
                    {!information.age ? null : (
                      <li>
                        {/*<b>Age</b> {information.age} Years*/}
                      </li>
                    )}
                    {!information.phone ? null : (
                      <li>
                        <b>Phone</b> {information.phone}
                      </li>
                    )}
                    {!information.nationality ? null : (
                      <li>
                        <b>Nationality</b> {information.nationality}
                      </li>
                    )}
                    {!information.language ? null : (
                      <li>
                        <b>Languages</b> {information.language}
                      </li>
                    )}
                    {!information.email ? null : (
                      <li>
                        <b>Email</b> {information.email}
                      </li>
                    )}
                    {!information.address ? null : (
                      <li>
                        <b>Address</b> {information.address}
                      </li>
                    )}
                    {/*{!information.freelanceStatus ? null : (*/}
                    {/*  <li>*/}
                    {/*    <b>Freelance</b> {information.freelanceStatus}*/}
                    {/*  </li>*/}
                    {/*)}*/}
                  </ul>
                  <a href={information.cvfile} className="mi-button">
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </Suspense>
    </Layout>
  );
}

export default About;
