import React from "react";
import "./products.css";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarIcon from "@mui/icons-material/Star";
import productDetail from "./Products.json";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/actions";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Products = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);

  const handleAddToCart = (item) => {
    toast.success("Added To Cart", {
      position: "bottom-right",
    });

    dispatch(addToCart(item));
  };

  return (
    <div className="productPage">
      <div className="productTopBanner">
        <div className="productTopBannerItems">Electronics</div>
        <div className="productTopBannerItemsSubMenu">Mobile & Accessories</div>
        <div className="productTopBannerItemsSubMenu">Laptop & Accessories</div>
        <div className="productTopBannerItemsSubMenu">
          TV & Home Entertainment
        </div>
        <div className="productTopBannerItemsSubMenu">Audio</div>
        <div className="productTopBannerItemsSubMenu">Cameras</div>
        <div className="productTopBannerItemsSubMenu">Computer Peripherals</div>
        <div className="productTopBannerItemsSubMenu">Smart Technology</div>
        <div className="productTopBannerItemsSubMenu">Musical Instruments</div>
        <div className="productTopBannerItemsSubMenu">Office & Stationary</div>
      </div>

      <div className="productsPageMain">
        <div className="productsPageMainLeftCategory">
          <div className="productsPageMainLeftCategoryTitle">Category</div>
          <div className="productsPageMainLeftCategoryContent">
            <div className="productsPageMainLeftCategoryTitleContent">
              Computer & Accessories
            </div>
            <div className="productsPageMainLeftCategoryContentSub">
              Macbooks
            </div>
            <div className="productsPageMainLeftCategoryContentSub">
              Amazon Prime
            </div>
            <div className="productsPageMainLeftCategoryContentSub">
              Average Customer Review
            </div>

            <div className="ratingLeftBox">
              <StarIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarIcon sx={{ fontSize: "20px", color: "#febd69" }} />

              <StarIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <div className="andUp">& Up</div>
            </div>
            {/* -------------------------------------------------------------------------------------- */}
            <div className="ratingLeftBox">
              <StarIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <div className="andUp">& Up</div>
            </div>
            {/* -------------------------------------------------------------------------------------- */}

            <div className="ratingLeftBox">
              <StarIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <div className="andUp">& Up</div>
            </div>
            {/* -------------------------------------------------------------------------------------- */}
            <div className="ratingLeftBox">
              <StarIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <div className="andUp">& Up</div>
            </div>
            {/* -------------------------------------------------------------------------------------- */}

            <div className="ratingLeftBox">
              <StarIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <div className="andUp">& Up</div>
            </div>
            {/* -------------------------------------------------------------------------------------- */}
            <div className="productsPageMainLeftCategoryContentSub">
              Amazon Launchpad
            </div>
            <div className="productsPageMainLeftCategoryContentSub">
              Amazon Renewed
            </div>
            <div className="productsPageMainLeftCategoryContentSub">
              Bags, Wallets and Luggage
            </div>
            <div className="productsPageMainLeftCategoryContentSub">
              Clothing & Accessories
            </div>
            <div className="productsPageMainLeftCategoryContentSub">
              Grocery & Gourmet Foods
            </div>
            <div className="productsPageMainLeftCategoryContentSub">
              Health & Personal Care
            </div>
            <div className="productsPageMainLeftCategoryContentSub">
              Home Improvement
            </div>
            <div className="productsPageMainLeftCategoryContentSub">
              Sports, Fitness & Outdoors
            </div>
            <div className="productsPageMainLeftCategoryContentSub">
              Musical Instruments
            </div>
            <div className="productsPageMainLeftCategoryContentSub">
              Video Games
            </div>
          </div>
        </div>
        <div className="productsPageMainRight">
          <div className="productsPageMainRightTopBanner">
            1-5 of 5 results for
            <span className="productsPageMainRightTopBannerSpan">Macbook</span>
          </div>
          <div className="itemsImageProductPage">
            {productDetail.product.map((item, index) => {
              return (
                <div className="itemsImageProductPageOne" key={item.id}>
                  <div className="imageBlockitemsImageProductPageOne">
                    <img
                      src={item.imageUrl}
                      className="productImageProduct"
                      alt=""
                    />
                  </div>
                  <div className="productNameProduc">
                    <div className="productFont">{item.name}</div>
                  </div>
                  <div className="productNameProductRating">
                    <StarIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                    <StarIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                    <StarIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                    <StarIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                    <StarIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                  </div>
                  <div className="priceProductDetailPage">
                    <div className="currenctText">₹</div>
                    <div className="rateHomeDetail">
                      <div className="rateHomeDetailPrice">{item.price}</div>
                      <div
                        className="addtobasketBtn"
                        onClick={() => {
                          handleAddToCart(item);
                        }}
                      >
                        Add To Cart
                      </div>
                    </div>
                  </div>
                  <div className="offProductPage">
                    up to 100% off on selected cards
                  </div>
                  <div className="freeDeliveryHomepage">Free Delivery </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Products;
