import React from "react";
import MainImg from "../../assets/Images/services_one.png";
import ImgOne from "../../assets/Icons/about_content-img1.svg";
import ImgTwo from "../../assets/Icons/about_content-img2.svg";
import ImgThree from "../../assets/Icons/about_content-img3.svg";

function Info() {
  const contentData = [
    {
      id: 1,
      text: "Kuchli raqobat go’lib keling",
      img: ImgOne,
    },
    {
      id: 2,
      text: "Tezroq rivojlaning",
      img: ImgTwo,
    },
    {
      id: 3,
      text: "Aniq raqamlarni ko'ring",
      img: ImgThree,
    },
  ];
  return (
    <section className="main-info">
      <div className="container">
        <div className="info">
          <div className="info__left">
            <h3 className="info__left-text">
              Biznesingizni aniq raqamlarni ko’ring
            </h3>
            <h4 className="info__left-desc">
              Biz bilan hamkorlik orqali bunga erisha olasiz
            </h4>
            <div className="info__left-content">
              <div className="content__items">
                {contentData.map((item) => {
                  return (
                    <div className="content__item" key={item.id}>
                      <div className="content__item-img">
                        <img src={item.img} alt={item.text} />
                      </div>
                      <span className="content__item-text">{item.text}</span>
                    </div>
                  );
                })}
              </div>
              <div className="content__img">
                <div className="image">
                  <img src={MainImg} alt="main image" />
                </div>
              </div>
            </div>
          </div>

          <div className="info__right">
            <div className="info__right-text">
              <h3>Valyuta kurslari</h3>
            </div>
            <div className="info__right-content">
              <div className="content__item">
                <div className="content__item-icon">
                  <svg
                    width={32}
                    height={32}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      clipPath="url(#a)"
                      stroke="#595959"
                      strokeWidth={2.75}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22.266 10.667A4 4 0 0 0 18.666 8h-5.333a4 4 0 1 0 0 8h5.333a4 4 0 1 1 0 8h-5.333a4 4 0 0 1-3.6-2.667M16 4v4m0 16v4" />
                    </g>
                    <defs>
                      <clipPath id="a">
                        <path fill="#fff" d="M0 0h32v32H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="content__item-wrap">
                  <div className="wrap__item">
                    <span className="wrap__item-text">Sotib olish</span>
                    <span className="wrap__item-num">11155.00</span>
                  </div>
                  <div className="wrap__item">
                    <span className="wrap__item-text">Sotish</span>
                    <span className="wrap__item-num">11210.00</span>
                  </div>
                  <div className="wrap__item">
                    <span className="wrap__item-text">MB kursi</span>
                    <span className="wrap__item-num">11095.31</span>
                  </div>
                </div>
              </div>
              <div className="content__item">
                <div className="content__item-icon">
                  <svg
                    width={32}
                    height={32}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      clipPath="url(#a)"
                      stroke="#595959"
                      strokeWidth={2.75}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22.934 9.334c-1.125-1.287-2.551-2.157-4.098-2.501a6.95 6.95 0 0 0-4.6.563c-1.453.712-2.692 1.908-3.564 3.439C9.8 12.365 9.335 14.162 9.335 16s.465 3.635 1.337 5.166c.872 1.53 2.111 2.727 3.564 3.439a6.95 6.95 0 0 0 4.6.563c1.547-.345 2.973-1.215 4.098-2.501M17.334 13.333H6.667m0 5.333h10.667" />
                    </g>
                    <defs>
                      <clipPath id="a">
                        <path fill="#fff" d="M0 0h32v32H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="content__item-wrap">
                  <div className="wrap__item">
                    <span className="wrap__item-text">Sotib olish</span>
                    <span className="wrap__item-num">11155.00</span>
                  </div>
                  <div className="wrap__item">
                    <span className="wrap__item-text">Sotish</span>
                    <span className="wrap__item-num">11210.00</span>
                  </div>
                  <div className="wrap__item">
                    <span className="wrap__item-text">MB kursi</span>
                    <span className="wrap__item-num">11095.31</span>
                  </div>
                </div>
              </div>
              <div className="content__item">
                <div className="content__item-icon">
                  <svg
                    width={32}
                    height={32}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      clipPath="url(#a)"
                      stroke="#595959"
                      strokeWidth={2.75}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22.934 9.334c-1.125-1.287-2.551-2.157-4.098-2.501a6.95 6.95 0 0 0-4.6.563c-1.453.712-2.692 1.908-3.564 3.439C9.8 12.365 9.335 14.162 9.335 16s.465 3.635 1.337 5.166c.872 1.53 2.111 2.727 3.564 3.439a6.95 6.95 0 0 0 4.6.563c1.547-.345 2.973-1.215 4.098-2.501M17.334 13.333H6.667m0 5.333h10.667" />
                    </g>
                    <defs>
                      <clipPath id="a">
                        <path fill="#fff" d="M0 0h32v32H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="content__item-wrap">
                  <div className="wrap__item">
                    <span className="wrap__item-text">Sotib olish</span>
                    <span className="wrap__item-num">11155.00</span>
                  </div>
                  <div className="wrap__item">
                    <span className="wrap__item-text">Sotish</span>
                    <span className="wrap__item-num">11210.00</span>
                  </div>
                  <div className="wrap__item">
                    <span className="wrap__item-text">MB kursi</span>
                    <span className="wrap__item-num">11095.31</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;
