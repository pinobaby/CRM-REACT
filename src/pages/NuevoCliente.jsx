import { useNavigate, Form, useActionData } from "react-router-dom";
import Formulario from "../components/Formulario";
import Error from "../components/Error";

export  async function action({request}) {
  const formData = await request.formData()
  
  const datos = Object.fromEntries(formData)
  
  console.log(datos);

  //validacion de los datos del fomulario
  const errores = [];
  if (Object.values(datos).includes("")) {
    errores.push("Todos los campos son obligatorios" );
  }


  //retornar los errores

  if(Object.keys(errores).length) {
    return errores
  }

  console.log(errores);
  return action
}

function NuevoCliente() {
  const navigate = useNavigate();
  const errores = useActionData();

  console.log(errores);
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Nuevo Cliente</h1>
      <p className="mt-10">
        Llena todos los campos para registrar un nuevo cliente
      </p>

      <div className="flex justify-end">
        <button
          className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
          onClick={() => navigate("/")}
        >
          Volver
        </button>
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">

        {errores?.length &&  errores.map( (error, i) =><Error key={i}>{error}</Error>)}


        <Form method="post">
          <Formulario />

          <input
            type="submit"
            className="mt-5 w-full p-3 bg-blue-800 hover:bg-blue-700 text-white uppercase font-bold cursor-pointer"
            value={"Registrar Cliente"}
          />
        </Form>
      </div>
    </>
  );
}

export default NuevoCliente;
