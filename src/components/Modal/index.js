import React, { useEffect } from "react";
import { MOVIE_DB_CONFIG } from "../../locales";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import "./styles/index.css";

const Modal = ({ handleClose, show, modalMovie }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  console.log(modalMovie);
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      handleClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  });

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <img
          className="modal-image"
          alt="movie-poster"
          src={`${MOVIE_DB_CONFIG.images.base_url}${MOVIE_DB_CONFIG.images.poster_sizes[6]}${modalMovie.poster_path}`}
        />
        <div className="modal-body">
          <h1>{modalMovie.title}</h1>
          <p>{modalMovie.overview}</p>
        </div>
      </section>
      <FontAwesomeIcon
        onClick={handleClose}
        icon={faCircleXmark}
        style={{
          position: "fixed",
          top: "27%",
          right: "22%",
          color: "white",
          fontSize: "3rem",
        }}
      />
    </div>
  );
};

export default Modal;
