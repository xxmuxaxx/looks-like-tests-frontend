import { Link } from "react-router-dom";

import "./Logo.scss";

const Logo = () => {
  return (
    <Link to="/" className="logo">
      <span>LL</span>
      <span>TESTS</span>
    </Link>
  );
};

export default Logo;
