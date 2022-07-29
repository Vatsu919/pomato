import React from 'react';
import Card from 'react-bootstrap/Card';

const PaymentCard = ({pobj}) => {
    return ( 
        <Card className="m-2">
        <Card.Header>Payment Id: {pobj.paymentId}</Card.Header>
        <Card.Body>
            <Card.Text>Amount: {pobj.amount}</Card.Text>
            <Card.Text>
                OrderId: {pobj.orderId}
            </Card.Text>
            <Card.Text>
                RestaurantId: {pobj.restaurantId}
            </Card.Text>
            <Card.Text>
                Payment Method: {pobj.paymentMethod}
            </Card.Text>
        </Card.Body>
        </Card>
     );
}
 
export default PaymentCard;