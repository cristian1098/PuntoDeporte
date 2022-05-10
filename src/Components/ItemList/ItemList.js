import Item from "../Item/Item"
import './ItemList.css'


function ItemList({productos}) {
  return (
    <div className="item-list">
        {productos.map(item => <Item key={item.id} name={item.name} description={item.description} price={item.price} img={item.img} stock={item.stock}/>)}
    </div>
  )
}

export default ItemList