import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Educations from "../../containers/education/Educations";
import Certifications from "../../containers/certifications/Certifications";
import EducationImg from "./EducationImg";
import "./EducationComponent.css";
import { Fade } from "react-reveal";
import a from "../../images/a.png";
import b from "../../images/b.png";
import c from "../../images/c.png";
import d from "../../images/d.png";
import e from "../../images/e.png";
import f from "../../images/f.png";
import g from "../../images/g.png";
import m1 from "../../images/m1.png";
import m2 from "../../images/m2.png";
import m3 from "../../images/m3.png";
import m4 from "../../images/m4.png";
import m5 from "../../images/m5.png";
import m6 from "../../images/m6.png";
import m7 from "../../images/m7.png";
import m8 from "../../images/m8.png";
import m9 from "../../images/m9.png";
import m10 from "../../images/m10.png";
import m11 from "../../images/m11.png";
import scrum from "../../images/scrum.png";
import hr from "../../images/hr1.png";

class Education extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="education-main">
        <Header theme={this.props.theme} />
        <div className="basic-education">
          <Fade bottom duration={2000} distance="40px">
            <div className="heading-div">
              <div className="heading-img-div">
                {/* <img
									src={require("../../assests/images/education.svg")}
									alt=""
								/> */}
                <EducationImg theme={theme} />
              </div>
              <div className="heading-text-div">
                <h1 className="heading-text">
                  Education
                  <br />
                </h1>
                <Fade bottom duration={2000} distance="40px">
                  <a href="https://leetcode.com/alanbinu5/" target="_blank">
                    <img
                      className="organizations-imgnewnew"
                      src={g}
                      alt="aaaaaa"
                    />
                  </a>
                  LeetCode Profile
                  <a
                    href="https://www.hackerrank.com/alanbinu5"
                    target="_blank"
                  >
                    <img
                      className="organizations-imgnewnew"
                      src={hr}
                      alt="aaaaaa"
                    />
                  </a>
                  HackeRrank Profile
                </Fade>
                <p
                  className="experience-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  “Education is the most powerful weapon which you can use to
                  change the world” – <b>Nelson Mandela</b>
                  <br />
                  <br />
                  “An investment in knowledge pays the best interest” –{" "}
                  <b>Benjamin Franklin</b>
                  <br />
                  <br />
                  "Some of the brightest minds in the country can be found on
                  the last benches of the classroom"-<b>Dr.APJ Abdul Kalam</b>
                </p>
                <h3 style={{ color: theme.text }}></h3>{" "}
              </div>
            </div>
          </Fade>
          <center>
            <h3 className="heading-sub-text">
              Verified Digital Archivements
              <br />
              <br />
            </h3>
          </center>
          <center>
            <li className="organizations-inline">
              <Fade bottom duration={2000} distance="40px">
                <img className="organizations-imgnew" src={a} alt="aaaaaa" />
              </Fade>
            </li>
            <li className="organizations-inline">
              <Fade bottom duration={2000} distance="40px">
                <img className="organizations-imgnew" src={e} alt="aaaaaa" />
              </Fade>
            </li>
            <li className="organizations-inline">
              <Fade bottom duration={2000} distance="40px">
                <img className="organizations-imgnew" src={c} alt="aaaaaa" />
              </Fade>
            </li>
            <li className="organizations-inline">
              <Fade bottom duration={2000} distance="40px">
                <img
                  className="organizations-imgnew"
                  src={scrum}
                  alt="aaaaaa"
                />
              </Fade>
            </li>
            <li className="organizations-inline">
              <Fade bottom duration={2000} distance="40px">
                <img className="organizations-imgnew" src={d} alt="aaaaaa" />
              </Fade>
            </li>

            <li className="organizations-inline">
              <Fade bottom duration={2000} distance="40px">
                <img className="organizations-imgnew" src={f} alt="aaaaaa" />
              </Fade>
            </li>
            <li className="organizations-inline">
              <Fade bottom duration={2000} distance="40px">
                <img className="organizations-imgnew" src={b} alt="aaaaaa" />
              </Fade>
            </li>
          </center>
          <center>
            <a
              href="https://www.credly.com/users/alan-binu/badges"
              target="_blank"
            >
              <button className="button">View More</button>
            </a>
          </center>
          <center>
            <h3 className="heading-sub-text">
              Verified Digital Badges
              <br />
              <br />
            </h3>
          </center>
          <center>
            <li className="organizations-inline">
              <Fade bottom duration={2000} distance="40px">
                <img className="organizations-imgnew" src={m4} alt="aaaaaa" />
              </Fade>
            </li>
            <li className="organizations-inline">
              <Fade bottom duration={2000} distance="40px">
                <img className="organizations-imgnew" src={m5} alt="aaaaaa" />
              </Fade>
            </li>
            <li className="organizations-inline">
              <Fade bottom duration={2000} distance="40px">
                <img className="organizations-imgnew" src={m1} alt="aaaaaa" />
              </Fade>
            </li>
            <li className="organizations-inline">
              <Fade bottom duration={2000} distance="40px">
                <img className="organizations-imgnew" src={m2} alt="aaaaaa" />
              </Fade>
            </li>
            <li className="organizations-inline">
              <Fade bottom duration={2000} distance="40px">
                <img className="organizations-imgnew" src={m3} alt="aaaaaa" />
              </Fade>
            </li>
            <li className="organizations-inline">
              <Fade bottom duration={2000} distance="40px">
                <img className="organizations-imgnew" src={m5} alt="aaaaaa" />
              </Fade>
            </li>
            <li className="organizations-inline">
              <Fade bottom duration={2000} distance="40px">
                <img className="organizations-imgnew" src={m6} alt="aaaaaa" />
              </Fade>
            </li>
            <li className="organizations-inline">
              <Fade bottom duration={2000} distance="40px">
                <img className="organizations-imgnew" src={m7} alt="aaaaaa" />
              </Fade>
            </li>
            <li className="organizations-inline">
              <Fade bottom duration={2000} distance="40px">
                <img className="organizations-imgnew" src={m8} alt="aaaaaa" />
              </Fade>
            </li>
            <li className="organizations-inline">
              <Fade bottom duration={2000} distance="40px">
                <img className="organizations-imgnew" src={m9} alt="aaaaaa" />
              </Fade>
            </li>
            <li className="organizations-inline">
              <Fade bottom duration={2000} distance="40px">
                <img className="organizations-imgnew" src={m10} alt="aaaaaa" />
              </Fade>
            </li>
            <li className="organizations-inline">
              <Fade bottom duration={2000} distance="40px">
                <img className="organizations-imgnew" src={m11} alt="aaaaaa" />
              </Fade>
            </li>
          </center>
          <center>
            <a
              href="https://docs.microsoft.com/en-us/users/alanbinu-2255/"
              target="_blank"
            >
              <button className="button">View More</button>
            </a>
          </center>
          <Educations theme={this.props.theme} />
          <Certifications theme={this.props.theme} />
        </div>
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Education;
