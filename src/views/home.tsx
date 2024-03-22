import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box className="relative h-[400px] bg-gradient-to-tr from-indigo-600 via-indigo-700 to-violet-800">
      <Box className="flex flex-col gap-4 justify-center items-center w-full h-full px-3 md:px-0">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          Bienvenido a el mapa interactivo de facultad de ingenieria!
        </h1>

        <div className="relative p-3 border border-gray-200 rounded-lg w-full max-w-lg">
          <input
            type="text"
            className="rounded-md w-full p-3 "
            placeholder="¿A donde quieres ir hoy?"
          />

          <button type="submit" className="absolute right-6 top-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
      </Box>
      <div className="max-w-sm mx-auto mt-20 p-4 shadow-md rounded-lg border-t-2 border-indigo-700">
        <div className="flex justify-between pb-4">
          <p className="font-bold text-xl">Lugares más comunes</p>
        </div>
        <div className="flex flex-col gap-2 pl-2">
          <a href="#">Sala de examenes profesionales</a>
          <hr />
          <a href="#">Auditorio Aguilera Baca</a>
          <hr />
          <a href="#">Sala de seminarios</a>
          <hr />
          <a href="#">Secretaria administrativa</a>
          <hr />
          <a href="#">Edificio de posgrados</a>
        </div>
      </div>
    </Box>
  );
}
