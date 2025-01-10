import { useState } from "react";
import { StructuresChart } from "./components/StructuresChart";
import { structuresData } from "./mock/data";

function App() {
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleSelectCountry = (country: string) => setSelectedCountry(country);

  const datosFiltrados = structuresData.filter((structure) =>
    structure.country.includes(selectedCountry),
  );

  return (
    <div className="h-screen flex flex-col">
      <header className="p-3 flex items-center gap-2">
        <h1 className="text-2xl font-bold">Ejemplo pa Bruneitor Mastodonte</h1>

        <button
          type="button"
          className="bg-slate-700 text-white p-2 rounded-md"
          disabled={!selectedCountry}
          onClick={() => setSelectedCountry("")}
        >
          Deseleccionar
        </button>
      </header>

      <StructuresChart
        selectedCountry={selectedCountry}
        onSelectCountry={handleSelectCountry}
      />

      <main className="flex-1 flex flex-col overflow-auto">
        <div className="p-3">
          <h2 className="text-xl font-bold">
            Estructuras de: {selectedCountry || "País no seleccionado"}
          </h2>
          <p>Selecciona un país para ver las estructuras más famosas</p>
        </div>

        <ul className="flex-1 overflow-auto grid grid-cols-2 gap-2 px-2">
          {datosFiltrados.map((structure) => (
            <li
              key={structure.name}
              className="p-3 bg-slate-700 rounded-md text-white"
            >
              <h3 className="text-lg font-bold">{structure.name}</h3>
              <p>{structure.city}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
