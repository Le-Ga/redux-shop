import { data } from "../data";
import { Product } from "../Components/Product/Product";
import { Categories } from "../Components/Categories/Categories";
import { getSelectedCategory } from "../redux/productSlice";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Alert } from "../Components/Product/Alert";

function Products() {
  const selectedCategory = useSelector(getSelectedCategory);
  const [alertName, setAlertName] = useState("");

  const closeAlert = () => {
    setAlertName("");
  };

  const showAlert = (name) => {
    setAlertName(name);
  };

  return (
    <>
      <Categories />
      <div className="products">
        {data
          .filter((product) => {
            if (selectedCategory === "ALL") {
              return true;
            }
            return selectedCategory === product.category;
          })
          .map((product) => (
            <Product
              key={product.id}
              {...product}
              product={product}
              showAlert={showAlert}
            />
          ))}
        {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
      </div>
    </>
  );
}

export { Products };
