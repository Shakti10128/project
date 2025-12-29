import PostCard from "./PostCard"


const HomeFeedScreen = () => {
  return (
    <div className="w-100 h-80 rounded-2xl flex flex-col gap-5">
        <h1 className="font-semibold text-3xl">Compound Component</h1>
      <PostCard
      post={{
        id:1,
        title:"hello world",
        content:"This is the first post on our new blog",
        user:{
            id:1,
            name:"shakti kumar"
        }
      }}
      >
        <PostCard.Title/>
        <PostCard.Content/>
        <PostCard.User/>
        <PostCard.Buttons/>
      </PostCard>
    </div>
  )
}

export default HomeFeedScreen
