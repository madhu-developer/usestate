import React,{useState} from 'react'
export const Hide = () =>{
    const [showData,setShowData] = useState(false);

    const onClickShowData = () =>{
        setShowData(!showData)
    }

    return(
        <div>
            <button onClick={onClickShowData}>{showData?"hide":"show"}</button>
            {showData && ("This is working":"Not")}
        </div>
    )
}

export const Day2Hooks = () => {
    const initialArr = [
        {
            id:1,
            course:"HTML"
        },
        {
            id:2,
            course:"CSS"
        },
        {
            id:3,
            course:"JS"
        }
    ]
    const [data,setData] = useState(initialArr);

    const deleteCourse = (id)=>{
        const filteredData = data.filter((eachItem)=>{
            return eachItem.id!==id
        })
        setData(filteredData);
    }

  return (
    <div>
    <ul>
        {data.map((eachObj)=>{
            const {id,course} = eachObj;
           return(
            <li key={id}>
            <h1>{course}</h1>
            <button type="button" onClick={()=>deleteCourse(id)}>Delete</button>
            </li>
           ) 
         } )}
    </ul>
    </div>
  )
}
