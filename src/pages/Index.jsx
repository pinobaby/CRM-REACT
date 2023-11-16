import{useLoaderData} from 'react-router-dom'

export function loader() {

  const clientes = [
    {
        id: 1,
        nombre: 'Juan',
        telefono: 102013313,
        email: "juan@juan.com",
        empresa: 'Codigo Con Juan'
    },
    {
        id: 2,
        nombre: 'Karen',
        telefono: 138198313,
        email: "karen@juan.com",
        empresa: 'Codigo Con Juan'
    },
    {
        id: 3,
        nombre: 'Josue',
        telefono: 31983913,
        email: "josue@juan.com",
        empresa: 'Codigo Con Juan'
    },
    {
        id: 4,
        nombre: 'Miguel',
        telefono: 319381983,
        email: "miguel@juan.com",
        empresa: 'Codigo Con Juan'
    },
    {
        id: 5,
        nombre: 'Pedro',
        telefono: 1398198938,
        email: "pedro@juan.com",
        empresa: 'Codigo Con Juan'
    },
];

  return clientes
}


function Index() {
  const datos = useLoaderData()
  console.log(datos);
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
      <p className="mt-10">Administra tus clientes</p>

      {/* {clientes.length ? (
        <table className='w-full bg-white shadow mt-5 table-auto'>
            <thead className='bg-blue-800 text-white'>
              <tr>
                <th className='py-2'>Cliente</th>
                <th className='py-2'>Contacto</th>
                <th className='py-2'>Acciones</th>
              </tr>

             <tbody>



             </tbody>
            </thead>
        </table>
      ) : (
        <p className="text-center mt-5">No hay clientes</p>
      
      )} */}

    </>
  )
}

export default Index