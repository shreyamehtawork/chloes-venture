import React from "react";
import "../styles/Categories.css";
import mainCategoryImage from "../assets/image1.jpg";

const Categories = () => {
  return (
    <section className="categories-section">
      <div className="container-fluid p-0 categories-content-wrapper">
        {/* Image Section */}
        <div className="col-lg-6 col-md-12 category-image-half fade-in-left">
          <div className="category-main-image-container">
            <img
              src={mainCategoryImage}
              alt="Main Category"
              className="img-fluid"
            />
          </div>
        </div>

        {/* Category Grid Section */}
        <div className="col-lg-6 col-md-12 category-grid-half fade-in-right">
          <div className="text-center mb-3">
            <h6 className="section-title">Categories</h6>
            <div className="underline mx-auto"></div>
          </div>

          <div className="category-grid-box rounded-3 p-3">
            <div className="row g-0 h-100">
              {["Pet", "Decor", "Beauty", "Fashion"].map((cat, idx) => (
                <div key={idx} className="col-6 p-2 category-grid-item">
                  <div className="category-item-content">
                    <h5 className="category-item-title">{cat}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
