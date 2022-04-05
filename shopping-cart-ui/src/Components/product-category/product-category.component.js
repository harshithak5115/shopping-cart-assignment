import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../product-category/product-category.component.css";
import { useDispatch } from "react-redux";
import { addItem } from "../../Components/Store/Actions/CartActions";
const ProductCategory = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [categoriesID, setCategoriesID] = useState("5b675e5e5936635728f9fc30");

  const dispatch = useDispatch();

  const handleCartButton = (category) => {
    dispatch(addItem(category));
  };

  const fetchCategories = () => {
    fetch("http://localhost:3001/categories")
      .then((res) => res.json())
      .then((res) => setCategories(res));
  };

  const fetchProducts = () => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((res) => setProducts(res));
  };

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  return (
    <>
      <div>
        <h1 className="text-center text-info">Let's shop</h1>
        <button>
          <Link to="/">Home</Link>
        </button>
      </div>
      <div className="container-fuild mx-2">
        <div className="row mt-5 mx-2">
          <div className="col-md-3">
            {categories.map((category) => (
              <button
                key={category.key}
                className="btn btn-warning w-100 mb-4"
                onClick={() => setCategoriesID(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
          <div className="col-md-9">
            <div className="row">
              {products.map(
                (product) =>
                  categoriesID === product.category && (
                    <div className="col-md-4 mb-4" key={product.id}>
                      <div className="card">
                        <img
                          src={product.imageURL}
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title">{product.name}</h5>
                          <p className="card-text">Price: {product.price}</p>
                          <a
                            href="#234"
                            className="btn btn-primary"
                            onClick={() => handleCartButton(product)}
                          >
                            Buy Now
                          </a>
                        </div>
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCategory;
