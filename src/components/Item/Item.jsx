import React from 'react';
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import { useDispatch } from 'react-redux';
import { addToCart, adjustQty, removeFromCart } from '../../actions/cartActions.js';

const Item = ({item}) => {
    const dispatch = useDispatch();
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
            
            {(!item?.qty)&&<Button className="float-end mb-2 me-2 btn-success" onClick={() => dispatch(addToCart(item))}>Add to Cart</Button>}
            {(item?.qty)&&(<div className="float-end m-2"><Button onClick={()=> item.qty===1 ? dispatch(removeFromCart(item)):dispatch(adjustQty(item,item.qty-1)) }>-</Button> {item.qty} <Button onClick = {() => dispatch(adjustQty(item,item.qty+1))}>+</Button></div>)}
            </div>
        </div>
        </div>
     );
}
 
export default Item;