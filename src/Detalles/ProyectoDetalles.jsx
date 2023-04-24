

const ProyectoDetalles = () => {
    return (
        <div className="bg-gray-100 border border-gray-300 rounded-lg p-5">
            <div className="flex items-center mb-5">
                <img src="" alt="Imagen del producto" className="w-48 h-48 rounded-md mr-5" />
                <div>
                    <h2 className="text-3xl font-bold mb-2">Nombre del producto</h2>
                    <p className="text-xl mb-2">Descripción del producto</p>
                    <p className="text-lg mb-2">Tipo de producto: Tipo A</p>
                    <p className="text-lg">Fecha de creación: 01/01/2022</p>
                </div>
            </div>
            <div className="flex items-center mb-5">
                <img src="" alt="Imagen del creador" className="w-12 h-12 rounded-full mr-3" />
                <p className="text-lg">Creador: UsuarioA</p>
            </div>
            <div className="mt-5">
                <h3 className="text-2xl font-bold mb-2">Detalles del producto</h3>
                <p className="text-lg mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mattis lacus eget semper pharetra. Fusce sapien dui, pretium id dui a, scelerisque blandit turpis. Suspendisse potenti. Vivamus vitae vestibulum lacus, in sollicitudin Purus imperdiet libero.</p>
                <h3 className="text-2xl font-bold mb-2">Contacto del creador</h3>
                <p className="text-lg mb-2">Correo electrónico:</p>
                <p className="text-lg mb-2">WhatsApp:</p>
                <p className="text-lg">Teléfono:</p>
            </div>
        </div>
    );
}

export default ProyectoDetalles;