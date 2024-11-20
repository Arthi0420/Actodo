import Header from "../components/Header";
import Card from "../components/Card";
import TodoContainer from "../components/TodoContainer";
import { useLocation } from "react-router-dom";

const Landing = ()=>
{

    const data = useLocation()

    return(
        <div className="bg-black p-16">
        <div className="bg-[#EFEFEF] p-10 border rounded-md ">
  
          {/* Header */}
          <Header name={data.state.user}/>
          {/* Card Section */}
          <div className="flex justify-between flex-wrap my-5 gap-7">
            <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"} />
            <Card bgcolor={"#FD6663"} title={"December"} subtitle={"14:20:04"} />
            <Card bgcolor={"#FCA201"} title={"Built Using"} subtitle={"React"} />
          </div>
          {/* Todo Container */}
          <TodoContainer/>
  
        </div>
      </div>
  
    )
}

export default Landing