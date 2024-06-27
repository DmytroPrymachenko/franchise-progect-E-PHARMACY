import { Link } from "react-router-dom";
import Backdrop from "../../Backdrop/Backdrop";
import "./MobaleBurger.Styled.css";
import ExitSVG from "../../../images/svg/Exit/ExitSVG";

const MobaleBurger = ({ isOpen, closeModal }) => {
  return (
    <>
      <Backdrop closeModal={closeModal} isOpen={isOpen} />
      <div className={`modal-wrapper ${isOpen ? "open" : ""}`}>
        <>
          <div className="burger ">
            <div className="burger visible-increase">
              <Link className="burger__link first-adapter visible-increase">
                Home
              </Link>
              <Link className="burger__link second-adapter visible-increase">
                Medicine store
              </Link>
              <Link className="burger__link visible-increase">Medicine</Link>
            </div>
            <button
              onClick={closeModal}
              className="modal__exit visible-increase"
            >
              <ExitSVG />
            </button>
          </div>
        </>
      </div>
    </>
  );
};
export default MobaleBurger;
