export const Discount = () => {
  return (
    <div className="w-full h-113 flex justify-center items-center">
      <div className="w-270 h-93 grid grid-rows-1 grid-cols-6">
        <div className="h-full col-span-4 relative border-none">
          <img
            src="../../assets/images/Cheese-burgur.webp"
            className="w-160 object-cover h-93 rounded-md"
            alt="..."
          />
          <div className="flex justify-center items-center absolute top-0 left-0 rounded-br-[25px] rounded-tr-none rounded-tl-md w-[8.5em] h-[2.5em] bg-red-700">
            <p className="text-white">30% Discount</p>
          </div>
        </div>

        <div className="col-span-2 h-full" id="discount-container-2">
          <div>
            <div className="relative">
              <img
                src="../../assets/images/desert.jpg"
                className="w-112.5 h-44 object-cover mb-[1em] rounded-md"
                alt="..."
              />
              <div className="flex justify-center items-center absolute top-0 left-0 rounded-br-[25px] rounded-tr-none rounded-tl-md w-[8.5em] h-[2.5em] bg-red-700">
                <p className="card-title text-white">25% Discount</p>
              </div>
            </div>
            <div className="relative">
              <img
                src="../../assets/images/tortilla-wrap-tacos.jpg"
                className="card-img w-112.5 h-45 object-cover rounded-md"
                alt="..."
              />
              <div className="flex justify-center items-center absolute top-0 left-0 rounded-br-[25px] rounded-tr-none rounded-tl-md w-[8.5em] h-[2.5em] bg-red-700">
                <p className="card-title text-white">20% Discount</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
