import { useState } from "react";
import MemoizedCard from "./MemoizedCard";


const MemoizedTracker = () => {
  const [value,setValue] = useState<string>("");
  console.log("value inside parent: ",value)
    return (
      <div>
        <input type="text" value={value}
          onChange={(e)=> setValue(e.target.value)}
          className="border p-2 w-96"
          />
  
          <MemoizedCard value={"shakti"} />
      </div>
    )
}

export default MemoizedTracker
