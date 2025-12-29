import { memo } from "react"



const MemoizedCard = memo(({value}:{value:string}) => {
  console.log("value inside child: ",value)
  return (
    <div>
      child component
    </div>
  )
})

export default MemoizedCard
