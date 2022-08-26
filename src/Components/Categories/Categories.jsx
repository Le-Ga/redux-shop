import React from "react";
import { Filter } from "./Filter";

function Categories() {
  return (
    <>
      <div className="categories container">
        {["PROTEIN", "GAINER", "CREATINE", "ALL"].map((category, index) => (
          <Filter key={index} category={category} />
        ))}
      </div>
    </>
  );
}

export { Categories };
