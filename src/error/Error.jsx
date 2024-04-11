import { Link } from "react-router-dom";
export default function Error() {
  return (
    <div className="text-darkBlue">
      Error- There is nothing here!! Return to Home <Link to="/">Home</Link>
    </div>
  );
}
