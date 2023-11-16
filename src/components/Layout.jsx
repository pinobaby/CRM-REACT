import { Outlet, Link, useLocation, } from "react-router-dom" 


function Layout() {
    const Location = useLocation()
    console.log(Location);
  return (
    <div className="md:flex md:min-h-scren">
        <aside className="md:w-1/4 bg-blue-700 px-5 -y-10">
            <h2 className="text-4xl text-center font-black text-white mt-7">CRM-Clientes</h2>
            <nav className="mt-10">
                <Link className={`${location.pathname === "/" ?  'text-blue-300' : 'text-white'}
                "text-2xl block mt-2 hover:text-blue-300 text-white"`} 
                to="/">Clientes</Link>
                <Link className= {`${location.pathname === "/clientes/nuevo" ?  'text-blue-300' : 'text-white'}
                "text-2xl block mt-2 hover:text-blue-300 text-white"`}
                to="/clientes/nuevo">Nuevo Cliente</Link>
            </nav>
          
        </aside>

        <main className="md:w-3/4 p-10 md:h-screen overflow-scroll ">
            <Outlet/>
        </main>
    </div>
  )
}

export default Layout