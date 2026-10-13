import ShopCard from "./ShopCard";

const shopItems = [
  {
    id: 0,
    src: "../../assets/images/Chicken-burgur.jpg",
    title: "Chicken Burger",
    alt: "Chicken-burgur",
  },
  { id: 1, src: "../../assets/images/Pizza.jpg", title: "Pizza", alt: "Pizza" },
  {
    id: 2,
    src: "../../assets/images/French-Fries.jpg",
    title: "French Fries",
    alt: "French Fries",
  },
];

export const ShopCards = () => {
  return (
    <div>
      {/* قسمت کارت های خرید (شامل سه کارت) */}
      <div className="h-[44em] flex flex-col items-center justify-center">
        <div className="w-full h-90 grid grid-rows-1 grid-cols-2 items-center">
          <div className="flex items-center justify-start h-40">
            <div className="flex items-center justify-center m-14">
              <h2 className="font-bold text-[35px] mt-10">
                Best <span className="text-red-700">Delivered </span>
                <br/>Category
              </h2>
            </div>
          </div>

          <div className="flex items-center justify-center h-40">
            <div className="flex items-center justify-center mt-20">
              <h6 className="text-gray-700 font-semibold">
                Here Are Some Of Our best Distributed <br />
                Categories. If You want You Can Order <br /> From Here.
              </h6>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 grid-rows-1 justify-center items-center gap-5 h-150">
          {shopItems.map((item) => (
            <ShopCard
              id={item.id}
              src={item.src}
              alt={item.alt}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
