import type { FC } from "react"

interface UsdProps{
    amount:number
}

const Usd:FC<UsdProps> = ({amount}) => {
  return (
    <div>
      <h1>usd: {amount * 0.011}</h1>
    </div>
  )
}

export default Usd
