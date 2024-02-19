import { Cart } from "./Cart";
import { foodData } from "../Database/productdData.js";

const Main = async() => {

  const response = await  fetch("http://localhost:8000/getallItems");
  const jsonData = await response.json();
  
  return (
    <>
      {" "}
      <div className="p-2 flex flex-row gap-3 justify-center align-middle flex-wrap sm:ml-64">
        {foodData.map((food) => (
          <Cart
            uniqueId={food.id}
            img={food.image}
            calories={food.calories}
            name={food.name}
          />
        ))}
      </div>
    </>
  );
};

export default Main;
