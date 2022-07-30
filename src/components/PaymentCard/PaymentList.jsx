import React, { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { getPayments } from '../../actions/paymentActions.js';
import Loading from '../Loading/Loading.jsx';

import AdminNavbar from '../Navbar/AdminNavbar';
import PaymentCard from './PaymentCard';


const PaymentList = () => {
    const dispatch = useDispatch();
    const payments = useSelector(state => state.payments);
    const user = useSelector(state => state.user);
    console.log(payments);
    useEffect(() => {
        dispatch(getPayments());
    },[user]);

    return ( 
        <>
        <AdminNavbar />
        <div className='container w-50'>
            {(payments.length>0)?payments.map(payment => <PaymentCard pobj={payment} />):<Loading />}
        </div>
        </>
     );
}
 
export default PaymentList;