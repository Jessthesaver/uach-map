import { Box } from "@mui/material";

export default function AdministrativoCafeteria() {
  return (
    <>
      <Box className="relative h-[100px] bg-gradient-to-tr from-indigo-600 via-indigo-700 to-violet-800">
        <Box className="flex flex-col gap-4 justify-center items-center w-full h-full px-3 md:px-0"></Box>
        <div className="flex flex-col max-w-md m-12">
          <div className="flex flex-col rounded-full sm:flex-row border border-indigo-700 py-1 px-1 w-full text-center sm:text-left">
            <div className="flex-shrink-0  m-4 w-16 h-16 rounded-full bg-indigo-400 self-center"></div>
            <div className="flex flex-col py-2 pr-2">
              <h1 className="text-lg font-light">Edificio Administrativo</h1>
              <p className="text-sm font-hairline">
                Pasa el edificio administrativo, al salir por la puerta
                principal al estacionamiento.
              </p>
            </div>
          </div>
          <br />
          <div className="flex flex-col rounded-full sm:flex-row border border-indigo-700 py-1 px-1 w-full text-center sm:text-left">
            <div className="flex-shrink-0  m-4 w-16 h-16 rounded-full bg-indigo-400 self-center"></div>
            <div className="flex flex-col py-2 pr-2">
              <h1 className="text-lg font-light">Uso de imagenes</h1>
              <p className="text-sm font-hairline">
                Gira a la derecha, la biblioteca estará frente a ti, girar a la
                izquierda y continuar.
              </p>
            </div>
          </div>
          <br />
          <div className="flex flex-col rounded-full sm:flex-row border border-indigo-700 py-1 px-1 w-full text-center sm:text-left">
            <div className="flex-shrink-0  m-4 w-16 h-16 rounded-full bg-indigo-400 self-center"></div>
            <div className="flex flex-col py-2 pr-2">
              <h1 className="text-lg font-light">Uso de imagenes</h1>
              <p className="text-sm font-hairline">
                La cafetería estará al final del pasillo.
              </p>
            </div>
          </div>
          <br />
        </div>
      </Box>
    </>
  );
}
