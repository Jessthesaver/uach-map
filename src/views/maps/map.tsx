export default function MapNavigator() {
  return (
    <>
      <div className="flex flex-col max-w-md m-12">
        <div className="flex flex-col rounded-full sm:flex-row border border-indigo-700 py-1 px-1 w-full text-center sm:text-left">
          <div className="flex-shrink-0  m-4 w-16 h-16 rounded-full bg-indigo-400 self-center"></div>
          <div className="flex flex-col py-2 pr-2">
            <h1 className="text-lg font-light">Ubica tu punto de referencia</h1>
            <p className="text-sm font-hairline">
              En esta casilla se incluira una fotografia de un punto de
              referencia en ubicado en la facultad, acompañado de unas breves
              instrucciones a seguir hacia el lugar requerido. Se espera que
              estas ayudas guien al usuario de manera sencilla.
            </p>
          </div>
        </div>
        <br />
        <div className="flex flex-col rounded-full sm:flex-row border border-indigo-700 py-1 px-1 w-full text-center sm:text-left">
          <div className="flex-shrink-0  m-4 w-16 h-16 rounded-full bg-indigo-400 self-center"></div>
          <div className="flex flex-col py-2 pr-2">
            <h1 className="text-lg font-light">Uso de imagenes</h1>
            <p className="text-sm font-hairline">
              Mientras en esta pagina preliminar se cuenta con placeholders para
              las fotos, el producto final incluira imagenes de los puntos de
              referencia y se espera poder incluir un mapeado satelital de la
              facultad señalando la ruta
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
