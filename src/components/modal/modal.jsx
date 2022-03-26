import "./modal.scss";
import "../generic/buttons/buttons";
import Form from "../form/form";

const Modal = ({ modal, setModal }) => {
  return (
    <div
      className={modal ? "modal" : "modal hide"}
      onClick={() => setModal(false)}>
      <div className="modal__dialog">
        <div className="modal__content" onClick={(e) => e.stopPropagation()}>
          <Form setModal={setModal} modal={modal}></Form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
