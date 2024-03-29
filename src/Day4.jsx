import React,{useEffect, useReducer} from 'react'


export const Day4ReducerEx2 = () =>{
    const reducer=(state,action)=>{
        if (action.type === "Update_usersInfo"){
            return{
                ...state,
                usersData:action.payload
            }
        }
        // if (action.type === "LOADING"){
        //     return(
        //         ...state,
        //         isLoading:action.payload
        //     )
        // }
        return state
    }

    const url= "https://jsonplaceholder.typicode.com/users";

    const fetchUsersData = async(url)=>{
        dispatch({ type:"LOADING", payload:true })
        dispatch({ type:"Error", payload:{status:false,msg:""} })
        
        try{
            const response = await fetch(url)
            const data = await response.json();
            //console.log(data);
            dispatch({ type:"Update_usersInfo", payload:data })
            dispatch({ type:"LOADING", payload:false })
            dispatch({ type:"Error", payload:{status:false,msg:""} })
        }
        catch(error){
            console.log(error);
            dispatch({ type:"LOADING", payload:false })
            dispatch({type:"Error", payload:{status:true,msg:error.message} })
        }
       
    }

    useEffect(()=>{
        fetchUsersData(url);
    },[])
    
    const initialState = {
        usersData: [],
        isLoading: false,
        isError: {status: false, msg:""}
    }

    const [state, dispatch] = useReducer(reducer, initialState)


    return(
        <center>
            <h3>Users Info</h3>
            {state.usersData.map((eachObj)=>{
                const{id,name,email} = eachObj
                return(
                    <div key={id} style={{backgroundColor:"lightgray",width:"200px",padding:"5px",margin:"5px",borderRadius:"8px"}}>
                    <h3>{name}</h3>
                    <p>{email}</p>
                    </div>
                )
            })}
        </center>
    )

}



export const Day4ReducerEx1 = () => {

    const reducer = (data,action)=>{
        if(action.type==="Delete_person"){
            const newData = data.details.filter((eachPerson)=>{
                return eachPerson.id !== action.payload
            });
            return{
                ...data,
                details: newData,
                length: data.length-1,
            }
        }
        return data;
    }

    const initialData = {
        details:[
        {
            id:1,
            name:"Madhuri",
            email:"madhu@gmail.com"
        },
        {
            id:2,
            name:"Keerthi",
            email:"kittu@gmail.com"
        },
        {
            id:3,
            name:"Mallika",
            email:"mallika@gmail.com"
        }
    ],
    length:3
}

  const [data, dispatch]=useReducer(reducer, initialData);

  const handleDelete = (id)=>{
    dispatch({
        type:"Delete_person",
        payload:id
    })
  }

  return (
    <div>
        <ul>
        {data.details.map((eachItem)=>{
            return(
                <li key={eachItem.id} style={{listStyleType:"none"}}>
                <h3>{eachItem.name}</h3>
                <p>{eachItem.email}</p>
                <button onClick={()=>handleDelete(eachItem.id)}>Delete</button>
                </li>
            )
        })}
        </ul>
    </div>
  )
}
