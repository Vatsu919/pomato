import React from 'react';
import Badge from 'react-bootstrap/Badge'

const Item = ({item}) => {
    return ( 
        <div className="card mb-3" style={{maxWidth: '540px'}}>
        <div className="row g-0">
            <div className="col-md-4">
            <img src="https://resize.indiatvnews.com/en/resize/oldbucket/715_-/lifestylelifestyle/tempting-jalebi.jpg" className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <Badge bg={(item.cuisineType==='veg')?'success':'danger'}>{item.cuisineType}</Badge>
                <p className="card-text"><small>Price: {item.price}</small></p>
            </div>
            </div>
        </div>
        </div>
     );
}
 
export default Item;