import React, { useRef} from "react"


const Debouncing = () => {
  const timerRef = useRef<number | null>(null);
  
  
  const queryHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    
    console.log(e.target.value)

    // clear the previous interval
    if(timerRef.current) {
      clearTimeout(timerRef.current);
    }

    // if there is no delay between two key press set new timer
    timerRef.current = setTimeout(()=>{
        console.log("calling api for query: ",e.target.value);        
    },500)
  }


  return (
    <div className="flex flex-col gap-5">
        <div>
            <h1 className="font-semibold text-2xl">Calling API using Debouncing</h1>
        </div>
      <div>
        <input type="text" placeholder="search"
        className="p-2 border rounded-md w-96"
        onChange={queryHandler}
        />
      </div>
    </div>
  )
}

export default Debouncing
