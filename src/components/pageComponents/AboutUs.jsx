import React from "react";
import Btn from "../Gloabals/GloabalBtn/index.jsx";
import Smiling from "../../assets/Icons/Smiling.svg";
import Bag from "../../assets/Icons/Briefcase.svg";
import Img from "../../assets/Images/AboutImg.png";

function AboutUs() {
  return (
    <section className="main-about-us">
      <div className="container">
        <div className="about">
          <div className="about__title">
            <h1>Biz haqimizda</h1>
            <img src={Smiling} alt="smiling" />
            <img src={Bag} alt="bag" />
          </div>

          <div className="about__content">
            <div className="content__left">
              <h1 className="content__left-title">
                Biz tejamkor yechim beramiz
              </h1>
              <p className="content__left-desc">
                Tejamkor yechim - bu sizning biznesdagi moliyaviy
                muammolaringizni yechishga qaratilgan professional buxgalter
                jamoasi <br /> <br /> Bizning professional jamoamiz sizga
                bznesningizning kuchli analiz qilingan hisob kitoblarni berishga
                qaratilgan
              </p>
              <Btn className={"about-left"} />
            </div>

            <div className="content__right">
              <div className="content__right-img">
                <img src={Img} alt="img" />
                <div className="player__icon">
                  <svg
                    width={56}
                    height={56}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx={28} cy={28} r={28} fill="#FFDC00" />
                    <g clipPath="url(#a)">
                      <path
                        d="M21.778 17.111V38.89L38.89 28 21.78 17.111Z"
                        fill="#fff"
                      />
                    </g>
                    <defs>
                      <clipPath id="a">
                        <path
                          fill="#fff"
                          transform="translate(9.333 9.333)"
                          d="M0 0h37.333v37.333H0z"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <Btn className={"about-right"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
