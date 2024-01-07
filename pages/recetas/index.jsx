import Layout from "../../components/Layout"
import Link from "next/link";
export default function recetas({data}) {
  
  return (
    <Layout title={'Recetas'} description={'Pagina de Recetas'}>
        <h1>Recetas</h1>
        {
          data.data.map(({id, attributes}) => (
            <div key={id}>
              <Link href={ `/recetas/${id}` }>
                <h2>{id} - {attributes.alergia}</h2>
                <p>{attributes.diagnostico}</p>
              </Link>   
            </div>
          ))
        }
    </Layout>       
  )
}

export async function getStaticProps() {
  try {
    const res = await fetch('http://127.0.0.1:1337/api/recetas');
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