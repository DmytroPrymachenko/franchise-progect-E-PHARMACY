import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoMobale from "../../images/svg/logo/LogoMobale";
import BurgerMobaleSVG from "../../images/svg/burger/BurgerMobaleSVG";
import "./Header.Styled.css";
import MobaleBurger from "../Modal/MobaleBurger/MobaleBurger";

const Header = () => {
  const [isMobaleBurger, setIsMobaleBurger] = useState(false);

  const handleBurgerOpen = () => {
    setIsMobaleBurger(!isMobaleBurger);
  };

  const closeModal = () => {
    setIsMobaleBurger(false);
  };

  const user = true;

  return (
    <>
      {setIsMobaleBurger && (
        <MobaleBurger closeModal={closeModal} isOpen={isMobaleBurger} />
      )}

      <div className="header">
        <Link
          className="header__logo visible-increase"
          to="/"
          aria-label="Home"
        >
          <LogoMobale />
          <span className="header__logo-text">E-Pharmacy</span>
        </Link>

        {user && (
          <button
            className="header__burger visible-increase"
            onClick={handleBurgerOpen}
          >
            <BurgerMobaleSVG />
          </button>
        )}
      </div>
    </>
  );
};

export default Header;
