export const Discount = () => {
  return (
    <article className="container-fluid" id="article-1">
      <div className="row container-fluid" id="main-discount-container">
        <div
          className="col-7 container-fluid card mt-3 discount-containers"
          id="discount-container-1"
        >
          <img
            src="./images/Cheese-burgur.webp"
            className="card-img w-100 h-100 object-fit-cover"
            id="card-image-1"
            alt="..."
          />
          <div className="card-img-overlay bg-danger" id="margin-setting">
            <p className="card-title text-white discount-text">30% Discount</p>
          </div>
        </div>

        <div
          className="col-5 container-fluid card mt-3 discount-containers"
          id="discount-container-2"
        >
          <div className="col-12">
            <div className="col-12 card card-images">
              <img
                src="./images/desert.jpg"
                className="card-img w-100 card-image-2 object-fit-cover"
                id="card-border"
                alt="..."
              />
              <div className="card-img-overlay bg-danger">
                <p className="card-title text-white discount-text">
                  25% Discount
                </p>
              </div>
            </div>
            <div className="col-12 card card-images">
              <img
                src="./images/tortilla-wrap-tacos.jpg"
                className="card-img w-100 card-image-2 object-fit-cover"
                alt="..."
              />
              <div className="card-img-overlay bg-danger">
                <p className="card-title text-white discount-text">
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
