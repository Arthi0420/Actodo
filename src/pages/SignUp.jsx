import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const SignUp = (props) => {

    const navigate = useNavigate()
    const users = props.users
    const setusers = props.setusers

    const [eusername, setEuname] = useState()
    const [epassword, setEpassword] = useState()

    const handleUInput = (event) => {
        setEuname(event.target.value)
    }

    const handlePInput = (event) => {
        setEpassword(event.target.value)
    }

    const addUser = () => {
        setusers([...users, { username: eusername, password: epassword }])
        navigate("/")
    }

    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                <p>Sign up here :)</p>

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

                    <input
                        type="text"
                        className="w-52 border-black p-1 bg-transparent rounded-md"
                        placeholder="confirm password"></input>

                    <button onClick={addUser} className="bg-[#FCA201] w-24 p-1 rounded-md">SignUp</button>

                    <p>Already have an account?<Link to={"/"} className="underline">Login</Link></p>
                </div>


            </div>
        </div>
    )
}

export default SignUp