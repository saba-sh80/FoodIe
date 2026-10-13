export default function MenuCard({id, src , title , prise , rate , alt}) {
  return (
    <div className="relative w-86 h-[15.625em] rounded-3xl menu-background" id={id}>
      <img
        src={src}
        className="absolute -top-12 -right-12 w-37.5 h-37.5 rounded-full border-8 border-red-700 object-cover"
        alt={alt}
      />
      <div className="mt-12 flex flex-col">
        <h4 className="font-bold text-2xl ms-8">{title}</h4>
        <div className="flex mt-2 ms-6 w-full h-[35%] py-[1em] px-0">
          <img
            src="../../assets/images/five-star-ratings.png"
            className=" w-[50%] h-full"
            alt="Noddle pic"
          />
          <h6 className="text-gray-600 ms-2 mt-4">{rate}</h6>
        </div>
        <div className="flex justify-between w-2/3 ms-7">
          <h5 className="card-title mt-1">{prise}</h5>
          <button
            className="bg-red-700 hover:bg-red-700 text-white p-2 transition w-[6em] rounded-3xl"
            type="button"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
