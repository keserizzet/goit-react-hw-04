import React from "react";
import Modal from "react-modal";
import styles from "./ImageModal.module.css";

Modal.setAppElement("#root");

function ImageModal({ image, onClose }) {
  return (
    <Modal isOpen={!!image} onRequestClose={onClose} className={styles.modal} overlayClassName={styles.overlay}>
      <button onClick={onClose}>&times;</button>
      <img src={image.urls.regular} alt={image.alt_description} />
    </Modal>
  );
}

export default ImageModal;