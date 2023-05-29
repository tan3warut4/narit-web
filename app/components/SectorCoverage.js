import React from "react";
import Carousel from "./Carousel";

const SectorCoverage = () => {
  return (
    <div>
      <div className="max-w-4xl mx-auto py-12">
        <div className="text-center pb-8">
          <span className="text-5xl underline ">Sector coverage</span>
        </div>

        <div>
          <Carousel>
            <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
            <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
            <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default SectorCoverage;
