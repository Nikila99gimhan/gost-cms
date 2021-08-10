import Link from "next/link"
const {Blog_URL,CONTENT_API_KEY} = process.env

function getPost(slug: string){
   
}



const Post: React.FC= props => {
    return (
        <div>
            <Link href="/">
               <a>Go back</a>
            </Link>
            <h1>My Blog Post </h1>
        </div>
    )
    
}
export default Post