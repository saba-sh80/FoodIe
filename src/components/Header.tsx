export const Header = () => {
  return (
    <header className="w-100 container-fluid">
      <nav className="col-12 navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand mx-5" href="#">
            FoodIe
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse ms-5"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Offer
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Menu
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Other options
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Services
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      About Us
                    </a>
                  </li>
                </ul>
              </li>
            </ul>

            {/* تغییر فرم دربرگیرنده به div برای جلوگیری از ارور Nested Form */}
            <div className="d-flex align-items-center">
              {/* Button trigger Login modal */}
              <button
                className="btn text-danger"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal-1"
                id="login-btn"
              >
                Login
              </button>

              {/* Button trigger Sign Up modal */}
              <button
                className="btn btn-outline-danger boarder rounded-pill mx-3"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal-2"
                id="signup-btn"
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* مودال‌های مربوط به Login و Sign up کلاً بیرون از Navbar منتقل شدند */}
      {/* Login Modal */}
      <div
        className="modal fade"
        id="exampleModal-1"
        tabIndex={-1}
        aria-labelledby="loginModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content bg-body">
            <div className="modal-header">
              <h1 className="modal-title fs-4" id="loginModalLabel">
                Login
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="login-username" className="col-form-label">
                    Username:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="login-username"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputPassword5" className="col-form-label">
                    Password:
                  </label>
                  <input
                    type="password"
                    id="inputPassword5"
                    className="form-control"
                    aria-describedby="passwordHelpBlock"
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-dark"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-danger">
                Enter
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sign Up Modal */}
      <div
        className="modal fade"
        id="exampleModal-2"
        tabIndex={-1}
        aria-labelledby="signupModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content bg-body">
            <div className="modal-header">
              <h1 className="modal-title fs-4" id="signupModalLabel">
                Sign Up
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="signup-username" className="col-form-label">
                    Enter Username:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="signup-username"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="signup-email" className="col-form-label">
                    Enter Your Email:
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="signup-email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="signup-password" className="col-form-label">
                    Enter Password:
                  </label>
                  <input
                    type="password"
                    id="signup-password"
                    className="form-control"
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-dark"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-danger">
                Create Account
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* قسمت دوم هدر سایت شامل عکس و دکمه سفارش */}
      <div className="row">
        <div className="col-12 col-sm-8" id="introduction-part-1">
          <div className="row mt-4" id="part-1">
            <div className="col-12">
              <h1 className="text-danger" id="head-1">
                All Fast Food is <br /> Available at FoodIe
              </h1>
            </div>
            <div className="col-8 d-flex justify-content-between mt-3">
              <img
                src="./images/man.jpg"
                className="img-fluid object-fit-cover me-3 header-pic"
                id="profile-pic"
                alt="profile-pic"
              />
              <h6 className="text-dark-emphasis" id="text">
                We Are Just A Click Away When You Crave For Delicious Fast Food
              </h6>
            </div>
            <div className="col-12 mt-4">
              <button
                className="btn btn-outline-danger boarder rounded-pill buy-btn me-3"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal-3"
              >
                Buy Now
              </button>

              {/* Buy Now Modal */}
              <div
                className="modal modal-lg fade"
                id="exampleModal-3"
                tabIndex={-1}
                aria-labelledby="buyModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content bg-body">
                    <div className="modal-header">
                      <h1 className="modal-title fs-4" id="buyModalLabel">
                        Order Food
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <form>
                        <div className="row mb-3">
                          <div className="col-6">
                            {/* استفاده از defaultValue به جای selected */}
                            <select
                              className="form-select"
                              id="choosen-food"
                              aria-label="Default select example"
                              defaultValue="Choose Your Favorite"
                            >
                              <option value="Choose Your Favorite">
                                Choose Your Favorite
                              </option>
                              <option>Chicken Burgur</option>
                              <option>Chicken Pizza</option>
                              <option>Chicken Fry</option>
                              <option>Grill Sandwich</option>
                              <option>Tacco Traifi</option>
                              <option>Noddle's Ramen</option>
                            </select>
                          </div>
                          <div className="col-6">
                            {/* استفاده از defaultValue به جای selected */}
                            <select
                              className="form-select"
                              aria-label="Default select example"
                              id="food-number"
                              defaultValue="Number"
                            >
                              <option value="Number">Number</option>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                              <option>6</option>
                              <option>7</option>
                              <option>8</option>
                              <option>9</option>
                              <option>10</option>
                            </select>
                          </div>

                          <div
                            className="col-12 ms-5 mt-3"
                            id="show-container"
                          >
                            <button
                              type="button"
                              className="btn btn-danger show-price-btn"
                            >
                              Show Price
                            </button>
                          </div>

                          <div className="col-12 border rounded price-container w-75 mt-3">
                            <p className="fs-4 mt-1 text-center">
                              Total Price : <span id="price"></span>
                            </p>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-dark"
                        data-bs-dismiss="modal"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger"
                        id="order"
                      >
                        Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <button
                className="btn btn-outline-danger boarder rounded-pill buy-btn"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal-4"
              >
                How To Order
              </button>

              {/* How to order Modal */}
              <div
                className="modal fade"
                id="exampleModal-4"
                tabIndex={-1}
                aria-labelledby="howToOrderLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="howToOrderLabel">
                        How To Order
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <p>
                        You should click on the{" "}
                        <span className="text-danger"> Buy Now</span> button
                        and order some food.
                      </p>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-danger"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-6 col-sm-4" id="introduction-part-2">
          <img
            src="./images/pizza-menu.webp"
            className="img-fluid w-75 h-75 ms-0 mt-5 object-fit-cover header-pic"
            alt="Ommelette pic"
          />
        </div>
      </div>
    </header>
  );
};