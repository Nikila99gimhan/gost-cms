import Link from "next/link"
const {Blog_URL,CONTENT_API_KEY} = process.env

async function getPost(slug: string){
    const response = await fetch (
        `${Blog_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&fields=title,slug,custom_excerpt`
    ).then((response) =>response.json() )
    
    
        
       const posts = response.posts
    
      return posts
    
   
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