export async function getAllComments(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`,{
        next:{
            revalidate:60
        }
    })
    const comments = await res.json()
    return comments
}