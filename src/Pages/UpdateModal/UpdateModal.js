import React from 'react';
import Modal from "react-modal";
// toast import
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const UpdateModal = ({ myreview, isReload, setIsReload }) => {
  const { _id, service, serviceName, price, customer, photoURL, email, review } = myreview;

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const customer = form.name.value;
    const email = form.email.value;
    const review = form.review.value;

    fetch(`https://assignment-11-server-green-chi.vercel.app/myreviews/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ customer, email, review }),
    })
      .then((res) => res.json())
      .then((data) => {

        if (data.modifiedCount > 0) {
          toast.success("Updated Successfully", {
            position: "top-center",
            autoClose: 2000,
          });
          setIsReload(!isReload)
        }
        form.reset();

      })

  }
  return (
    <div>
      <ToastContainer />
      <button onClick={openModal} className="btn btn-primary btn-sm">
        {" "}
        Update
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal} className="btn btn-primary btn-sm ml-3">
          close
        </button>
        <div className='p-3 '>Update Your Review</div>
        <div className=" p-3 color-4D4C7D">
          <form onSubmit={handleUpdate} className="container " >
            <div className="input-group mb-3 mt-5">
              <input
                type="text"
                className="form-control border rounded p-3 "
                placeholder="Your name"
                aria-label="Username"
                name='name'
                defaultValue={customer}
                readOnly
              />
            </div>
            <div className="input-group  mb-3 mt-5">
              <input
                type="text"
                className="form-control border rounded p-3"
                placeholder="Your Email"
                aria-label="Email"
                name='email'
                defaultValue={email}
                readOnly
              />
            </div>

            <div className="input-group ">
              <textarea
                className="form-control border rounded p-6"
                placeholder="Update Review"
                aria-label="With textarea"
                name='review'
              ></textarea>
            </div>
            <div className="mt-4">
              <input type="submit" value="Update" className="btn btn-primary" />
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default UpdateModal;