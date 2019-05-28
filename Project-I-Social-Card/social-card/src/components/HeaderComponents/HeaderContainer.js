import React from "react";
import ImageThumbnail from "./ImageThumbnail";
import HeaderTitle from "./HeaderTitle";
import HeaderContent from "./HeaderContent";

const HeaderContainer = () => {
  return (
    <header>
      <div>
        <ImageThumbnail />
        <div>
          <HeaderTitle />
          <HeaderContent />
        </div>
      </div>
    </header>
  );
};

export default HeaderContainer;
