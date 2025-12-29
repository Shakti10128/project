import Header from "./Components/Header"
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Home from "./Components/Home"
import Cart from "./Components/Cart"
import Auth from "./Components/Auth"
import React, { createContext, Suspense } from "react"
import { Toaster } from "react-hot-toast"
import { AuthProvider } from "./Context/AuthProvider"

export const MyContext = createContext<String | null>(null);

const Profile = React.lazy(() => import("./Components/Profile"));

function App() {

  return (
    <>
      <div>
        <AuthProvider>
        <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/search/:query" element={<Home/>}/>
            <Route path="/cart" element={<Cart/>}/>\

            {/* lazy loading */}
            <Route path="/profile" element={
              <Suspense fallback={<div>Loading...</div>}>
                <Profile />
              </Suspense>
            }/>

            <Route path="/auth" element={<Auth/>}/>
          </Routes>
        </BrowserRouter>
        </AuthProvider>
        <Toaster/>
      </div>
    </>
  )
}

export default App
