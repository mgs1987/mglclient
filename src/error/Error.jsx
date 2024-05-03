import { Link } from "react-router-dom";
export default function Error() {
  return (
    <div className="text-darkBlue text-3xl flex justify-center p-20">
      <span className="text-red-400">ERROR!</span> Where you want to go ? There
      is nothing here!!
      <Link to="/"> - Lets go Home! - </Link>
    </div>
  );
}
