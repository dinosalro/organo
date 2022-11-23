import banner from "../imagens/banner.png";
import { BannerDiv } from "./bannerStyled";
import React from "react";

const Banner = () => {
  return (
    <BannerDiv>
      <img src={banner} alt="Banner" />
    </BannerDiv>
  );
};

export default Banner;
