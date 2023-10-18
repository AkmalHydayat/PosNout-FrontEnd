/* eslint-disable react/prop-types */
import { faCamera, faUser, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PopUpModalUser = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
    console.log(e.target);
  };
  return (
    <div
      className="fixed inset-0 flex items-center justify-center font-titilium bg-black bg-opacity-25 backdrop-blur-sm shadow-cus"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="w-[500px] relative text-lg font-semibold">
        <button
          className="text-white absolute z-20 -end-2 -top-2 bg-secondary px-2 rounded-lg"
          onClick={() => onClose()}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <div className="bg-thrd rounded-2xl text-center">
          <div className="relative  py-10 rounded-t-2xl">
            <FontAwesomeIcon
              icon={faUser}
              className={`text-8xl text-primary  rounded-full py-9 px-10 border-2 border-secondary `}
            />
            <button>
              <FontAwesomeIcon
                icon={faCamera}
                className="absolute bottom-12 left-72 text-xl bg-secondary p-2 rounded-full text-primary"
              />
            </button>
          </div>
          <div className={`bg-white rounded-b-2xl rounded-t-3xl py-5`}>
            <h1
              className={`text-secondary text-2xl font-acme font-semibold mb-3`}
            >
              Akmal Hydayat
            </h1>
            <div className="font-normal text-sm px-10 text-justify mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              officiis dignissimos incidunt aliquid sunt vitae beatae. Possimus
              cupiditate ullam itaque nisi, dolore consequuntur ducimus commodi
              perferendis, eligendi facilis aliquam vitae dicta.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpModalUser;
