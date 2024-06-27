import { Link } from "react-router-dom";
import Backdrop from "../../Backdrop/Backdrop";
import "./MobaleBurger.Styled.css";

const MobaleBurger = ({ isOpen, closeModal }) => {
  return (
    <>
      <Backdrop closeModal={closeModal} isOpen={isOpen} />
      <div className={`modal-wrapper ${isOpen ? "open" : ""}`}>
        <>
          <div className="burger">
            <Link>Home</Link>
            <Link>Medicine store</Link>
            <Link>Medicine</Link>
          </div>
        </>
      </div>
    </>
  );
};
export default MobaleBurger;
