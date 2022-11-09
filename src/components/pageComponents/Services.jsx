import React from "react";
import Btn from "../Gloabals/GloabalBtn/index.jsx";
import Chart from "../../assets/Icons/Chart Increasing.svg";
import Abacus from "../../assets/Icons/Abacus.svg";
import FirstImg from "../../assets/Images/services_one.png";
import SecondImg from "../../assets/Images/sevices_two.png";
import ThirdImg from "../../assets/Images/sevices_three.png";
import FourthImg from "../../assets/Images/sevices_four.png";
import FivethImg from "../../assets/Images/sevices_five.png";

function Services() {
  const dataCard = [
    {
      id: 1,
      title: "Buxgalteriya hisobini yuritish",
      desc: "Kompaniyangizning buxgaleriya hisobini yuritib biznesingizni keyingi darajaga chiqarishga yordam beramiz",
      img: FirstImg,
    },
    {
      id: 2,
      title: "Buxgalteriya bo’yich konsultatsiya",
      desc: "Kompaniyangizning buxgaleriya hisobini yuritib biznesingizni keyingi darajaga chiqarishga yordam beramiz",
      img: SecondImg,
    },
    {
      id: 3,
      title: "ERI kalti berish",
      desc: "Kompaniyangizning buxgaleriya hisobini yuritib biznesingizni keyingi darajaga chiqarishga yordam beramiz",
      img: ThirdImg,
    },
    {
      id: 4,
      title: "Firma balansini tiklash",
      desc: "Kompaniyangizning buxgaleriya hisobini yuritib biznesingizni keyingi darajaga chiqarishga yordam beramiz",
      img: FourthImg,
    },
    {
      id: 5,
      title: "Yangi firma ochish",
      desc: "Kompaniyangizning buxgaleriya hisobini yuritib biznesingizni keyingi darajaga chiqarishga yordam beramiz",
      img: FivethImg,
    },
  ];

  return (
    <section className="main-services">
      <div className="container">
        <div className="services">
          <div className="services__title">
            <h1>Xizmatlarimiz</h1>
            <img src={Chart} alt="chart" />
            <img src={Abacus} alt="abacus" />
          </div>
          <div className="services__content">
            {dataCard.map((item) => {
              return (
                <div className="content__item" key={item.id}>
                  <h3 className="content__item-title">{item.title}</h3>
                  <p className="content__item-desc">{item.desc}</p>
                  <div className="content__item-img">
                    <div className="image">
                      <img src={item.img} alt={item.title} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="services__btn">
            <Btn className={'full'}/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
