import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'

const {Blog_URL,CONTENT_API_KEY} = process.env



type Post = {
  title: string
  slug: string,
  feature_image: string

}

async function getPosts() {
const response = await fetch(
    `${Blog_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&fields=title,slug,excert,feature_image,reading_time`
).then((response) =>response.json() )


    
   const posts = response.posts

  return posts
}

export const getStaticProps = async ({params}) => {
  const posts = await getPosts()
  return{
      props:{ posts }

  }
}

const Home: React.FC<{posts: Post[] }> = (props) =>{

  const {posts} = props
 return(
     <div className={styles.container}>
       <h1>
         Hello To My Blog :)
       </h1>
       <ul>
         {posts.map((post,index) => {
           return(
            <li key={post.slug}>

           <Link href="/post/[slug]" as={`post/${post.slug}`}>

             <a>{post.title}</a>

             </Link>
             
           
           </li>


           )
         })}
       </ul>
     </div>
 )
}

export default Home




