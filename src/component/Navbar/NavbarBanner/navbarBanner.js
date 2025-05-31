import React from "react";
import "./navbarBanner.css";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import { Link } from "react-router-dom";

const NavbarBanner = () => {
  const options = [
    { name: "MX player" },
    { name: "Bestsellers" },
    { name: "Mobiles" },
    { name: "Today's Deals" },
    { name: "Prime" },
    { name: "Customer Service" },
    { name: "New Releases" },
    { name: "Fashion" },
    { name: "Electronics" },
    { name: "Amazon Pay" },
    { name: "Home & Kitchen" },
    { name: "Computers" },
  ];
  return (
    <div className="navbarBanner">
      <div className="navbarBannerOptionsLeft">
        <div className="optionsNavbarBanner">
          <MenuIcon sx={{ fontSize: "24px" }} />
          <div className="allOptionsNavbarBanner">All</div>
        </div>

        {options.map((item, ind) => {
          return (
            <Link to={"/products"} className="optionsNavbarBanner" key={ind}>
              <div className="allOptionsNavbarBanner">{item.name}</div>
              {item.name === "Prime" && <ArrowDropDownOutlinedIcon />}
            </Link>
          );
        })}

        {/* <div className="optionsNavbarBanner">
      <div className="allOptionsNavbarBanner">MX player</div>

     </div>
  
      
      <div className="optionsNavbarBanner">
      <div className="allOptionsNavbarBanner">Bestsellers</div>

     </div>


     <div className="optionsNavbarBanner">
      <div className="allOptionsNavbarBanner">Mobiles</div>

     </div>

     <div className="optionsNavbarBanner">
      <div className="allOptionsNavbarBanner">Today's Deals</div>

     </div>

     <div className="optionsNavbarBanner">
      <div className="allOptionsNavbarBanner">Prime</div>
      <ArrowDropDownOutlinedIcon/>

     </div>

     <div className="optionsNavbarBanner">
      <div className="allOptionsNavbarBanner">Customer Service</div>

     </div>

     <div className="optionsNavbarBanner">
      <div className="allOptionsNavbarBanner">New Releases</div>

     </div>

     <div className="optionsNavbarBanner">
      <div className="allOptionsNavbarBanner">Fashion</div>

     </div>


<div className="optionsNavbarBanner">
      <div className="allOptionsNavbarBanner">Electronics</div>

     </div>

     <div className="optionsNavbarBanner">
      <div className="allOptionsNavbarBanner">Amazon Pay</div>

     </div>


     <div className="optionsNavbarBanner">
      <div className="allOptionsNavbarBanner">Home & Kitchen</div>

     </div>
      

      <div className="optionsNavbarBanner">
      <div className="allOptionsNavbarBanner">Computers</div>

     </div> */}
      </div>
    </div>
  );
};

export default NavbarBanner;
