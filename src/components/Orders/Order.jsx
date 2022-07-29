import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Order = ({order}) => {
    console.log("Order is:",order);
    const items = JSON.parse(order.listOfItems)
    console.log("list of items:",items)
    let amount = 0;
    items.forEach(item => {
        amount += item.price*item.quantity;
    });
    return ( 
        <>
            <Card className="mb-2">
                <Card.Header as="h5">Order number: {order.orderId}</Card.Header>
                <Card.Body>
                    <Card.Text>Placed at: {order.timeStamp}</Card.Text>
                    <Card.Text>
                        {items.map(obj => <p className = "mb-0">{obj.name}, Quantity: {obj.quantity}, Price/item: {obj.price} </p>)}
                    </Card.Text>
                    <Card.Text>Total Price: {amount}</Card.Text>
                </Card.Body>
            </Card>
        </>
     );
}
 
export default Order;