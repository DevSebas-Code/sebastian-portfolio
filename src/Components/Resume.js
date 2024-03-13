import React, { Component,  } from "react";
import Slide from "react-reveal";
import '../../src/css/resume.css'
class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;
    const education = this.props.data.education.map(function (education) {
      
      return (
        <div key={education.school}>
          <h3 style={{color: 'khaki'}}>{education.school}</h3>
          <p style={{color: 'white'}}className="info">
            {education.degree} <span></span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>&bull; {education.description}</p>
        </div>
      );
    });

    const work = this.props.data.work.map(function (work) {
      console.log(work)
      return (
        <div key={work.company}>
          <h3 style={{color: 'khaki'}}>{work.company}</h3>
          <p style={{color: 'white'}} className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <a style={{color: "lightgreen"}}href={work.url} target="_blank" rel="noopener noreferrer">
            {work.url}
          </a>
          <p style={{color: 'white'}}>{work.description}</p>
        </div>
      );
    });

    const skills = this.props.data.skills.map((skills) => {
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + skills.name.toLowerCase();
      const width = skills.level;

      return (
        <li key={skills.name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em style={{color:'white'}}>{skills.name}</em>
        </li>
      );
    });


    
    return (
      
      <section id="resume">
        <Slide left duration={1300}>
        <div className="parallax-bg"></div>
          <div className="row education">
            <div className="three columns header-col">
              <h1 style={{color: 'white'}}>
                <span>Education</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{education}</div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1 style={{color: 'white'}}>
                <span>Work</span>
              </h1>
            </div>

            <div className="nine columns main-col">{work}</div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1 style={{color: 'white'}}>
                <span>Skills</span>
              </h1>
            </div>

            <div className="nine columns main-col">

              <div className="bars">
                <ul className="skills">{skills}</ul>
              </div>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Resume;
