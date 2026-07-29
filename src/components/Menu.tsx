export const Menu =() => {
  return (
    <section className="section-2 bg-body">
        <div className="mx-auto pt-5" id="regular-menu-1">
            <h2 className="fw-bold" id="regular-menu-header">Our <span className="text-danger">Regular</span> Menu</h2>
            <div className="h-50 d-flex justify-content-between align-items-center regular-menu-box">
                <p className="text-dark-emphasis">These Are Our Regular Menus. You Can <br/> Order Anything You Like.</p>
                <button type="button" className="btn btn-danger seeAll-btn">See All</button>
            </div>
        </div>


        <div className="row card-group mx-auto d-flex justify-content-center" id="regular-menu-cards-container">
            <div className="row col-12 w-100 regular-menu-cards-containers-1" id="menu-cards-container-1">
                <div className="col-3 position-relative card food-card">
                    <img src="./images/Chicken-pizza.jpg" className="card-img-top position-absolute top-0 inset-s-100 translate-middle image-items" alt="..."/>
                    <div className="card-body card-body-2 mt-4">
                        <h4 className="card-title fw-bold">Chicken Burgur</h4>
                        <div className="card-body d-flex justify-content-start mt-2 rate-container">
                            <img src="./images/five-star-ratings.png" className="img-fluid rate-img" alt="Noddle pic"/>
                            <h6 className="text-dark-emphasis ms-2 mt-2">(160)</h6>
                        </div>
                        <div className="card-body d-flex justify-content-between ps-1">
                            <h5 className="card-title mt-1">$3.50</h5>
                            <button className="btn btn-danger me-3 seeAll-btn card-link" type="button"
                                data-bs-toggle="modal" data-bs-target="#exampleModal-3">Buy Now</button>
                        </div>
                    </div>
                </div>

                <div className="col-3 card position-relative food-card">
                    <img src="./images/Chicken-burgur-2.jpg"
                        className="card-img-top position-absolute top-0 inset-s-100 translate-middle image-items" alt="..."/>
                    <div className="card-body card-body-2 mt-4">
                        <h4 className="card-title fw-bold">Chicken Pizza</h4>
                        <div className="card-body d-flex justify-content-start mt-2 rate-container">
                            <img src="./images/five-star-ratings.png" className="img-fluid rate-img" alt="Noddle pic"/>
                            <h6 className="text-dark-emphasis ms-2 mt-2">(142)</h6>
                        </div>
                        <div className="card-body d-flex justify-content-between ps-1">
                            <h5 className="card-title mt-1">$4.20</h5>
                            <button className="btn btn-danger me-3 seeAll-btn card-link" type="button"
                                data-bs-toggle="modal" data-bs-target="#exampleModal-3">Buy Now</button>
                        </div>
                    </div>

                </div>

                <div className="col-3 card position-relative food-card">
                    <img src="./images/Chicken-fry.jpg" className="card-img-top position-absolute top-0 inset-s-100 translate-middle image-items" alt="..."/>
                    <div className="card-body card-body-2 mt-4">
                        <h4 className="card-title fw-bold">Chicken Fry</h4>
                        <div className="card-body d-flex justify-content-start mt-2 rate-container">
                            <img src="./images/five-star-ratings.png" className="img-fluid rate-img" alt="Noddle pic"/>
                            <h6 className="text-dark-emphasis ms-2 mt-2">(123)</h6>
                        </div>
                        <div className="card-body d-flex justify-content-between ps-1">
                            <h5 className="card-title mt-1">$5.00</h5>
                            <button className="btn btn-danger me-3 seeAll-btn card-link" type="button"
                                data-bs-toggle="modal" data-bs-target="#exampleModal-3">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row col-12 w-100 regular-menu-cards-containers-1" id="menu-cards-container-2">
                <div className="col-3 card position-relative food-card">
                    <img src="./images/grill-sandwich.webp" className="card-img-top position-absolute top-0 inset-s-100 translate-middle image-items" alt="..."/>
                    <div className="card-body card-body-2 mt-4">
                        <h4 className="card-title fw-bold">Grill Sandwich</h4>
                        <div className="card-body d-flex justify-content-start mt-2 rate-container">
                            <img src="./images/five-star-ratings.png" className="img-fluid rate-img" alt="Noddle pic"/>
                            <h6 className="text-dark-emphasis ms-2 mt-2">(112)</h6>
                        </div>
                        <div className="card-body d-flex justify-content-between ps-1">
                            <h5 className="card-title mt-1">$4.80</h5>
                            <button className="btn btn-danger me-3 seeAll-btn card-link" type="button"
                                data-bs-toggle="modal" data-bs-target="#exampleModal-3">Buy Now</button>
                        </div>
                    </div>
                </div>

                <div className="col-3 card position-relative food-card">
                    <img src="./images/Tacoo-traifi.jpg" className="card-img-top position-absolute top-0 inset-s-100 translate-middle image-items" alt="..."/>
                    <div className="card-body card-body-2 mt-4">
                        <h4 className="card-title fw-bold">Tacco Traifi</h4>
                        <div className="card-body d-flex justify-content-start mt-2 rate-container">
                            <img src="./images/five-star-ratings.png" className="img-fluid rate-img" alt="Noddle pic"/>
                            <h6 className="text-dark-emphasis ms-2 mt-2">(152)</h6>
                        </div>
                        <div className="card-body d-flex justify-content-between ps-1">
                            <h5 className="card-title mt-1">$3.63</h5>
                            <button className="btn btn-danger me-3 seeAll-btn card-link" type="button"
                                data-bs-toggle="modal" data-bs-target="#exampleModal-3">Buy Now</button>
                        </div>
                    </div>
                </div>

                <div className="col-3 card position-relative food-card">
                    <img src="./images/Noddle-Ramen.jpeg"
                        className="card-img-top position-absolute top-0 inset-s-100 translate-middle image-items" alt="..."/>
                    <div className="card-body card-body-2 mt-4">
                        <h4 className="card-title fw-bold">Noddle's Ramen</h4>
                        <div className="card-body d-flex justify-content-start mt-2 rate-container">
                            <img src="./images/five-star-ratings.png" className="img-fluid rate-img" alt="Noddle pic"/>
                            <h6 className="text-dark-emphasis ms-2 mt-2">(163)</h6>
                        </div>
                        <div className="card-body d-flex justify-content-between ps-1">
                            <h5 className="card-title mt-1">$6.50</h5>
                            <button className="btn btn-danger me-3 seeAll-btn card-link" type="button"
                                data-bs-toggle="modal" data-bs-target="#exampleModal-3">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
