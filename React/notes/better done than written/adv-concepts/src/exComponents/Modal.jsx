import React from 'react'

export default function Modal({content, closeModal}) {
  React.useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 3000)
  })
  return (
    <div
    style={{backgroundColor: 'black', padding:'.5em'}}
    ><h2>{content && content}</h2></div>
  )
}
