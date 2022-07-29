import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

const Restaurant = ({robj}) => {
    return ( 
        <Link className="text-decoration-none" to={"/restaurant/"+robj.restaurantId+"/details"}>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" className="" style={{height:'250px',width:'285px'}} src={robj.restaurantImage} />
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