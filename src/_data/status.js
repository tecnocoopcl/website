// Último dato conocido de api.tecnocooperativa.cl, para cuando la API no responde.
// src/js/status.js lo reemplaza con los datos en vivo. El aviso general no sale
// de aquí: mientras carga dice «Comprobando…», para no mostrar un verde viejo.
module.exports = {
  date: "2026-11-24",
  storage: {
    usedGb: 17.1,
    freeGb: 103.1,
    totalGb: 125.4,
  },
  podCount: 1,
  kwhMonth: 0.61, // kwh_month: lo medido en el mes en curso
  kwhTotal: 0.61, // kwh: lo medido desde la primera lectura
  // Las máquinas que informa la API (nodes). `onDemand` es una máquina que se
  // enciende cuando se necesita: apagada está durmiendo, no caída.
  nodes: [
    { id: "pi5", up: true, onDemand: false },
    { id: "pc", up: false, onDemand: true },
    { id: "pi3", up: false, onDemand: false },
  ],
  // Qué sabe hacer cada máquina, sin modelo ni nombre interno: a quien visita le
  // importa si está operativa y para qué sirve, no cuál es.
  nodeNames: {
    pi5: { nombre: "Servicios y APIs", detalle: "Siempre encendida. Corre las APIs, los Pods y los sitios de la cooperativa." },
    pc: { nombre: "Inteligencia artificial y tareas pesadas", detalle: "Se enciende cuando hace falta y se apaga sola por inactividad." },
    pi3: { nombre: "Servicios livianos", detalle: "Siempre encendida, como apoyo para servicios pequeños." },
  },
  services: { enabled: 4, running: 4, failing: 0 },
  // Lo que todavía no se mide.
  pendientes: [
    {
      name: "Consumo de internet",
      description: "Tráfico de red de la infraestructura. Aún no disponible.",
    },
  ],
};
