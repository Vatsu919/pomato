import React from 'react';
import { useSelector } from 'react-redux';
import { Alert } from 'react-bootstrap';

const ActionAlert = () => {
    const flash = useSelector(state=>state.flash);
    return ( 
        <>
            {flash.display?<Alert key='success' variant='success'>
            Order successfully placed!!!
        </Alert>:null}
      </>
     );
}
 
export default ActionAlert;