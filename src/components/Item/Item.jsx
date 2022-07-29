import React from 'react';
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, adjustQty, removeFromCart } from '../../actions/cartActions.js';
import { deleteItem } from '../../actions/itemActions.js';
import { SELECT_ITEM } from '../../constants/index.js';

const Item = ({item}) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const role = user?.authData?.role;
    const userId = user?.authData?.userId;

    const formData = {
        userId: userId
    }

    return ( 
        <div className="card mb-3" style={{maxWidth: '540px'}}>
        <div className="row g-0">
            <div className="col-md-4">
            <img src="https://resize.indiatvnews.com/en/resize/oldbucket/715_-/lifestylelifestyle/tempting-jalebi.jpg" className="img-fluid rounded-start h-100" alt="..." />
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text mb-1">{item.description}</p>
                <Badge bg={(item.cuisineType==='veg')?'success':'danger'}>{item.cuisineType}</Badge>
                <p className="card-text mb-0"><small>Price: {item.price}</small></p>
               
            </div>
            {(role==='manager')&&<Button className="btn-primary mx-2" onClick={() => dispatch({type:SELECT_ITEM,payload:item})}>Update Item</Button>}
            {(!item?.quantity)&&<Button className="float-end mb-2 me-2 btn-success" onClick={() => (role==='manager')?dispatch(deleteItem(item.restaurantId,item.itemId,formData)):dispatch(addToCart(item))}>{(role==='manager')?"Delete item":"Add to Cart"}</Button>}
            {(item?.quantity)&&(<div className="float-end m-2"><Button onClick={()=> item.quantity===1 ? dispatch(removeFromCart(item)):dispatch(adjustQty(item,item.quantity-1)) }>-</Button> {item.quantity} <Button onClick = {() => dispatch(adjustQty(item,item.quantity+1))}>+</Button></div>)}
            </div>
        </div>
        </div>
     );
}
 
export default Item;