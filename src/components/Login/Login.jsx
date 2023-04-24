import { Navigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [ncontrol, setNcontrol] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    setIsLoading(true);
    // Enviar una solicitud a la API para verificar las credenciales
    fetch("https://flaskapi-mu.vercel.app/all", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ncontrol: ncontrol,
        password: password,
      }),
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          // Si la respuesta no es exitosa, mostrar un mensaje de error
          throw new Error("Usuario o contraseña incorrectos");
        }
      })
      .then((result) => {
        localStorage.setItem("datos_generales", JSON.stringify(result[0]));
    localStorage.setItem("datos_escuela", JSON.stringify(result[1]));
        setLoggedIn(true);
        console.log(result);
      })
      .catch((error) => setErrorMessage(error.message))
      .finally(() => setIsLoading(false));
  };
  if (loggedIn) {
    return <Navigate to="/" />;
  }

  // Si el usuario ya ha iniciado sesión, redirigir a la página de inicio
  return (
    <>
      <form onSubmit={handleLogin}>
        <div className="flex flex-col items-center">
          <img
            className="mb-4"
            src="https://www.exalumnos.com/public/group_photo/fa/0b/e9b3b3c41c561a84826592b22bb9fb21.jpg"
            alt="Logo"
          />
          <label className="mb-2 font-bold">Numero de Control</label>
          <div className="flex items-center border border-gray-400 rounded px-2 py-1 mb-4">
            <i className="material-icons text-gray-500 text-xl mr-2">person</i>
            <input
              type="text"
              placeholder="Numero de Control"
              required
              className="w-full border-none outline-none"
              value={ncontrol}
              onChange={(event) => setNcontrol(event.target.value)}
            />
          </div>
          <label className="mb-2 font-bold">Contraseña</label>
          <div className="flex items-center border border-gray-400 rounded px-2 py-1 mb-4">
            <i className="material-icons text-gray-500 text-xl mr-2">lock</i>
            <input
              type="password"
              placeholder="Contraseña"
              required
              className="w-full border-none outline-none"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          {errorMessage && (
            <div className="text-red-500 mb-4">{errorMessage}</div>
          )}

          {isLoading ? (
            <>
              <div
                style={{
                  display: "inline-block",
                  position: "relative",
                  width: "80px",
                  height: "80px",
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    position: "absolute",
                    left: "8px",
                    width: "64px",
                    height: "64px",
                    animation: "spin 1s ease-in-out infinite",
                    border: "6px solid #0072C6",
                    borderRightColor: "transparent",
                    borderRadius: "50%",
                  }}
                ></div>
                <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
              </div>
            </>
          ) : (
            <>
              <button className="bg-blue-500 text-white rounded-md px-4 py-2 font-bold cursor-pointer mb-4">
                Iniciar sesión
              </button>
            </>
          )}
        </div>
      </form>
    </>
  );
};

export default Login;
