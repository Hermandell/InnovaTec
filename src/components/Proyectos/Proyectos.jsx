import { Link } from "react-router-dom";
import NavBar from "../../utils/Navbar/Navbar";
import { useEffect, useState } from "react";



const Proyectos = () => {
  const [proyectos, setProyectos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://innovatecbackend.onrender.com/api/proyectos?populate=*")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        let info = data.data;
        info.map((item) =>
          console.log(
            item.id
          )
        );
        setLoading(false);
        return setProyectos(info);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <NavBar />
      <div className="bg-white mt-10">
        {loading && (
          <div className="flex items-center justify-center h-screen">
            <div className="spinner border-4 border-gray-200 border-opacity-50 rounded-full h-32 w-32"></div>
          </div>
        )}
        {!loading && (
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Proyectos
              </h2>
              <p className="mt-2 text-lg text-gray-600">
                Bienvenidos a nuestra página web de seguimiento de proyectos
                estudiantiles. Aquí podrás ver una lista de proyectos en curso
                creados por estudiantes, y elegir uno para continuar su
                desarrollo junto al antiguo propietario. Para comenzar,
                regístrate con tu cuenta de estudiante y navega a través de
                nuestra lista de proyectos en curso. Cada proyecto incluirá una
                breve descripción, el nombre del antiguo propietario y una lista
                de tareas pendientes por realizar.
                <br />
                Nuestro sitio web también cuenta con una sección de seguimiento
                de proyectos donde podrás actualizar el progreso del proyecto,
                compartir ideas y hacer comentarios sobre el trabajo en curso.
                De esta manera, podrás mantenerte al día con los avances del
                proyecto y trabajar en colaboración con el antiguo propietario.
              </p>
            </div>
            <div className="mx-auto mt-10 mb-5 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {proyectos.map((item) => (
                <article
                  key={item.id}
                  className="flex max-w-xl flex-col items-start justify-between"
                >
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime="2020-03-16" className="text-gray-500">
                      {item.attributes.fecha}
                    </time>
                    <a
                      href="#"
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {item.attributes.carrera}
                    </a>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <Link>
                        <span className="absolute inset-0"></span>
                        {item.attributes.tema}
                      </Link>
                    </h3>
                    <p className="mt-5 mb-4 line-clamp-3 leading-6 text-gray-600">
                      {item.attributes.descripcion}
                    </p>
                  </div>
                  <img
                    src={
                      item.attributes.imagen.data
                        ? "" +
                          item.attributes.imagen.data.attributes.url
                        : "./src//assets//noImage.png"
                    }
                    className="h-500 w-500  bg-slate-600"
                  />
                  {item.attributes.alumnos.map((integrante,index) => (
                    <div
                      key={index}
                      className="relative mt-2 flex items-center gap-x-4"
                    >
                      {/* <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="h-10 w-10 rounded-full bg-gray-50" /> */}
                      <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                          <a href="#">
                            <span className="absolute inset-0"></span>
                            {integrante.name}
                          </a>
                        </p>
                        <p className="text-gray-600">{integrante.persona}</p>
                      </div>
                    </div>
                  ))}
                  <div className="text-sm leading-6">
                    <p className="mt-3 font-semibold text-gray-900">
                      <Link>
                        <span className="inset-0"></span>
                        Contacto:
                        <br />
                        <span>Numero: {item.attributes.numero}</span>
                        <br />
                        <span>Email: {item.attributes.email}</span>
                        <br />
                        <span>Archivos: {item.attributes.descarga}</span>
                      </Link>
                    </p>
                    <p className="text-gray-600"></p>
                  </div>
                </article>
              ))}

              <article className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime="2020-03-16" className="text-gray-500">
                    Mar 16, 2020
                  </time>
                  <a
                    href="#"
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    Marketing
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      Boost your conversion rate
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    Illo sint voluptas. Error voluptates culpa eligendi. Hic vel
                    totam vitae illo. Non aliquid explicabo necessitatibus unde.
                    Sed exercitationem placeat consectetur nulla deserunt vel.
                    Iusto corrupti dicta.
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img
                    src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                    className="h-10 w-10 rounded-full bg-gray-50"
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href="#">
                        <span className="absolute inset-0"></span>
                        Michael Foster
                      </a>
                    </p>
                    <p className="text-gray-600">Co-Founder / CTO</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Proyectos;
