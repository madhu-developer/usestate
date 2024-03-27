import React from 'react'
import {Data} from './Data'
console.log(Data);

export const Day2 = () =>{
    const clickHandle = (e, firstName) =>{
        console.log("Hey",e,firstName)
    }

    return(
        <div>
            <button onClick={function(e){
                return clickHandle(e,"Madhu!")
            }}>Click here!</button>
        </div>
    )
}



// import Data from './Data'
// import { ListItem } from './ListItem'
// //console.log(Data);

// export const Day2 = () => {
//   return (
//     <section style={{padding:"10px",backgroundColor:"#856A5D", color:"grey",flexWrap:"wrap",width:"100vw"}}>
//     <ul style={{listStyleType:"none"}}> 
//     {Data.map((eachObj)=>{
//         const {title,body,id} = eachObj;
//         return(
//            <ListItem key={id} id={id} title={title} body={body}/> 
//         )
//        })} 
//        </ul>  
//     </section>
//   )
// }


