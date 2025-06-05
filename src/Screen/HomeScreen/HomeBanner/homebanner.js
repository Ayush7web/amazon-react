import React from "react";
import "./homebanner.css";
import homeBannerItemProduct from "../../../homeProduct.json";

const HomeBanner = () => {
  return (
    <div className="homeBanner">
      <img
        className="homeBannerimg"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Media/BAU/PC_Hero_2x-toys_1._CB582765723_.jpg"
     alt="" ></img>
      <div className="grayBackgroundHomeBanner"></div>

      <div className="homeBannerItemDiv">
        {homeBannerItemProduct.product.map((item, ind) => {
          return (
            <div className="homeBannerItemDivCard">
              <div className="homeBannerItemDivCardTitle">
                {item.itemTitle}
              </div>

              <div className="imgHomeBannerItemDivCard">
                {item.img.map((item, ind) => {
                  return (
                    <div className="imgBannerHomeDiv" key={ind}>
                      <img className="imgBannerHomeDivImg" src={item.url} alt=""></img>
                      <div className="imgBannerImgName">{item.name}</div>
                    </div>
                  );
                })}
              </div>
              <div className="seeMoreHomeBanner">See More</div>
            </div>
          );
        })
        };
        
      </div>
    </div>
  );
};

export default HomeBanner;
