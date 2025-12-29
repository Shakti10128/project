import CCApp from "./component/CCApp"
import Debouncing from "./component/Debouncing"
import ChildDemo from "./component/Memoization/ChildDemo"
import MemoizedTracker from "./component/Memoization/MemoizedTracker"
// import HomeFeedScreen from "./component/HomeFeedScreen"
import Pound from "./component/Pound"
import RegisterForm from "./component/RegisterForm"
import Usd from "./component/Usd"


function App() {

  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        {/* <HomeFeedScreen/> */}


        {/* <CCApp
          render={(amount: number) => (
            <>
              <Usd amount={amount} />
              <Pound amount={amount} />
            </>
          )}
        /> */}

          {/* <RegisterForm/> */}

          {/* <Debouncing/> */}

          {/*memo  */}
          {/* <MemoizedTracker/> */}

          {/* useCallBack */}
          <ChildDemo/>

      </div>
    </>
  )
}

export default App
