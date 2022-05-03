import React from 'react';
import ItemCount from './ItemCount';
import './ItemListContainer.css'

const ItemListContainer = (props) => {
    const {titulo}=props
  return (
    <div className="ItemListContainer"><h1 className="ItemListContainer-title">{titulo}</h1>
    <ItemCount initial={0} stock={5} onAdd />
    </div>
  )
}

export default ItemListContainer