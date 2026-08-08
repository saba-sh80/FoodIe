export const Menu =() => {
  return (
    <section className="h-[57em] bg-body">
        <div className="mx-auto pt-5 w-[80em] h-[10em]">
            <h2 className="fw-bold" id="regular-menu-header">Our <span className="text-danger">Regular</span> Menu</h2>
            <div className="h-50 d-flex justify-content-between align-items-center regular-menu-box">
                <p className="text-dark-emphasis">These Are Our Regular Menus. You Can <br/> Order Anything You Like.</p>
                <button type="button" className="btn bg-red-600 w-[6em] rounded-3xl">See All</button>
            </div>
        </div>


        <div className="row card-group mx-auto d-flex justify-content-center w-[80em] h-[43em] mt-[7em] ml-[2.8em]">
            <div className="row col-12 w-100 regular-menu-cards-containers-1" id="menu-cards-container-1">
                <div className="col-3 position-relative card h-[15.625em] border-none rounded-sm bg-amber-100 my-0 mx-[3erm]">
                    <img src="./images/Chicken-pizza.jpg" className="card-img-top position-absolute top-0 inset-s-100 translate-middle w-1/2 h-3/5 rounded-lg border-8 border-red-700 object-cover" alt="..."/>
                    <div className="card-body card-body-2 mt-4">
                        <h4 className="card-title fw-bold">Chicken Burgur</h4>
                        <div className="card-body d-flex justify-content-start mt-2 w-full h-[35%] py-[1em] px-0">
                            <img src="./images/five-star-ratings.png" className="img-fluid w-[50%] h-full bg-amber-100" alt="Noddle pic"/>
                            <h6 className="text-dark-emphasis ms-2 mt-2">(160)</h6>
                        </div>
                        <div className="card-body d-flex justify-content-between ps-1">
                            <h5 className="card-title mt-1">$3.50</h5>
                            <button className="btn bg-red-600 w-[6em] rounded-3xl me-3 card-link" type="button"
                                data-bs-toggle="modal" data-bs-target="#exampleModal-3">Buy Now</button>
                        </div>
                    </div>
                </div>

                <div className="col-3 card position-relative h-[15.625em] border-none rounded-sm bg-amber-100 my-0 mx-[3erm]">
                    <img src="./images/Chicken-burgur-2.jpg"
                        className="card-img-top position-absolute top-0 inset-s-100 translate-middle w-1/2 h-3/5 rounded-lg border-8 border-red-700 object-cover" alt="..."/>
                    <div className="card-body card-body-2 mt-4">
                        <h4 className="card-title fw-bold">Chicken Pizza</h4>
                        <div className="card-body d-flex justify-content-start mt-2 w-full h-[35%] py-[1em] px-0">
                            <img src="./images/five-star-ratings.png" className="img-fluid w-[50%] h-full bg-amber-100" alt="Noddle pic"/>
                            <h6 className="text-dark-emphasis ms-2 mt-2">(142)</h6>
                        </div>
                        <div className="card-body d-flex justify-content-between ps-1">
                            <h5 className="card-title mt-1">$4.20</h5>
                            <button className="btn bg-red-600 w-[6em] rounded-3xl me-3 card-link" type="button"
                                data-bs-toggle="modal" data-bs-target="#exampleModal-3">Buy Now</button>
                        </div>
                    </div>

                </div>

                <div className="col-3 card position-relative h-[15.625em] border-none rounded-sm bg-amber-100 my-0 mx-[3erm]">
                    <img src="./images/Chicken-fry.jpg" className="card-img-top position-absolute top-0 inset-s-100 translate-middle w-1/2 h-3/5 rounded-lg border-8 border-red-700 object-cover" alt="..."/>
                    <div className="card-body card-body-2 mt-4">
                        <h4 className="card-title fw-bold">Chicken Fry</h4>
                        <div className="card-body d-flex justify-content-start mt-2 w-full h-[35%] py-[1em] px-0">
                            <img src="./images/five-star-ratings.png" className="img-fluid w-[50%] h-full bg-amber-100" alt="Noddle pic"/>
                            <h6 className="text-dark-emphasis ms-2 mt-2">(123)</h6>
                        </div>
                        <div className="card-body d-flex justify-content-between ps-1">
                            <h5 className="card-title mt-1">$5.00</h5>
                            <button className="btn bg-red-600 w-[6em] rounded-3xl me-3 card-link" type="button"
                                data-bs-toggle="modal" data-bs-target="#exampleModal-3">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row col-12 w-100 regular-menu-cards-containers-1" id="menu-cards-container-2">
                <div className="col-3 card position-relative h-[15.625em] border-none rounded-sm bg-amber-100 my-0 mx-[3erm]">
                    <img src="./images/grill-sandwich.webp" className="card-img-top position-absolute top-0 inset-s-100 translate-middle w-1/2 h-3/5 rounded-lg border-8 border-red-700 object-cover" alt="..."/>
                    <div className="card-body card-body-2 mt-4">
                        <h4 className="card-title fw-bold">Grill Sandwich</h4>
                        <div className="card-body d-flex justify-content-start mt-2 w-full h-[35%] py-[1em] px-0">
                            <img src="./images/five-star-ratings.png" className="img-fluid w-[50%] h-full bg-amber-100" alt="Noddle pic"/>
                            <h6 className="text-dark-emphasis ms-2 mt-2">(112)</h6>
                        </div>
                        <div className="card-body d-flex justify-content-between ps-1">
                            <h5 className="card-title mt-1">$4.80</h5>
                            <button className="btn bg-red-600 w-[6em] rounded-3xl me-3 card-link" type="button"
                                data-bs-toggle="modal" data-bs-target="#exampleModal-3">Buy Now</button>
                        </div>
                    </div>
                </div>

                <div className="col-3 card position-relative h-[15.625em] border-none rounded-sm bg-amber-100 my-0 mx-[3erm]">
                    <img src="./images/Tacoo-traifi.jpg" className="card-img-top position-absolute top-0 inset-s-100 translate-middle w-1/2 h-3/5 rounded-lg border-8 border-red-700 object-cover" alt="..."/>
                    <div className="card-body card-body-2 mt-4">
                        <h4 className="card-title fw-bold">Tacco Traifi</h4>
                        <div className="card-body d-flex justify-content-start mt-2 w-full h-[35%] py-[1em] px-0">
                            <img src="./images/five-star-ratings.png" className="img-fluid w-[50%] h-full bg-amber-100" alt="Noddle pic"/>
                            <h6 className="text-dark-emphasis ms-2 mt-2">(152)</h6>
                        </div>
                        <div className="card-body d-flex justify-content-between ps-1">
                            <h5 className="card-title mt-1">$3.63</h5>
                            <button className="btn bg-red-600 w-[6em] rounded-3xl me-3 card-link" type="button"
                                data-bs-toggle="modal" data-bs-target="#exampleModal-3">Buy Now</button>
                        </div>
                    </div>
                </div>

                <div className="col-3 card position-relative h-[15.625em] border-none rounded-sm bg-amber-100 my-0 mx-[3erm]">
                    <img src="./images/Noddle-Ramen.jpeg"
                        className="card-img-top position-absolute top-0 inset-s-100 translate-middle w-1/2 h-3/5 rounded-lg border-8 border-red-700 object-cover" alt="..."/>
                    <div className="card-body card-body-2 mt-4">
                        <h4 className="card-title fw-bold">Noddle's Ramen</h4>
                        <div className="card-body d-flex justify-content-start mt-2 w-full h-[35%] py-[1em] px-0">
                            <img src="./images/five-star-ratings.png" className="img-fluid w-[50%] h-full bg-amber-100" alt="Noddle pic"/>
                            <h6 className="text-dark-emphasis ms-2 mt-2">(163)</h6>
                        </div>
                        <div className="card-body d-flex justify-content-between ps-1">
                            <h5 className="card-title mt-1">$6.50</h5>
                            <button className="btn bg-red-600 w-[6em] rounded-3xl me-3 card-link" type="button"
                                data-bs-toggle="modal" data-bs-target="#exampleModal-3">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
