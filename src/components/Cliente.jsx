function Cliente({ cliente }) {
  const { nombre, empresa, email, telefono } = cliente;
  return (
    <tr className="border-b text-center">
      <td className="p-6 space-y-2">
        <p className=" text-2xl text-gray-800">{nombre}</p>
        <p className="">{empresa}</p>
      </td>

      <td className="p-6 ">
        <p className="text-gray-600 ">
          <span className="text-gray-800 font-bold uppercase">Email: {""}</span>
          {email}
        </p>
        <p className="text-gray-600 ">
          <span className="text-gray-800 font-bold uppercase">Telefono: {""}</span>
          {telefono}
        </p>
      </td>
        <td className="p-5 flex justify-center">
            <button 
            type="button"
            className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs">
                Editar
            </button>

        </td>
        <td className="p-5 flex justify-center">
            <button 
            type="button"
            className="text-red-600 hover:text-red-700 uppercase font-bold text-xs">
                Eliminar
            </button>

        </td>
    </tr>
  );
}

export default Cliente;
