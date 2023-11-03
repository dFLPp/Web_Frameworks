import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from '../context/index'

export default function Modal() {
  const {isModalOpen, closeModal} = useGlobalContext();
  return (
    <div className={`${isModalOpen && 'show-modal'} modal-overlay`}>
        <div className='modal-container'>
            <button className='close-modal' onClick={closeModal}><FaTimes/></button>
            <h3>Modal content</h3>
        </div>
    </div>
  )
}
