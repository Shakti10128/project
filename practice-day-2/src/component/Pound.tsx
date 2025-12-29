import type { FC } from "react"

interface PoundProps{
    amount:number
}

const Pound:FC<PoundProps> = ({amount}) => {
  return (
    <div>
      <h1>pound: {amount * 0.0082}</h1>
    </div>
  )
}

export default Pound
