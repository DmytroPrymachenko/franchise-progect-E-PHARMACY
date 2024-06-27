import "./Backdrop.Styled.css";

const Backdrop = ({ closeModal, isOpen }) => {
  return (
    <div className={`backdrop ${isOpen ? "open" : ""}`} onClick={closeModal} />
  );
};

export default Backdrop;
