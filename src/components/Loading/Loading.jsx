import React from 'react';
import Pomato from '../pomato.png';
import Image from 'react-bootstrap/Image'


const Loading = () => {
    return ( <>
    <Image className="mt-5" style={{
                position:'absolute',
                top:'50px',
                left:'300px',
                height: '500px',
                width:'500px'
            }}
    src={Pomato} />
    </> );
}
 
export default Loading;