import React from 'react';
import { useSelector } from 'react-redux';
import { Alert } from 'react-bootstrap';

const ActionAlert = () => {
    const flash = useSelector(state=>state.flash);
    return ( 
        <>
            {flash.display?<Alert style={{
                position:'absolute',
                top:'0px',
                left:'0px',
                width:'100%',
                zIndex:100
}} key={flash.type} variant={flash.type}>
            {flash.message}
        </Alert>:null}
      </>
     );
}
 
export default ActionAlert;