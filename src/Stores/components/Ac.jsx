import React from "react";
import { acData } from "../data/ac";
import { Link } from "react-router-dom";

const Ac = () => {
  const firstFiveImages = acData.slice(0, 5);

  return (
    <>
      <div className="proTitle">
        <h2>Air Condition</h2>
      </div>
      <div className="proSection">
        {firstFiveImages.map((item) => {
          return (
            <div className="imgBox">
              <Link to='/ac'>
              <img className="proImage" src={item.image} alt="" />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

<<<<<<< HEAD
export default Ac;
=======
export default Ac;
>>>>>>> f3949155b159b6378e3c1394403c608820ee6bbd
