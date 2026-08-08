export const ShopCards = () => {
  return (
    <section className="relative">


         {/* قسمت کارت های خرید (شامل سه کارت) */}
        <div className="row container-fluid d-flex justify-content-center align-items-center w-[84.3em] w-max-[85em] h-[44em]">
            <div className="row col-12 container-fluid h-[18em]">
                <div className="col-xl-7 col-sm-12 row h-50 ms-3">
                    <div className="col-12 h-50 w-[20em] mt-[8em] ml-0">
                        <h2 className="fw-bold text-[35px]">Best <span className="text-danger">Delivered </span>
                            Category</h2>
                    </div>
                </div>
                <div className="col-xl-5 col-sm-12 row h-50 ms-0 responsive-header-container">
                    <div className="col-12 h-100 w-75 w-min-[500px] mt-[11em] ml-[5em]">
                        <h6 className="text-dark-emphasis responsive-header">Here Are Some Of Our best Distributed <br/>
                            Categories.
                            If You want You Can Order <br/> From Here.
                        </h6>
                    </div>
                </div>
            </div>

            <div className="row container-fluid h-[25em]">
                <div className="col-4 container-fluid responsive-cards responsive-cards-1">
                    <div className="card mt-3 pb-3">
                        <img src="./images/Chicken-burgur.jpg" className="card-img-top object-cover" alt="..."/>
                        <div className="card-body mx-auto">
                            <h5 className="card-title">Chicken Burger</h5>
                            <a href="#" className="card-link text-decoration-none ms-3 text-danger" type="button"
                                data-bs-toggle="modal" data-bs-target="#exampleModal-3">Order Now</a>
                        </div>
                    </div>
                </div>

                <div className="col-4 container-fluid responsive-cards">
                    <div className="card mt-3 pb-3">
                        <img src="./images/Pizza.jpg" className="card-img-top object-cover" alt="..."/>
                        <div className="card-body mx-auto">
                            <h5 className="card-title">Chicken Pizza</h5>
                            <a href="#" className="card-link text-decoration-none ms-3 text-danger" type="button"
                                data-bs-toggle="modal" data-bs-target="#exampleModal-3">Order Now</a>
                        </div>
                    </div>
                </div>

                <div className="col-4 container-fluid responsive-cards responsive-cards-1">
                    <div className="card mt-3 pb-3">
                        <img src="./images/French-Fries.jpg" className="card-img-top object-cover h-[272px]" id="img-1" alt="..."/>
                        <div className="card-body mx-auto">
                            <h5 className="card-title">French Fries</h5>
                            <a href="#" className="card-link text-decoration-none ms-3 text-danger" type="button"
                                data-bs-toggle="modal" data-bs-target="#exampleModal-3">Order Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};