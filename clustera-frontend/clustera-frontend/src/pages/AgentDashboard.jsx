import { useState } from "react";
import clusteraLogo from "../assets/Clustera.png";

const AgentDashboard = () => {
  const [formData, setFormData] = useState({
    clientName: "",
    numPeople: 1,
    hasDisability: false,
    numNights: 1,
    destinationState: ""
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías navegar a la vista de predicción o guardar en historial
    console.log("Datos del cliente:", formData);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 py-8">
      <img src={clusteraLogo} alt="Clustera Logo" className="w-48 h-auto mb-8" />

      <div className="w-full max-w-xl bg-gray-100 p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">Formulario de Cliente</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700">Nombre del Cliente</label>
            <input
              type="text"
              name="clientName"
              value={formData.clientName}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-xl"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Número de Personas</label>
            <input
              type="number"
              name="numPeople"
              min="1"
              value={formData.numPeople}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-xl"
              required
            />
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="hasDisability"
              checked={formData.hasDisability}
              onChange={handleChange}
              className="h-4 w-4"
            />
            <label className="text-gray-700">¿Alguna persona con discapacidad?</label>
          </div>

          <div>
            <label className="block text-gray-700">Número de Noches</label>
            <input
              type="number"
              name="numNights"
              min="1"
              value={formData.numNights}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-xl"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Estado de Destino</label>
            <input
              type="text"
              name="destinationState"
              value={formData.destinationState}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-xl"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded-xl hover:bg-gray-800 transition duration-200"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default AgentDashboard;