import { Box } from "@mui/material";

export default function Administrativo() {
  return (
    <Box className="relative h-[200px] bg-gradient-to-tr from-indigo-600 via-indigo-700 to-violet-800">
      <Box className="flex flex-col gap-4 justify-center items-center w-full h-full px-3 md:px-0">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          Selecciona el punto de partida
        </h1>
      </Box>
      <div className="max-w-sm mx-auto mt-20 p-4 shadow-md rounded-lg border-t-2 border-indigo-700">
        <div className="flex justify-between pb-4">
          <p className="font-bold text-xl">Selecciona tu punto de partida</p>
        </div>
        <div className="flex flex-col gap-2 pl-2">
          <a href="administrativo">Secretaria administrativa</a>
          <hr />
          <a href="#">Sala de examenes profesionales</a>
          <hr />
          <a href="#">Auditorio Aguilera Baca</a>
          <hr />
          <a href="#">Sala de seminarios</a>
          <hr />
          <a href="#">Edificio de posgrados</a>
        </div>
      </div>
    </Box>
  );
}
