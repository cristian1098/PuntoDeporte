import React from 'react';
import './ItemListContainer.css'

const ItemListContainer = (props) => {
    const {titulo}=props
  return (
    <div className="ItemListContainer"><h1 className="ItemListContainer-title">{titulo}</h1></div>
  )
}

export default ItemListContainer