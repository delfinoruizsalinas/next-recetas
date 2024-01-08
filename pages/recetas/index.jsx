import Layout from "../../components/Layout"
import Link from "next/link";
export default function recetas({data}) {
  
  return (
    <Layout title={'Recetas'} description={'Pagina de Recetas'}>
        <h1>Recetas</h1>
        {
          data.map(({id, title, body}) => (
            <div key={id}>
              <Link href={ `/recetas/${id}` }>
                <h2>{id} - {title}</h2>
                <p>{body}</p>
              </Link>   
            </div>
          ))
        }
    </Layout>       
  )
}

export async function getStaticProps() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    
    return {                                                                                                                                                              
      props: {
        data,
      },
    }
  } catch (error) {
    console.log(error)
  }
}