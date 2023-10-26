import { useEffect, useState } from "react";

function Rules() {
  const [showModal, setShowModal] = useState(false);
  function toggleModal() {
    setShowModal((state) => !state);
  }
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        toggleModal();
      }
    }

    if (showModal) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showModal]);
  return (
    <>
      <a className="flex justify-end" onClick={toggleModal}>
        <button className="rounded-md border border-white px-8 py-2 font-semibold uppercase text-white">
          Rules
        </button>
      </a>
      {showModal && (
        <section className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-50">
          <div className="rounded-md bg-white p-6">
            <div className="mb-7 flex items-center justify-between">
              <h3 className="text-2xl font-bold uppercase text-dark">Rules</h3>
              <button onClick={toggleModal}>
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
