export const Discount = () => {
  return (
    <article className="container-fluid w-[85em] h-[25em]">
      <div className="row container-fluid w-[72em] h-[25em] ml-[5em]">
        <div
          className="col-7 container-fluid card mt-3 h-[23em] border-none"
          id="discount-container-1"
        >
          <img
            src="./images/Cheese-burgur.webp"
            className="card-img w-100 object-cover h-[22.6em]"
            alt="..."
          />
          <div className="rounded-br-[25px] rounded-tr-none w-[8.5em] h-[2.5em] bg-red-600 ml-[0.775em]">
            <p className="card-title text-white mt-[-0.5em]">30% Discount</p>
          </div>
        </div>

        <div
          className="col-5 container-fluid card mt-3 h-[23em] border-none"
          id="discount-container-2"
        >
          <div className="col-12">
            <div className="col-12 card border-none">
              <img
                src="./images/desert.jpg"
                className="card-img w-100 h-[11em] object-cover mb-[1em]"
                alt="..."
              />
              <div className="rounded-br-[25px] rounded-tr-none w-[8.5em] h-[2.5em] bg-red-600">
                <p className="card-title text-white mt-[-0.5em]">
                  25% Discount
                </p>
              </div>
            </div>
            <div className="col-12 card border-none">
              <img
                src="./images/tortilla-wrap-tacos.jpg"
                className="card-img w-100 h-[11em] object-cover"
                alt="..."
              />
              <div className="rounded-br-[25px] rounded-tr-none w-[8.5em] h-[2.5em] bg-red-600">
                <p className="card-title text-white mt-[-0.5em]">
                  20% Discount
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
