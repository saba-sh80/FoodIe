export const Header = () => {
  return (
    <header className="w-full  h-[32rem] bg-amber-100">
      {/* Section 1 ==> Navbar */}
      <div className="h-[80px] flex justify-between items-center p-10">
        <div className="w-[700px] flex justify-between">
          <div className="w-28 h-10 flex justify-center items-center">
            <a href="#" className="text-3xl">
              FoodIe
            </a>
          </div>
          <div className="flex justify-center items-center">
            <ul className="flex flex-row justify-between items-center gap-x-6">
              <li className="text-zinc-600">
                <a href="#">Home</a>
              </li>
              <li className="text-zinc-600">
                <a href="#">Offer</a>
              </li>
              <li className="text-zinc-600">
                <a href="#">Menu</a>
              </li>
              <li className="text-zinc-600">
                <a href="#">Services</a>
              </li>
              <li className="text-zinc-600">
                <a href="#">Contact</a>
              </li>
              <li className="text-zinc-600">
                <a href="#">About Us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-48 flex gap-x-3">
          <button className="w-24 h-10 text-red-600 hover:bg-red-600 hover:text-white hover:rounded-3xl cursor-pointer transform">
            Login
          </button>
          <button className="w-24 h-10 border border-red-600 text-red-600  hover:bg-red-600 hover:text-white rounded-3xl bg-none cursor-pointer transform">
            Sign up
          </button>
        </div>
      </div>

      {/*Section 2 ==> Introduce and order buttons*/}
      <div className="w-full h-[22rem] flex justify-evenly items-center">
        <div className="w-[550px] flex flex-col gap-y-5">
          <div>
            <h1 className="text-red-700 text-[3.2em] font-semibold">
              All Fast Food is <br /> Available at FoodIe
            </h1>
          </div>
          <div className="flex gap-x-3 items-center">
            <img
              src="./images/man.jpg"
              className="object-cover me-3 rounded-lg w-[2.5em] h-[2.5em]"
              alt="profile-pic"
            />
            <h6 className="text-zinc-600">
              We Are Just A Click Away When You Crave For Delicious Fast Food
            </h6>
          </div>
          <div className="flex gap-x-3">
            <button className="w-24 h-10 border border-red-600 text-red-600 rounded-3xl bg-none cursor-pointer transform">
              Buy Now
            </button>

            <button className="w-32 h-10 border border-red-600 text-red-600 rounded-3xl bg-none cursor-pointer transform">
              How To Order
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <img
            src="./images/pizza-menu.webp"
            className="img-fluid w-80 h-50 ms-0 mt-5 object-cover rounded-md"
            alt="Ommelette pic"
          />
        </div>
      </div>

      <div className="w-[1013px] h-[150px] flex justify-between items-center gap-x-5 bg-white absolute inset-s-50 translate-y-[470px] shadow-2xl top-[-1.5rem] rounded-lg">
        <div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              className="bi bi-filter-square bg-yellow-400 rounded mt-[1em] ml-[1.25em]"
              viewBox="0 0 16 16"
            >
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
              <path d="M6 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
            </svg>
            <div className="mt-[-4.4em] ml-[4.4em]">
              <h5 className="">Fast delivery</h5>
              <p className="text-zinc-600 text-[0.8em]">
                The Food Will Be Deliverd To Your Home Within 1-2 Hours Of Your
                Ordering.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              className="bi bi-arrow-clockwise bg-yellow-400 rounded mt-[1em] ml-[1.25em]"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"
              />
              <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
            </svg>
            <div className="card-body mt-[-4.4em] ml-[4.4em]">
              <h5>Fresh Food</h5>
              <p className="text-zinc-600 text-[0.8em]">
                Your Food Will Be Deliverd 100% Fresh To Your Home. We Do Not
                Deliver Stale Food.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              className="bi bi-wallet bg-yellow-400 rounded mt-[1em] ml-[1.25em]"
              viewBox="0 0 16 16"
            >
              <path d="M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a2 2 0 0 1-1-.268M1 3a1 1 0 0 0 1 1h12V2H2a1 1 0 0 0-1 1" />
            </svg>
            <div className="mt-[-4.4em] ml-[4.4em]">
              <h5>Free Delivery</h5>
              <p className="text-zinc-600 text-[0.8em]">
                Your Food Delivery I Absolutely Free. No Cost Just Order And
                Enjoy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
