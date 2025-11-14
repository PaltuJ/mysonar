import { Link } from "react-router-dom";
import { cirtificateData } from "./../data/UspData";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";

const Cirtificate = () => {
  const [openCirtificateModal, setOpenCirtificateModal] = useState(false);
  const [activeCirtificate, setActiveCirtificate] = useState(null);

  const handleOpenModal = (cirtificate) => {
    setOpenCirtificateModal(true);
    setActiveCirtificate(cirtificate);
  };

  const handleCloseModal = () => {
    setOpenCirtificateModal(false);
    setActiveCirtificate(null);
  };

  return (
    <section className="recognise_cirtificate py-5 my-5">
      <div className="container">
        <h5 className="mb-2 sub_heading fw-bold text-center text-white">
          Recognised
        </h5>
        <h2 className="mb-2 main_heading fw-bold text-center mb-5 text-white">
          Industry We are Recognized By
        </h2>
        <div className="row justify-content-center g-4">
          {cirtificateData?.map((cirtificate) => (
            <div className="col-6 col-sm-4 col-lg-3" key={cirtificate.id}>
              <div
                className="cirtificate_wrapper"
                onClick={() => handleOpenModal(cirtificate)}
                style={{ cursor: "pointer" }}
              >
                <figure className="cirtificate_card m-0">
                  <img src={cirtificate.image} alt={cirtificate.title || ""} />
                </figure>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Modal show={openCirtificateModal} onHide={handleCloseModal} centered>
        <Modal.Body className="p-0 text-center position-relative">
          <button
            onClick={handleCloseModal}
            className="position-absolute cirtificate_close"
          >
            <AiOutlineClose />
          </button>
          {activeCirtificate && (
            <>
              <img
                src={activeCirtificate.image}
                alt={activeCirtificate.title || ""}
                className="img-fluid"
              />
              {/* Optional caption text below image */}
              {activeCirtificate.text && (
                <p className="mt-2 fw-semibold cirtificate_modal_text">
                  {activeCirtificate.text}
                </p>
              )}
            </>
          )}
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default Cirtificate;
