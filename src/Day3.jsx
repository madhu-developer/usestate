import React,{useState,useEffect} from 'react'

const url = "https://jsonplaceholde.typicode.com/users";

export const FetchAPI = ()=>{
    const [usersData,setUsersData] = useState([]);
    const [loading,setLoading] = useState(false);
    const [isError,setIsError] = useState({status:false,msg:""});

    const fetchUsersData = async(apiURL)=>{
        setLoading(true);
        setIsError({status:false, msg:""})
        try{
            const response = await fetch(apiURL);
        const data = await response.json();
        setUsersData(data);
        setLoading(false);
        setIsError({status: false, msg:""});
        if (response.status === 404) {
            throw new Error("data not found");
          }
        }
        catch(error){
            setLoading(false);
            setIsError({
                status:true,msg:error.message || "Something went wrong"
            });
        }
    }

    useEffect(()=>{
        fetchUsersData(url)
    },[]);

    if (loading){
        return(
            <h3>Loading....</h3>
        )
    }
     
    if (isError?.status) {
        return (
          <div>
          <h3 style={{ color: "red" }}>{isError?.msg}</h3>
          </div>
        );
      }
    

    return(
        <div>
         <h1>Fetching Data</h1>
         <ul>
            {usersData.map((eachUser)=>{
                const {id, email} = eachUser;
                return(
                    <li key={id}>
                        <p>{email}</p>
                    </li>
                )
            })}
         </ul>
        </div>
    )
}

export const Resize = ()=>{
    const [pageWidth,setPageWidth] = useState(window.innerWidth);
    useEffect(()=>{
    const resizeHandler = window.addEventListener("resize",()=>{
        setPageWidth(window.innerWidth)
       })
       return()=>{
        console.log(resizeHandler)
        console.log("removing the window event");
        window.removeEventListener("resize", resizeHandler);
       }
    })

    return(
        <div>
            <h1>{pageWidth}</h1>
        </div>
    )
}

export const Day3 = () => {
    const [todo,setTodo] = useState("");
    const [todoList,setTodoList] = useState([]);

    const addTodoItem = (e)=>{
        e.preventDefault();
        let newTodo = {
            text:todo.text,
            id:new Date().getTime().toString()
        }
        setTodoList([...todoList,newTodo]);
        setTodo({
            text: "",
            id: "",
          });      
    }

    const deleteTodoItem = (id) =>{
        const newTodoList = todoList.filter((eachObj)=>{
            return eachObj.id !== id
        })
        setTodoList(newTodoList);
    }

  return (
    <div>
        <center>
        <input type="text" placeholder="Add Todo here" onChange={(e)=>setTodo({...todo,text:e.target.value})} value={todo.text}/>
        <button type="button" onClick={addTodoItem}>Add</button>
        <hr/>
        {todoList.length===0 && <h4>There are no todos in the list</h4>}
        <ul>
        {todoList.map((eachItem) => {
            const { text, id } = eachItem;
            return (
              <li key={id}>
                <h3>{text}</h3>
                <button>Edit</button>
                <button onClick={() => deleteTodoItem(id)}>Delete</button>
              </li>
            );
          })}
        </ul>
        </center>
    </div>
  )
}
