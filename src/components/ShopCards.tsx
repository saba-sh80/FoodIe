export const ShopCards = () => {
  return (
    <section className="position-relative bg-body" id="section-1">

        <div className="row w-75 position-absolute inset-s-50 translate-middle bg-body shadow m-auto mt-5" id="card-1">
            <div className="col-sm-4 my-3">
                <div className="card border border-white">

                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"
                        className="bi bi-filter-square bg-warning rounded svg-1" viewBox="0 0 16 16">
                        <path
                            d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                        <path
                            d="M6 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
                    </svg>

                    <div className="card-body card-body-1">
                        <h5 className="card-title headers">Fast delivery</h5>
                        <p className="card-text text-dark-emphasis card-text-1">The Food Will Be Deliverd To Your Home
                            Within 1-2 Hours Of Your
                            Ordering.</p>
                    </div>
                </div>
            </div>

            <div className="col-sm-4 my-3">
                <div className="card border border-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"
                        className="bi bi-arrow-clockwise bg-warning rounded svg-1" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z" />
                        <path
                            d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
                    </svg>
                    <div className="card-body card-body-1">
                        <h5 className="card-title headers">Fresh Food</h5>
                        <p className="card-text text-dark-emphasis card-text-1">Your Food Will Be Deliverd 100% Fresh To
                            Your Home. We Do Not Deliver
                            Stale Food.</p>
                    </div>
                </div>
            </div>

            <div className="col-sm-4 my-3">
                <div className="card h-100 border border-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"
                        className="bi bi-wallet bg-warning rounded svg-1" viewBox="0 0 16 16">
                        <path
                            d="M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a2 2 0 0 1-1-.268M1 3a1 1 0 0 0 1 1h12V2H2a1 1 0 0 0-1 1" />
                    </svg>
                    <div className="card-body card-body-1">
                        <h5 className="card-title headers">Free Delivery</h5>
                        <p className="card-text text-dark-emphasis card-text-1">Your Food Delivery I Absolutely Free. No
                            Cost Just Order And Enjoy.</p>
                    </div>
                </div>
            </div>
        </div>

         {/* قسمت کارت های خرید (شامل سه کارت) */}
        <div className="row container-fluid d-flex justify-content-center align-items-center" id="main-category-container">
            <div className="row col-12 container-fluid" id="category-header">
                <div className="col-xl-7 col-sm-12 row h-50 ms-3">
                    <div className="col-12 h-50" id="delivery-text-container">
                        <h2 className="fw-bold" id="deliverd-header">Best <span className="text-danger">Delivered </span>
                            Category</h2>
                    </div>
                </div>
                <div className="col-xl-5 col-sm-12 row h-50 ms-0 responsive-header-container">
                    <div className="col-12 h-100 w-75" id="explain-text-container">
                        <h6 className="text-dark-emphasis responsive-header">Here Are Some Of Our best Distributed <br/>
                            Categories.
                            If You want You Can Order <br/> From Here.
                        </h6>
                    </div>
                </div>
            </div>

            <div className="row container-fluid" id="category-body">
                <div className="col-4 container-fluid responsive-cards responsive-cards-1">
                    <div className="card mt-3 pb-3">
                        <img src="./images/Chicken-burgur.jpg" className="card-img-top object-fit-cover" alt="..."/>
                        <div className="card-body mx-auto">
                            <h5 className="card-title">Chicken Burger</h5>
                            <a href="#" className="card-link text-decoration-none ms-3 text-danger" type="button"
                                data-bs-toggle="modal" data-bs-target="#exampleModal-3">Order Now</a>
                        </div>
                    </div>
                </div>

                <div className="col-4 container-fluid responsive-cards">
                    <div className="card mt-3 pb-3">
                        <img src="./images/Pizza.jpg" className="card-img-top object-fit-cover" alt="..."/>
                        <div className="card-body mx-auto">
                            <h5 className="card-title">Chicken Pizza</h5>
                            <a href="#" className="card-link text-decoration-none ms-3 text-danger" type="button"
                                data-bs-toggle="modal" data-bs-target="#exampleModal-3">Order Now</a>
                        </div>
                    </div>
                </div>

                <div className="col-4 container-fluid responsive-cards responsive-cards-1">
                    <div className="card mt-3 pb-3">
                        <img src="./images/French-Fries.jpg" className="card-img-top object-fit-cover responsive-img" id="img-1" alt="..."/>
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