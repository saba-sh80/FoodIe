export const Footer = () => {
  return (
    <footer className="container-fluid mt-5">
        <div className="row main-footer-container">
            <div className="col-md-4 col-sm-6 lists mt-4" id="footer-list-1">
                <div className="first-column" id="first-column-1">
                    <h5 className="fw-bold text-danger">Fooodish</h5>
                    <p className="text-dark-emphasis">Continue Foodish 2023 all rights reserved</p>
                </div>
                <div className=" first-column" id="first-column-2">
                    <h5 className="fw-bold text-danger" id="follow-us">Follow Us On</h5>
                    <a href="#"><i className="bi bi-pinterest text-secondary"></i></a>
                    <a href="#"><i className="bi bi-instagram text-secondary"></i></a>
                    <a href="#"><i className="bi bi-twitter-x text-secondary"></i></a>
                    <a href="#"><i className="bi bi-facebook text-secondary"></i></a>
                </div>
            </div>

            <div className="col-md-2 col-sm-3 lists mt-4" id="footer-list-2">
                <h5 className="fw-bold ms-4 text-danger">Menu</h5>

                <ul>
                    <li className="list-items mb-1"><a href="#" className="text-decoration-none text-dark-emphasis">Home</a>
                    </li>
                    <li className="list-items mb-1"><a href="#" className="text-decoration-none text-dark-emphasis">Offers</a>
                    </li>
                    <li className="list-items mb-1"><a href="#" className="text-decoration-none text-dark-emphasis">Services</a>
                    </li>
                    <li className="list-items mb-1"><a href="#" className="text-decoration-none text-dark-emphasis">About Us</a>
                    </li>
                </ul>
            </div>

            <div className="col-md-3 col-sm-3 lists mt-4" id="footer-list-3">
                <h5 className="fw-bold text-center ms-2 text-danger">Information</h5>

                <ul className="text-center">
                    <li className="list-items mb-1 space-1"><a href="#"
                            className="text-decoration-none text-dark-emphasis">Home</a></li>
                    <li className="list-items mb-1 space-2"><a href="#"
                            className="text-decoration-none text-dark-emphasis">Quality</a></li>
                    <li className="list-items mb-1"><a href="#" className="text-decoration-none text-dark-emphasis">Make a
                            Choice</a></li>
                    <li className="list-items mb-1"><a href="#" className="text-decoration-none text-dark-emphasis">Salad with
                            Vegetable</a></li>
                    <li className="list-items mb-1"><a href="#" className="text-decoration-none text-dark-emphasis">Fast
                            Delivery</a></li>
                    <li className="list-items mb-1"><a href="#"
                            className="text-decoration-none text-dark-emphasis">Subscribe</a></li>
                </ul>
            </div>

            <div className="col-md-3 col-sm-4 lists mt-4" id="footer-list-4">
                <h5 className="fw-bold text-center text-danger">Contact</h5>

                <ul className="text-center">
                    <li className="list-items mb-2 overflow-texts"><a href="#"
                            className="text-decoration-none text-dark-emphasis">+123 456 789</a></li>
                    <li className="list-items mb-2"><a href="#" className="text-decoration-none text-dark-emphasis">Explore</a>
                    </li>
                    <li className="list-items mb-2"><a href="#"
                            className="text-decoration-none text-dark-emphasis">Info@Foodish.Com</a></li>
                    <li className="list-items mb-2 text-dark-emphasis">1245, New York, USA</li>
                </ul>
            </div>

        </div>
    </footer>
  );
};