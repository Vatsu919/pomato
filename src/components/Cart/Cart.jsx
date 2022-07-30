import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Item from '../Item/Item';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button'
import { placeOrder } from '../../actions/orderActions.js';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const cart = useSelector(state=>state.cart);
    const user = useSelector(state=>state.user);
    const [totalAmount,setTotalAmount] = useState(0);
    const dispatch = useDispatch();
    const history = useNavigate();
    const [formData,setFormData] = useState({
        address: '',
        amount: 0,
        paymentMethod: 'cashondelivery',
        listOfItems: [],
        restaurantId: 0,
        userId: 0
    });
    // console.log(totalAmount);

   // console.log("User: ",user);
    useEffect(() => {
        let amt=0;
        cart.forEach(item => {
            amt += item.price*item.quantity;
        })
        setTotalAmount(amt);
        // console.log(totalAmount);
    },[cart,user])

   // console.log(cart);
    useEffect(()=>{
        if(cart.length) setFormData({...formData,amount:totalAmount,restaurantId:cart[0].restaurantId,userId:user.authData.userId,listOfItems: cart});
    },[cart,totalAmount]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting");
        // setFormData({...formData,amount:totalAmount,restaurantId:cart[0].restaurantId,userId:user.authData.userId,listOfItems: cart});
        // console.log(totalAmount);
        console.log(formData);
        dispatch(placeOrder(formData,history));
        
    }
    return ( 
        <div className='container w-50'>
            <span className='fs-1 mb-2'>Cart</span>
            {(cart.length===0)?<span className="fs-3 d-block mt-4">Cart is empty</span>: cart.map(item => <div><Item item={item} /> </div>)}
            {cart.length>0 && <span className="fs-3 m-2">Total Amount: {totalAmount}</span> }
            {(cart.length>0) && (
            <>
                <Form className="mb-5">
                    <FloatingLabel controlId="floatingInput" label="Add your Address here" className="mb-3">
                    <Form.Control as="textarea" value={formData.address} onChange={(e) => setFormData({...formData,address:e.target.value})} name="restaurantaddress" placeholder="Enter your Address" required />
                    </FloatingLabel>
                    <span className='m-2 fs-4'>Select payment method:</span>
                    <Form.Select aria-label="Payment method" value={formData.paymentMethod} onChange={(e) => setFormData({...formData,paymentMethod: e.target.value})}>
                        <option value="cashondelivery">Cash on Delivery</option>
                        <option value="card">Credit/Debit card</option>
                        <option value="upi">UPI</option>
                    </Form.Select>
                    <button className='btn btn-primary m-2' onClick={handleSubmit}>Place order</button>
                </Form>
            </>)}
        </div>

     );
}
 
export default Cart;