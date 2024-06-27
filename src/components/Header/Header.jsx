import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LogoMobale from "../../images/svg/logo/LogoMobale";
import BurgerMobaleSVG from "../../images/svg/burger/BurgerMobaleSVG";
import "./Header.Styled.css";
import MobaleBurger from "../Modal/MobaleBurger/MobaleBurger";

const Header = () => {
  const [isMobaleBurger, setIsMobaleBurger] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1440);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
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
        {isLargeScreen && (
          <div className="visible-increase">
            <Link className="header__Link visible-increase">Shop</Link>
            <Link className="header__Link visible-increase">Medicine</Link>
            <Link className="header__Link visible-increase">Statistics</Link>
          </div>
        )}

        {user && (
          <>
            {!isLargeScreen ? (
              <button
                className="header__burger visible-increase"
                onClick={handleBurgerOpen}
              >
                <BurgerMobaleSVG />
              </button>
            ) : (
              <button className="header__LogAut visible-increase">
                Log Aut
              </button>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Header;
