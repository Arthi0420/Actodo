import { useState } from "react"

const TodoForm = (props) => {

    const activityArr = props.activityArr
    const setactivityArr = props.setactivityArr
    const [newact, setnewact] = useState("")
 
const handlechange =(event)=>
{
    setnewact(event.target.value)
}

const addActivity = ()=>
{
    setactivityArr([...activityArr,{id:activityArr.length+1, activity:newact}])
    setnewact("")
}

    return (

        <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-medium">Manage Activities</h1>
            <div>
                <input value={newact} onChange={handlechange} type="text" className="border border-black rounded bg-transparent p-1 " placeholder="Next Activity?"></input>
                <button onClick={addActivity} className=" bg-black text-white p-1 border border-black rounded" >Add</button>
            </div>
        </div>
    )
}

export default TodoForm