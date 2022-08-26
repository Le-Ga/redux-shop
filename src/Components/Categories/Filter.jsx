import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterCategory, getSelectedCategory } from "../../redux/productSlice";

function Filter(props) {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(getSelectedCategory);

  const { category } = props;
  return (
    <>
      <p
        className={
          selectedCategory === category
            ? "category-selected category"
            : "category"
        }
        onClick={() => {
          dispatch(filterCategory(category));
        }}
      >
        {category}
      </p>
    </>
  );
}

export { Filter };
