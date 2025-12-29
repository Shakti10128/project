import { useContext, useState } from "react"
import type { User } from "../Utils/AuthMethod";
import AuthMethod from "../Utils/AuthMethod";
import { useNavigate} from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import toast from "react-hot-toast";



export type AuthType = "signup" | "signin"

const Auth = () => {

    const auth = useContext(AuthContext);

    const navigate = useNavigate();

    const {createUser,getUser} = AuthMethod();

    const authHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const email = formData.get("email")?.toString() || "";
        const password = formData.get("password")?.toString() || "";
        const username = formData.get("username")?.toString() || "";

        const user: User = { email, password, username };

        if (authType === "signup") {
            if (!email || !password || !username) return; 
            createUser(user);
            setAuthType("signin");
            toast.success("singin successfull");
        } else {
            if (!email || !password) return; 
            const existingUser = getUser(email,password);

            if (!existingUser || existingUser.password !== password) {
                toast.error("signin failed")
                navigate("/auth"); // login failed
            } else {
                auth?.setEmail(existingUser.email);
                toast.success("signin successfully")
                navigate("/profile"); // login success
            }
        }
        };



    const [authType,setAuthType] = useState<AuthType>("signup");
  return (
    <div className="h-[90vh] bg-gray-50 flex justify-center items-center">
      <div className="h-1/2 w-1/2 gap-3 flex flex-col justify-around items-center rounded-2xl border-2 border-blue-500">
        <div className="mt-10">
            {
                <h1 className="font-semibold text-3xl">{"Welcome to " + authType + " page"}</h1>
            }
        </div>

        <div className="w-1/2">
            <form className="flex flex-col gap-6 mt-10 w-full" onSubmit={authHandler}>
                {
                    authType === "signup" && 
                    <input type="text" name="username" className="h-10 border w-full rounded-md pl-3" placeholder="Enter your name"/>
                }
                <input type="text" name="email" className="h-10 border w-full rounded-md focus:border-black pl-3" placeholder="Enter you email"/>
                <input type="text" name="password" className="h-10 border w-full rounded-md pl-3" placeholder="Enter your password"/>

                <button className="border p-3 text-white font-semibold cursor-pointer bg-blue-500 rounded-3xl" type="submit">{authType}</button>
            </form>
        </div>

        <div>
            <span className="font-semibold">{authType === "signup" ? "Already have account " : "Create an account "}</span>
            <span className=" ml-2 text-blue-500 font-semibold">
                {
                    authType === "signup" 
                    ? <button onClick={()=> setAuthType("signin")} className="cursor-pointer">signin</button> 
                    : <button onClick={()=> setAuthType("signup")} className="cursor-pointer">signup</button>
                }
            </span>
        </div>


      </div>
    </div>
  )
}

export default Auth
