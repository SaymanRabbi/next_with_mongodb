import Comment from "@/app/components/Button/Comment/Comment";
import { getAllComments } from "@/lib/getAllComments";
import getAllPost from "@/lib/getAllPost";
import SinglePost from "@/lib/singelPost";
import { Suspense } from "react";
export default async function   SinglePostPage  ({
    params
}) {
     const id = params.id
     const postsPromise = SinglePost(id)
     const commentsPromise = getAllComments(id)
    const post = await postsPromise
    return (
        <div>
            <h1
             className="text-blue-500 text-[20px] font-bold"
            >{post.title}</h1>
            <p
             className="text-white text-[16px] font-normal"
            >{post.body}</p>
            <Suspense fallback={<div>Loading Comments...</div>}>
            
                    <Comment promise={commentsPromise} />
               
             </Suspense>
        </div>
    );
}

export  async function generateStaticParams(){
    const post = await getAllPost()
     const posts = await post.json()
     
    return posts.map((post)=>({
        id:post.id.toString()
    }))
}
