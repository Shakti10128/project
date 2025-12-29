import { memo } from "react"



const Child = memo(({onclick}:{onclick:()=> void}) => {
  console.log("child rerendered")
  return (
    <div>
      <button onClick={onclick} className="p-2 mt-2 bg-blue-500 text-white font-semibold text-2xl rounded-md">
        Child
      </button>
    </div>
  )
})

export default Child
