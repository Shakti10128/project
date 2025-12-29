

export interface User {
  username: string;
  email: string;
  password: string;
}


const AuthMethod= () => {
  const users: User[] = localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users") as string)
    : [];

    return {
        createUser:(user:User)=>{
            let isUserExist = false;
            for(let i = 0; i < users.length; i++) {
                if(users[i].email === user.email) {
                    isUserExist = true;
                    console.log("user already exist")
                    return;
                }
            }

            users.push(user);
            localStorage.setItem('users',JSON.stringify(users));
        },

        getUser: (email:string, password:string)=>{
            for(let i = 0; i < users.length; i++) {
                if(users[i].email === email && users[i].password === password) {
                    return users[i];
                }
            }
            return null;
        }
    }
  
};

export default AuthMethod
