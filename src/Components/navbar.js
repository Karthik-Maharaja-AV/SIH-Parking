import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar  w-full max-w-screen-xl rounded-3xl m-5 h-20 mx-auto flex flex-row p-3 md:px-20 justify-between bg-gray-200 shadow-2xl text-black glass">
      <a className="normal-case text-xl font-bold">
        <span className="text-4xl font-bold text-blue-500">P</span>arking
      </a>
      <Link to="/">
        <a className="text-2xl font-bold hover:underline hover:underline-offset-4 hover:text-blue-500 hover:decoration-blue-500">Home</a>
      </Link>
    </div>
  );
}
