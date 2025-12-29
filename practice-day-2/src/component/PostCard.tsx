import { createContext, useContext, type PropsWithChildren, } from "react"

export interface Post{
    id:number
    title:string
    content:string
    user:{
        id:number
        name:string
    }
}

interface PostCardContext  {
    post:Post
}

interface PostCardProps extends PropsWithChildren{
    post:Post
}

const PostCardContext = createContext<PostCardContext | undefined>(undefined);

function usePostCardContext(){
    const context = useContext(PostCardContext);

    if(!context) {
        throw new Error("usePostCardContext must be used within a PostCard")
    }

    return context;
}

const PostCard= ({post,children}:PostCardProps) => {
  return (
    <PostCardContext.Provider value={{post}}>
        <div className="flex w-full h-full justify-center items-center flex-col gap-2 rounded-md border-e-neutral-800 bg-gray-500">
            {children}
        </div>  
    </PostCardContext.Provider>
  )
}


PostCard.Title = function PostCardTitle(){
    const {post} = usePostCardContext();

    return(
        <h2 className="text-lg font-semibold">{post.title}</h2>
    )
}

PostCard.Content = function PostCardContent(){
    const {post} = usePostCardContext();

    return(
        <p>{post.content}</p>
    )
}


PostCard.User = function PostCardUser(){
    const {post} = usePostCardContext();

    return(
        <p className="text-sm text-white">{post.user.name}</p>
    )
}

PostCard.Buttons = function PostCardButtons(){
    return(
        <div className="flex flex-row gap-2">
            <button className="p-2 border bg-blue-500 text-white font-semibold text-2xl rounded-md">Read More</button>
            <button className="p-2 border bg-blue-500 text-white font-semibold text-2xl rounded-md">Comments</button>
        </div>
    )
}


export default PostCard
