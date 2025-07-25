import React from "react";
import "../../styles/Categories.css";
import decor from "../../assets/flower.webp";
import pet from "../../assets/pet.png";
import icon from "../../assets/knitting.png";
import { Link } from "react-router-dom";

const categories = [
  { title: "FASHION", img: decor },
  { title: "DECOR", img: pet },
  { title: "PET", img: decor },
  { title: "BEAUTY", img: pet },
];

export default function Categories() {
  return (
    <section className="categories-section text-white py-5">
      <h1 className="text-center fw-bold mb-5 text-uppercase">
        Our Categories
      </h1>
      <div className="container">
        <div className="row text-center justify-content-center">
          {categories.map((cat, index) => (
            <div className="col-6 col-md-3 mb-4" key={index}>
              <div className="category-card mx-auto">
                <Link
                  to={`/${cat.title}`}
                  key={cat.title}
                  className="category-link"
                >
                  <img src={cat.img} alt={cat.title} className="category-img" />
                  <div className="mx-auto mt-3">
                    <img src={icon} width="30" height="30"></img>
                  </div>

                  <h3 className="mt-3">{cat.title}</h3>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
