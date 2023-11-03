import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {useGlobalContext} from '../context/index'
import { Error } from '.'

const SingleProd = () =>{
  const {list, removeItem} = useGlobalContext();
  const {productID} = useParams();
  const product = list.find((item) => item.id === productID) || '';
  const {image, name, id} = product;
  const navigate = useNavigate();

  const deleteHandler =(id) => {
    removeItem(id);
    navigate('/products');
  }
  if(product){
  return (<>
  <div className="inPageCenter">
  <article key={id}>
    <img src={image} alt={name} />
    <h2>{name}</h2>

    <button 
    onClick={() => {
      deleteHandler(productID);
    }} className='removeItem'>
    not interested
    </button>
  </article>
  </div>
  </>)}
  return <Error/>
}

export default SingleProd

//useNavigate serve para redirecionar o user para uma pagina depois de certa ação