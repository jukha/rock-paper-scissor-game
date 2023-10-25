import { useState } from "react";

function Rules() {
  const [showModal, setShowModal] = useState(false);
  function openModal() {
    setShowModal(true);
  }
  function closeModal() {
    setShowModal(false);
  }
  return (
    <>
      <a className="flex justify-end" onClick={openModal}>
        <button className="uppercase font-semibold py-2 px-8 text-white border border-white rounded-md">
          Rules
        </button>
      </a>
      {showModal && (
        <section className="fixed inset-0 z-10 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md">
            <div className="flex justify-between items-center mb-7">
              <h3 className="uppercase text-dark text-2xl font-bold">Rules</h3>
              <button onClick={closeModal}>
                <img src="/assets/icon-close.svg" />
              </button>
            </div>
            <img
              src="/assets/image-rules.svg"
              alt="image explaining game rules"
            />
          </div>
        </section>
      )}
    </>
  );
}

export default Rules;
