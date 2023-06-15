import { useState } from 'react';

export default function Button() {
    const [nbclick,setNbClick] = useState(0);
    
    function click(){
        setNbClick( nbclick + 1);
    }
    
    return(
        <>
          <button onClick={click}>
             Click Here
          </button>
          <br/>
          <b>Clicked {nbclick} times </b>
        </>
        
    );
}