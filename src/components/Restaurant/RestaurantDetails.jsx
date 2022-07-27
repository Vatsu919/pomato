import React,{useEffect,useState} from 'react';
import {useParams} from 'react-router';
import { getItems } from '../../actions/itemActions.js';
import {useDispatch,useSelector} from 'react-redux';
import Item from '../Item/Item.jsx';
import MyNavbar from '../Navbar/MyNavbar.jsx';
import filterItems from '../../helper/index.js';



const RestaurantDetails = () => {
    const {restaurantId} = useParams();
    const dispatch = useDispatch();
    const items = useSelector(state => state.items);

    const [filter,setFilter] = useState("none");
    const newItems = filterItems(items,filter);

    console.log(items);

    useEffect(() => {
        dispatch(getItems(restaurantId));
    }, []);
    console.log(restaurantId);
    return ( 
    <>
        <MyNavbar />
        
        <div className="container w-50 mt-5">
            <div class="btn-group mb-2" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-success" onClick={() => setFilter("veg")} >Veg</button>
                <button type="button" className="btn btn-danger" onClick={() => setFilter("Non-veg")} >Non Veg</button>
                <button type="button" className="btn btn-primary" onClick={() => setFilter("none")} >Both</button>
            </div>  
            {(newItems.length===0)?"Loading":newItems.map(item => <div><Item item={item} /></div> )}
        </div>
    </> );
}
 
export default RestaurantDetails;