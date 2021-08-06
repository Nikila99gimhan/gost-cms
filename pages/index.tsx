import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

const Blog_URL = 'https://gostcms-next-backend.herokuapp.com'
const CONTENT_API_KEY = '0f9060c1d05d96caad21ea496d'


type Post = {

}

async function getPosts() {
const response = await fetch(
    `${Blog_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}`
).then((response) =>response.json() )



    const titles = response.posts.map((post) => post.title)

  console.log(titles)

  return titles
}

export const getStaticProps = async ({params}) => {
  const posts = await getPosts()
  return{
    props: posts
  }
}

const Home: React.FC<{posts: Post[] }> = (props) =>{
 return(
     <div className={styles.container}>
       <h1>
         Hello :)
       </h1>
     </div>
 )
}

export default Home




