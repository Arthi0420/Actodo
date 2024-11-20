import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const Login = (props) => {

    const navigate = useNavigate() 
    const [eusername, setEuname] = useState()
    const [epassword, setEpassword] = useState()
    const [ruser, setRuser] = useState(true)

    const users = props.users
    // const setusers = props.setusers

    const handleUInput = (event) => {
        setEuname(event.target.value)
    }

    const handlePInput = (event) => {
        setEpassword(event.target.value)
    }


    const checkUser = () => {
        var userfound = false

        users.forEach(function (item) {
            if (item.username === eusername && item.password === epassword) {
                userfound = true
                console.log("Success")
                navigate("/landing", {state:{ user:eusername}})
            }
        })

        if (userfound === false) {
            console.log("failed")
            setRuser(false)
        }

    }

    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                {ruser ? <p>I help you mange your activities after you login :)</p> : <p className="text-red-400">Please sign up Before you Login.</p>}

                <div className="flex flex-col gap-2 my-2">
                    <input
                        type="text"
                        className="w-52 border-black p-1 bg-transparent rounded-md"
                        placeholder="username"
                        onChange={handleUInput}></input>

                    <input
                        type="text"
                        className="w-52 border-black p-1 bg-transparent rounded-md"
                        placeholder="password"
                        onChange={handlePInput}></input>


                    <button onClick={checkUser} className="bg-[#8272DA] w-24 p-1 rounded-md">SignUp</button>

                    <p>Don't have an account?<Link to={"/signup"} className="underline">SignUp</Link></p>
                </div>


            </div>
        </div>

    )
}

export default Login