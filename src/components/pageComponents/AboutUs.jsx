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
                    width={18}
                    height={22}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M.778.111V21.89L17.89 11 .78.111Z" fill="#fff" />
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
