export const Footer = () => {
  return (
    <div className="w-full flex justify-center items-center bg-amber-100 py-5">
      <div className="w-[90%] h-full flex justify-between items-center">
        <div className="flex justify-between w-2/5">
          <div>
            <div className="flex flex-col">
              <h5 className="text-lg font-bold text-red-700">Fooodish</h5>
              <p className="text-gray-700">
                Continue Foodish 2023 all rights reserved.
              </p>
            </div>
            <div className="flex flex-col gap-y-2 mt-8">
              <h5 className="text-lg font-bold text-red-700">Follow Us On</h5>
              <div className="flex gap-x-3">
                <a href="#">
                  <img
                    className="w-5 h-5"
                    src="../../assets/icons/instagram.png"
                    alt="instagram"
                  />
                </a>
                <a href="#">
                  <img
                    className="w-5 h-5"
                    src="../../assets/icons/twitter.png"
                    alt="twitter"
                  />
                </a>
                <a href="#">
                  <img
                    className="w-5 h-5"
                    src="../../assets/icons/whats-app.png"
                    alt="whats app"
                  />
                </a>
                <a href="#">
                  <img
                    className="w-5 h-5"
                    src="../../assets/icons/facebook.png"
                    alt="facebook"
                  />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h5 className="text-lg font-bold text-red-700">Menu</h5>

            <ul className="flex flex-col gap-y-2 mt-2">
              <li className="">
                <a href="#" className="text-gray-700">
                  Home
                </a>
              </li>
              <li className="">
                <a href="#" className="text-gray-700">
                  Offers
                </a>
              </li>
              <li className="">
                <a href="#" className="text-gray-700">
                  Services
                </a>
              </li>
              <li className="">
                <a href="#" className="text-gray-700">
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-evenly items-start pt-12 w-1/2">
          <div>
            <h5 className="text-lg font-bold text-red-700">
              Information
            </h5>

            <ul className="flex flex-col gap-y-2 mt-2">
              <li className="">
                <a href="#" className="text-gray-700">
                  Home
                </a>
              </li>
              <li className="">
                <a href="#" className="text-gray-700">
                  Quality
                </a>
              </li>
              <li className="">
                <a href="#" className="text-gray-700">
                  Make a Choice
                </a>
              </li>
              <li className="">
                <a href="#" className="text-gray-700">
                  Salad with Vegetable
                </a>
              </li>
              <li className="">
                <a href="#" className="text-gray-700">
                  Fast Delivery
                </a>
              </li>
              <li className="">
                <a href="#" className="text-gray-700">
                  Subscribe
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-bold text-red-700">Contact</h5>

            <ul className="flex flex-col gap-y-2 mt-2">
              <li>
                <a href="#" className="text-gray-700">
                  +123 456 789
                </a>
              </li>
              <li className="list-none mb-2">
                <a href="#" className="text-gray-700">
                  Explore
                </a>
              </li>
              <li className="list-none mb-2">
                <a href="#" className="text-gray-700">
                  Info@Foodish.Com
                </a>
              </li>
              <li className="text-gray-700">
                1245, New York, USA
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
