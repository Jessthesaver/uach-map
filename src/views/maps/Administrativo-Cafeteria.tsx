export default function AdministrativoCafeteria() {
  return (
    <>
      <div className="flex flex-col max-w-md m-12">
        <div className="flex flex-col rounded-full sm:flex-row border border-indigo-700 py-1 px-1 w-full text-center sm:text-left">
          <div className="flex-shrink-0  m-4 w-16 h-16 rounded-full bg-indigo-400 self-center"></div>
          <div className="flex flex-col py-2 pr-2">
            <h1 className="text-lg font-light">Edificio Administrativo</h1>
            <p className="text-sm font-hairline">
              Pasa el edificio administrativo, , la biblioteca estará frente a
              ti.
            </p>
          </div>
        </div>
        <br />
        <div className="flex flex-col rounded-full sm:flex-row border border-indigo-700 py-1 px-1 w-full text-center sm:text-left">
          <div className="flex-shrink-0  m-4 w-16 h-16 rounded-full bg-indigo-400 self-center"></div>
          <div className="flex flex-col py-2 pr-2">
            <h1 className="text-lg font-light">Uso de imagenes</h1>
            <p className="text-sm font-hairline">
              Al salir por la puerta principal al estacionamiento, gira a la
              derecha.
            </p>
          </div>
        </div>
        <br />
        <div className="flex flex-col rounded-full sm:flex-row border border-indigo-700 py-1 px-1 w-full text-center sm:text-left">
          <div className="flex-shrink-0  m-4 w-16 h-16 rounded-full bg-indigo-400 self-center"></div>
          <div className="flex flex-col py-2 pr-2">
            <h1 className="text-lg font-light">Uso de imagenes</h1>
            <p className="text-sm font-hairline">
              Girar a la izquierda y continuar, la biblioteca estará al final
              del pasillo.
            </p>
          </div>
        </div>
        <br />
      </div>
    </>
  );
}
