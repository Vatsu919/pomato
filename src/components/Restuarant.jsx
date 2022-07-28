import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

function Restuarant(props)
{
    const data = props.restuarantList.map((restuarantname) => <section style={{ width: "25vw", height: "25vw" }} className=' bg-success border m-4 d-flex align-items-center justify-content-center '>{restuarantname}</section>);
    console.log(data);
    const [count, setCount] = useState({ prev: 0, next: 9 });
    // console.log(count);
     const [hasMore, setHasMore] = useState(true);
     const [current, setCurrent] = useState(data.slice(count.prev, count.next));
    //  console.log(current);
     const getMoreData = () => {
         if (current.length === data.length) {
           setHasMore(false);
           return;
         }
         setTimeout(() => {
             setCurrent(current.concat(data.slice(count.prev + 9, count.next + 9)))
         }, 1000)
           setCount((prevState) => ({ prev: prevState.prev + 9, next: prevState.next + 9 }))
     }
    console.log('fvr', count);
        
        return (
            <InfiniteScroll dataLength={current.length} next={getMoreData} hasMore={hasMore} >
                <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto', padding:"1vw"}}>
                    {current}
              </div>
            </InfiniteScroll>
          );
    
    
    
    
    
    
    
    
    
    // return (
    //     <>
    //     <div style={{display:'grid' , gridTemplateColumns:"auto auto auto",width:"20vw" , marginTop:'10vw',marginLeft:'35vw'}} className="conatiner " >
    //         {rests}
    //         </div>
    //         <div className='text-center'>
    //         <a style={{ border: '1px solid black ' , borderTopStyle:'none' , textDecoration:'none'}} href="" className='rounded' >v List more</a>
    //         </div>
    //     </>

    // );
}
export default Restuarant;