import NavBar from "../utils/Navbar/Navbar";

import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";
import { useState } from "react";
import * as Yup from "yup";

const RegistroProyectos = () => {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const validationSchema = Yup.object().shape({
    tema: Yup.string().required("El tema es requerido"),
    //fecha: Yup.string().required("La fecha es requerida"),
    descripcion: Yup.string().required("La descripción es requerida"),
    numero: Yup.string().required("El numero es requerido"),
    email: Yup.string().required("El email es requerido"),
    descarga: Yup.string().required("El Link es requerido"),
    carrera: Yup.string().required("La carrera es requerido"),
    //imagen: Yup.string().required("La imagen es requerida"),
    alumnos: Yup.array().of(
      Yup.object().shape({
        name: Yup.string().required("El nombre es requerido"),
        ncontrol: Yup.string().required("La matricula es requerida"),
        persona: Yup.string().required("La profesión es requerida"),
      })
    ),
  });

  const initialValues = {
    tema: "",
    //fecha: "",
    descripcion: "",
    //imagen: "",
    numero: "",
    email: "",
    descarga: "",
    carrera:"",
    alumnos: [{ name: "", ncontrol: "", persona: "" }],
  };

  const onSubmit = (values, { resetForm }) => {
    const today = new Date();
    const day = today.getDate().toString().padStart(2, "0");
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const year = today.getFullYear().toString();
    const formattedDate = `${day}/${month}/${year}`;

    console.log(formattedDate); // ejemplo de salida: "29/04/2023"

    const data = {
      tema: values.tema,
      fecha: formattedDate,
      carrera: values.carrera,
      descripcion: values.descripcion,
      numero: values.numero,
      email: values.email,
      descarga: values.descarga,
      alumnos: values.alumnos,
      publishedAt: null,
    };

    console.log({ data: data });
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    fetch("https://innovatecbackend.onrender.com/api/proyectos", {
      method: "POST",
      body: JSON.stringify({ data }),
      redirect: "follow",
      headers: myHeaders,
    })
      .then((response) => {
        setShowSuccessAlert(true);
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.error(error));
    resetForm();
  };
  return (
    <>
      <NavBar />
      <div className="mr-3 ml-3 max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Agregar tema</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ values, errors, touched, isSubmitting }) => (
              <Form encType="multipart/form-data">
                <div className="mb-4">
                  <label htmlFor="tema" className="block font-medium">
                    Carrera
                  </label>
                  <Field
                    type="text"
                    id="carrera"
                    name="carrera"
                    className={`mt-1 block w-full rounded-md border-2 border-indigo-400 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-600 focus:ring-opacity-50 ${
                      errors.carrera && touched.carrera ? "border-red-500" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="tema"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="tema" className="block font-medium">
                    Tema
                  </label>
                  <Field
                    type="text"
                    id="tema"
                    name="tema"
                    className={`mt-1 block w-full rounded-md border-2 border-indigo-400 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-600 focus:ring-opacity-50 ${
                      errors.tema && touched.tema ? "border-red-500" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="tema"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* <div className="mb-4">
                  <label htmlFor="fecha" className="block font-medium">
                    Fecha
                  </label>
                  <Field
                    type="date"
                    id="fecha"
                    name="fecha"
                    className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
                      errors.fecha && touched.fecha ? "border-red-500" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="fecha"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div> */}

                <div className="mb-4">
                  <label htmlFor="descripcion" className="block font-medium">
                    Descripción
                  </label>
                  <Field
                    as="textarea"
                    id="descripcion"
                    name="descripcion"
                    rows={4}
                    className={`mt-1 block w-full rounded-md border-2 border-indigo-400 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
                      errors.descripcion && touched.descripcion
                        ? "border-red-500 border-2"
                        : ""
                    }`}
                  />
                  <ErrorMessage
                    name="descripcion"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* <div className="mb-4">
                  <label htmlFor="imagen" className="block font-medium">
                    Imagen
                  </label>
                  <Field
                    type="file"
                    id="imagen"
                    name="imagen"
                    className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
                      errors.imagen && touched.imagen ? "border-red-500" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="imagen"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div> */}

                <div className="mb-4">
                  <label htmlFor="numero" className="block font-medium">
                    Numero
                  </label>
                  <Field
                    type="text"
                    id="numero"
                    name="numero"
                    className={`mt-1 block w-full rounded-md border-2 border-indigo-400 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
                      errors.numero && touched.numero ? "border-red-500" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="numero"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block font-medium">
                    Email
                  </label>
                  <Field
                    type="text"
                    id="email"
                    name="email"
                    className={`mt-1 block w-full rounded-md border-2 border-indigo-400 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
                      errors.email && touched.email ? "border-red-500" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="descarga" className="block font-medium">
                    Link de Descarga
                  </label>
                  <Field
                    type="text"
                    id="descarga"
                    name="descarga"
                    className={`mt-1 block w-full rounded-md border-2 border-indigo-400 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
                      errors.descarga && touched.descarga
                        ? "border-red-500"
                        : ""
                    }`}
                  />
                  <ErrorMessage
                    name="descarga"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="alumnos"
                    className="block font-medium text-center"
                  >
                    Alumnos
                  </label>
                  <FieldArray name="alumnos">
                    {(arrayHelpers) => (
                      <div>
                        {values.alumnos.map((alumno, index) => (
                          <div key={index} className="mb-4">
                            <div className="flex items-center justify-between mb-2">
                              <label
                                htmlFor={`alumnos.${index}.name`}
                                className="font-medium"
                              >
                                Nombre
                              </label>
                              {values.alumnos.length > 1 && (
                                <button
                                  type="button"
                                  className="text-red-500 hover:text-red-600 focus:outline-none"
                                  onClick={() => arrayHelpers.remove(index)}
                                >
                                  Eliminar
                                </button>
                              )}
                            </div>
                            <div>
                              <Field
                                type="text"
                                id={`alumnos.${index}.name`}
                                name={`alumnos.${index}.name`}
                                className={`mt-1 block w-full rounded-md border-2 border-indigo-400 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
                                  errors.alumnos?.[index]?.name &&
                                  touched.alumnos?.[index]?.name
                                    ? "border-red-500"
                                    : ""
                                }`}
                              />
                              <ErrorMessage
                                name={`alumnos.${index}.name`}
                                component="div"
                                className="text-red-500 text-sm mt-1"
                              />
                            </div>

                            <div className="mt-4">
                              <label
                                htmlFor={`alumnos.${index}.ncontrol`}
                                className="block font-medium"
                              >
                                Matrícula
                              </label>
                              <Field
                                type="text"
                                id={`alumnos.${index}.ncontrol`}
                                name={`alumnos.${index}.ncontrol`}
                                className={`mt-1 block w-full rounded-md border-2 border-indigo-400 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
                                  errors.alumnos?.[index]?.ncontrol &&
                                  touched.alumnos?.[index]?.ncontrol
                                    ? "border-red-500"
                                    : ""
                                }`}
                              />
                              <ErrorMessage
                                name={`alumnos.${index}.ncontrol`}
                                component="div"
                                className="text-red-500 text-sm mt-1"
                              />
                            </div>

                            <div className="mt-4">
                              <label
                                htmlFor={`alumnos.${index}.persona`}
                                className="block font-medium"
                              >
                                Profesión
                              </label>
                              <Field
                                type="text"
                                id={`alumnos.${index}.persona`}
                                name={`alumnos.${index}.persona`}
                                className={`mt-1 block w-full rounded-md border-2 border-indigo-400 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
                                  errors.alumnos?.[index]?.persona &&
                                  touched.alumnos?.[index]?.persona
                                    ? "border-red-500"
                                    : ""
                                }`}
                              />
                              <ErrorMessage
                                name={`alumnos.${index}.persona`}
                                component="div"
                                className="text-red-500 text-sm mt-1"
                              />
                            </div>
                            <hr className="mt-5 border-2 border-neutral-500" />
                          </div>
                        ))}

                        <div className="mt-4">
                          <button
                            type="button"
                            className="px-3 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500"
                            onClick={() =>
                              arrayHelpers.push({
                                name: "",
                                ncontrol: "",
                                persona: "",
                              })
                            }
                          >
                            Agregar Alumno
                          </button>
                        </div>
                      </div>
                    )}
                  </FieldArray>
                </div>

                <div className="mt-6">
                  <button
                    type="submit"
                    className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500"
                    disabled={isSubmitting}
                  >
                    Enviar
                  </button>
                </div>
                {showSuccessAlert && (
                  <div
                    className="bg-green-500 text-white px-6 py-4 border-0 rounded relative mb-4"
                    role="alert"
                  >
                    <span className="text-xl inline-block mr-5 align-middle">
                      <i className="fas fa-check-circle" />
                    </span>
                    <span className="inline-block align-middle mr-8">
                      Tu información ha sido enviada con éxito.
                    </span>
                    <button
                      className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
                      onClick={() => setShowSuccessAlert(false)}
                    >
                      <span>×</span>
                    </button>
                  </div>
                )}
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default RegistroProyectos;
