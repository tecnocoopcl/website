// Último dato conocido de status-tc.aebn.cl, para cuando la API no responde.
// src/js/status.js lo reemplaza con los datos en vivo.
module.exports = {
  date: "2026-11-13",
  overall: {
    state: "ok", // ok | down
    label: "Todos los sistemas operativos",
  },
  storage: {
    usedGb: 23.1,
    freeGb: 97.1,
    totalGb: 125.4,
  },
  podCount: 1,
  kwhMonth: 1.43, // kwh_month: lo consumido en el mes en curso
  kwhTotal: 1.54, // kwh: acumulado desde la primera lectura
  services: [
    {
      name: "Consumo de internet",
      state: "disabled",
      description: "Tráfico de red de la infraestructura. Aún no disponible.",
      stats: [],
    },
  ],
};
