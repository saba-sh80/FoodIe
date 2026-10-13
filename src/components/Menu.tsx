import MenuCard from "./MenuCard";

const menuItems = [
  {
    id: 0,
    src: "../../assets/images/Chicken-burgur-2.jpg",
    title: "Chicken Burger",
    prise: "$3.50",
    rate: "(160)",
    alt: "Chicken-burgur",
  },
  {
    id: 1,
    src: "../../assets/images/Chicken-pizza.jpg",
    title: "Chicken Pizza",
    prise: "$4.20",
    rate: "(142)",
    alt: "Chicken Pizza",
  },
  {
    id: 2,
    src: "../../assets/images/Chicken-fry.jpg",
    title: "Chicken Fry",
    prise: "$5.00",
    rate: "(123)",
    alt: "Chicken Fry",
  },
  {
    id: 3,
    src: "../../assets/images/grill-sandwich.webp",
    title: "Grill Sandwich",
    prise: "$4.80",
    rate: "(112)",
    alt: "Grill Sandwich",
  },
  {
    id: 4,
    src: "../../assets/images/Tacoo-traifi.jpg",
    title: "Tacco Traifi",
    prise: "$3.63",
    rate: "(152)",
    alt: "Tacco Traifi",
  },
  {
    id: 5,
    src: "../../assets/images/Noddle-Ramen.jpeg",
    title: "Noddle's Ramen",
    prise: "$6.50",
    rate: "(163)",
    alt: "Noddle's Ramen",
  },
];

export const Menu = () => {
  return (
    <section className="h-[52em]">
      <div className="w-full flex flex-col">
        <div className="w-1/4 ml-14 flex flex-col gap-y-2">
          <h2 className="font-bold text-3xl" id="regular-menu-header">
            Our <span className="text-red-700">Regular</span> Menu
          </h2>
        </div>
        <div className="w-full flex justify-between items-center px-14">
          <p className="text-gray-600">
            These Are Our Regular Menus. You Can <br /> Order Anything You Like.
          </p>
          <button
            type="button"
            className="bg-red-700 w-20 rounded-3xl p-1 hover:bg-red-800 transition cursor-pointer text-white"
          >
            See All
          </button>
        </div>
      </div>

      <div className="w-full flex justify-center h-[43em] mt-28">
        <div className="grid grid-rows-2 grid-cols-3 gap-x-20">
          {menuItems.map((item) => (
            <MenuCard
              id={item.id}
              src={item.src}
              title={item.title}
              prise={item.prise}
              rate={item.rate}
              alt={item.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
