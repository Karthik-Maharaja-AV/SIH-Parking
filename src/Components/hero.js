import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <main className="h-screen ">
      <div className="flex gap-24 h-full items-center justify-center">
        <div className="">
          <img src="./madcar1.png" alt="CAR" />
        </div>
        <div>
          <h1 className="text-4xl text-black">
            The{" "}
            <i>
              <span className="font-bold text-blue-500 text-5xl ">
                Urbanization
              </span>{" "}
            </i>{" "}
            is yet to be complete
          </h1>
          <br />
          <h1 className="text-4xl">Come Book your Parking Slots</h1>
          <br />
          <Link to="/city">
            <button className="btn border-none hover:bg-blue-800 text-white font-bold normal-case bg-blue-500">
              See for Slots <BsFillArrowRightCircleFill />
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
