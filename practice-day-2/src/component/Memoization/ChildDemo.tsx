import { useCallback, useState } from "react"
import Child from "./Child";


const ChildDemo = () => {
  const [count,setCount] = useState<number>(0);

  const handleClick = useCallback(()=>{
    console.log("child clicked")
  },[])

  console.log("parent rendered");
  return (
    <div>
        <h1>Count: {count}</h1>
      <div>
        <button onClick={()=> setCount(prev => prev + 1)} className="p-2 bg-blue-500 text-white font-semibold text-2xl rounded-md">
            Parent
        </button>

        <Child onclick={handleClick}/>
      </div>
    </div>
  )
}

export default ChildDemo
