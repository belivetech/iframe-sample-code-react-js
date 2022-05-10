import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="container d-flex flex-column text-center pt-4">
      About page
      <Link to="/" className="btn btn-primary mt-2">
        Go back home
      </Link>
    </div>
  );
}
