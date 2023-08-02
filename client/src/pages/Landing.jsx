import { Link } from "react-router-dom";
import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby marfa mumblecore fanny pack austin before they sold out
            vape fingerstache. Sartorial twee polaroid quinoa. Butcher next
            level subway tile knausgaard humblebrag raclette normcore. Iceland
            hell of pug polaroid gentrify yes plz vibecession pinterest air
            plant tilde. Selvage hella four dollar toast, authentic man braid
            disrupt williamsburg franzen fanny pack put a bird on it pork belly
            roof party. Authentic YOLO banjo ethical seitan kitsch occupy.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img"></img>
      </div>
    </Wrapper>
  );
};

export default Landing;
