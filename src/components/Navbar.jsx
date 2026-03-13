import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Link
      to="/"
      className="font-bold text-xl cursor-pointer w-full bg-base-200 bg-opacity-90 shadow-md py-4 px-6 flex justify-between items-center fixed top-0 left-0 z-50"
    >
      🧠 IQ QUIZ{" "}
    </Link>
  );
}
