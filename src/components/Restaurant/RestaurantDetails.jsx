import React,{useEffect,useState} from 'react';
import {useParams} from 'react-router';
import { addItem, getItems, updateItem } from '../../actions/itemActions.js';
import {useDispatch,useSelector} from 'react-redux';
import Item from '../Item/Item.jsx';
import MyNavbar from '../Navbar/MyNavbar.jsx';
import filterItems from '../../helper/index.js';
import { Form } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';



const RestaurantDetails = () => {
    const {restaurantId} = useParams();
    const dispatch = useDispatch();
    const items = useSelector(state => state.items);
    const user = useSelector(state => state.user);
    const userId = user?.authData?.userId;
    const [filter,setFilter] = useState("none");
    let newItems = filterItems(items,filter);
    const selectedItem = useSelector(state => state.selectedItem);
    

    const [formData,setFormData] = useState({
        name: '',
        price: 0,
        cuisineType: '',
        description: '',
        userId: userId
    });
    console.log(items);
    console.log(selectedItem);
    // if(selectedItem)
    // {
    //     console.log(selectedItem);
    //     setFormData({
    //         ...formData,
    //         name: selectedItem.name,
    //         price: selectedItem.price,
    //         cuisineType: selectedItem.cuisineType,
    //         description: selectedItem.description
    //     })
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        if(selectedItem)
        {
            dispatch(updateItem(restaurantId,selectedItem.itemId,formData));
        }
        else
        {
            dispatch(addItem(restaurantId,formData));
        }
        setFormData({
            name: '',
            price: 0,
            cuisineType: '',
            description: '',
            userId: userId
        })
    }


    useEffect(() => {
        setFormData({...formData,userId:userId});
        if(selectedItem)
        {
            setFormData({
                ...formData,
                name: selectedItem.name,
                price: selectedItem.price,
                cuisineType: selectedItem.cuisineType,
                description: selectedItem.description
            })
        }
        dispatch(getItems(restaurantId));
        
    }, [restaurantId,selectedItem]);
    console.log(restaurantId);
    return ( 
    <>
        <MyNavbar />
        <div class="row justify-content-evenly">
        <div className="col-6 mt-5">
            <div class="btn-group mb-2" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-success" onClick={() => setFilter("veg")} >Veg</button>
                <button type="button" className="btn btn-danger" onClick={() => setFilter("nonveg")} >Non Veg</button>
                <button type="button" className="btn btn-primary" onClick={() => setFilter("none")} >Both</button>
            </div>  
            {(newItems.length===0)?"Loading":newItems.map(item => <div><Item item={item} /></div> )}
        </div>
        {(user?.authData?.role==="manager") && 
            <div className="col-3 mt-5">
                <h1>{(selectedItem)?"Update item":"Add item" }</h1>
                <Form>
                    <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
                        <Form.Control type="text" name="name" value={formData.name} placeholder="Enter Item Name"  onChange={(e) => setFormData({...formData,name:e.target.value})} required />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="Cuisine Type" className="mb-3">
                        <Form.Control type="text" name="cuisineType" value={formData.cuisineType} placeholder="Enter Cuisine Type"  onChange={(e) => setFormData({...formData,cuisineType:e.target.value})} required />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="Description" className="mb-3">
                    <Form.Control as="textarea" name="description" value={formData.description} placeholder="Enter Description"  onChange={(e) => setFormData({...formData,description:e.target.value})} required />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="Price" className="mb-3">
                    <Form.Control type="number" name="price" value={formData.price} placeholder="Enter Price"  onChange={(e) => setFormData({...formData,price:e.target.value})} required />
                    </FloatingLabel>
                    <button className='btn btn-success' onClick={handleSubmit}>{(selectedItem)?"Update item":"Add item"}</button>
                </Form>
            </div>}
        </div>
    </> );
}
 
export default RestaurantDetails;