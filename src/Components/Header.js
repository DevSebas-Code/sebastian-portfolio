import React, { Component } from "react";
import Fade from "react-reveal";
import backgroundVideoUrl from "../Components/Deep_Field_The_Impossible_Magnitude_of_our_Universe.mp4";
import "../css/video.css";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const bannerStyles = {
      opacity: 0.6,
      backgroundColor: "rgba(0,0,0,.5)",
      // borderRadius: "150px",
      WebkitBorderRadius: 70,
      padding: 40,
    };

    const name = this.props.data.name;
    const description = this.props.data.description;

    return (
      <header id="home">
        <video
          className="video-background"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src={backgroundVideoUrl} type="video/mp4" />
          {/* Add additional <source> elements for other supported video formats */}
        </video>
        {/* <ParticlesBg type="circle" bg={true} /> */}

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                Experience
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div style={bannerStyles} className="banner-text">
            <Fade bottom>
              <h1 style={{ color: "khaki" }} className="responsive-headline">
                {name}
              </h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3 style={{ color: "#10101", fontWeight: "bold" }}>
                {description}.
              </h3>
            </Fade>
            <hr />
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
