import React from 'react'

export const ListItem = ({title, body, id})=>{
    return(
        <li key={id} style={{backgroundColor:"white", border:"none",borderRadius:"5px", padding:"8px",marginTop:"8px", boxShadow:"box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;"}}>
                <h1>{title}</h1>
                <p>{body}</p>
            </li>
    )
}


