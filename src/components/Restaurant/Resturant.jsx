import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

const Restaurant = ({robj}) => {
    return ( 
        <Link className="text-decoration-none" to={"/restaurant/"+robj.restaurantId+"/details"}>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://static4.depositphotos.com/1015060/494/i/600/depositphotos_4947647-stock-photo-restaurant.jpg" />
            <Card.Body>
                <Card.Title>{robj.restaurantName}</Card.Title>
                <Card.Text>
                    Address: {robj.restaurantAddress}
                </Card.Text>
                
            </Card.Body>
         </Card>
         </Link>
     );
}
 
export default Restaurant;