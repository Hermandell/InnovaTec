import NavBar from "../../utils/Navbar/Navbar";

const data = JSON.parse(localStorage.getItem("datos_generales"));
const data2 = JSON.parse(localStorage.getItem("datos_escuela"));
console.log(data.imageprofile);
const Perfil = () => {
  return (
    <>
      <NavBar />
      <div className="bg-white w-500px h-500px flex flex-col items-center justify-center">
        <div className="w-180px h-180px rounded-full mt-20 mb-20">
          <img
            src={
              data.imageprofile
                ? data.imageprofile
                : "https://via.placeholder.com/150"
            }
            alt="Perfil picture"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-2xl font-bold mb-5">
          {data.nombre} {data.apellidopaterno} {data.apellidomaterno}
        </h1>
        <p className="text-lg ">Matricula: {data.id}</p>
        <p className="text-lg ">CURP: {data.curp}</p>
        <p className="text-lg">Estatus: {data2.estatus}</p>
      </div>
    </>
  );
};

export default Perfil;
