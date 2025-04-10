import React from 'react'
import '../styles/Modal.css'

interface Props {
  title: string
  content: string
  onClose: () => void
}

const Modal: React.FC<Props> = ({ title, content, onClose }) => (
  <div className="modal-overlay">
    <div className="modal-content">
      <h2>{title}</h2>
      <p>{content}</p>
      <button onClick={onClose}>Close</button>
    </div>
  </div>
)

export default Modal
