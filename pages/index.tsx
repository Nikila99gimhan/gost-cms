import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

const Blog_URL = 'https://gostcms-next-backend.herokuapp.com'
const CONTENT_API_KEY = '0f9060c1d05d96caad21ea496d'


type Post = {

}

async function getPosts() {
const response = await fetch(
    `${Blog_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&fields=title,slug,excert,feature_image,reading_time`
).then((response) =>response.json() )


    const titles = response.posts.map((post) => post.title)
    console.log(response)

     console.log(titles)

  return titles
}

export const getStaticProps = async ({params}) => {
  const posts = await getPosts()
  return{
      props:{ posts }

  }
}

const Home: React.FC<{posts: string[] }> = (props) =>{

  const {posts} = props
 return(
     <div className={styles.container}>
       <h1>
         Hello To My Blog :)
       </h1>
       <ul>
         {posts.map((post,index) => {
           return <li key={index}>{post}</li>


         })}
       </ul>
     </div>
 )
}

export default Home




