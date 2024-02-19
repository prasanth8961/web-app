export const Cart = (props) => {
  return (
    <>
      <div
        key={props.uniqueId}
        class="max-w-sm h-[180px]   w-[150px] bg-white border-[1px] shadow-ls border-gray-500 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <a href="#">
          <img class="rounded-t-lg
          h-[42%] w-[100%] " src={props.img} alt="img" />
        </a>
        <div class="p-2">
          <b>{props.name}</b>
          <p>Rs. {props.calories}.</p>
        </div>
      </div>
    </>
  );
};
