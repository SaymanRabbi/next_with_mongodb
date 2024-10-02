
const Comment = async ({promise}) => {
    const comments = await promise
   
    return (
        //  card
        <div>
            {comments.map((comment)=>(
                 <div className="bg-blue-500 p-4 rounded-md py-5 mb-3 text-white"
                  key={comment.id}
                 >
                 <h3 className="text-[16px] font-bold">{comment.name}</h3>
                 <p className="text-[16px] font-normal">{comment.body}</p>
             </div>
            ))}
        </div>
    );
};

export default Comment;