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
      <a
        className="fixed bottom-[50px] left-1/2 flex -translate-x-1/2 transform justify-center pt-10 md:static md:left-[unset] md:translate-x-0 md:justify-end"
        onClick={toggleModal}
      >
        <button className="rounded-md border border-white px-8 py-2 font-semibold uppercase text-white">
          Rules
        </button>
      </a>
      {showModal && (
        <section className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-50">
          <div className="flex h-full w-full flex-col items-center gap-20 rounded-none  bg-white p-6 md:block md:h-auto md:w-auto md:rounded-md">
            <div className="flex items-center justify-between md:mb-7">
              <h3 className="mt-7 text-2xl font-bold uppercase text-dark md:mt-0">
                Rules
              </h3>
              <button className="hidden md:block" onClick={toggleModal}>
                <img src="./assets/icon-close.svg" />
              </button>
            </div>
            <img
              src="./assets/image-rules.svg"
              alt="image explaining game rules"
            />
            <button
              className="absolute bottom-[50px] md:hidden"
              onClick={toggleModal}
            >
              <img src="./assets/icon-close.svg" />
            </button>
          </div>
        </section>
      )}
    </>
  );
}

export default Rules;
