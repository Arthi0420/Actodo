import TodoForm from "./TodoForm"
import TodoList from "./TodoList"
import { useState } from "react"

const TodoContainer = () => {

    const [activityArr, setactivityArr] = useState([
        {
            id: 1,
            activity: "Go for a walk"
        },
        {
            id: 2,
            activity: "Have a breakfast"
        },
        {
            id: 3,
            activity: "Take a Shower"
        }
    ])

    return (
        <div>
            <div className="flex flex-wrap gap-5">
                <TodoForm activityArr={activityArr} setactivityArr={setactivityArr} />
                <TodoList activityArr={activityArr} setactivityArr={setactivityArr} />

            </div>
        </div>

    )
}

export default TodoContainer