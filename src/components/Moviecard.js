import React from "react";
import { IMG_CDN_URL } from "../utils/constant";

const Moviecard = ({ posterPath }) => {
  
  return (
    <div className="w-48 p-2 rounded-lg">
      <img alt="Movie card" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default Moviecard;
