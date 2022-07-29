import React from 'react';
import Card from 'react-bootstrap/Card'

const AdminRestaurant = ({robj}) => {
    return ( 
        <>
        
        <div className="mx-auto w-50 m-2">
        <Card>
        <Card.Header>{robj.restaurantName}</Card.Header>
        <Card.Body>
            <Card.Title>Restaurant number {robj.restaurantId}</Card.Title>
            <Card.Text>
                {robj.restaurantAddress}
            </Card.Text>
           
        </Card.Body>
        </Card>
        </div>
        </>
     );
}
 
export default AdminRestaurant;