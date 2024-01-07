import Layout from "../../components/Layout"

export default function detalleReceta({data}) {
  return (
    <Layout title={'Detalle Receta'} description={'Pagina de detalle de receta'}>
      <h1> Detalle Productos</h1>
      <p>{data.data.attributes.alergia}</p>
      <p>{data.data.attributes.fecha}</p>
      <p>{data.data.attributes.diagnostico}</p>
    </Layout>
  )
}

export async function getStaticPaths(){
  try{
    const res = await fetch('http://127.0.0.1:1337/api/recetas');
    const data = await res.json();
    const paths = data.data.map(({ id }) => ({ params: { id:`${id}` } }));
    return {
      paths,
      fallback: false,
    };
  }catch(error){
    console.log(error);
  }
}

export async function getStaticProps({ params }) {
  try {
    const res = await fetch('http://127.0.0.1:1337/api/recetas/'+params.id);
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