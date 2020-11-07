const palette = {
    turquoise: "#1abc9c",
    emerald: "#2ecc71",
    peterRiver: "#3498db",
    amethyst: "#9b59b6",
    wetAsphalt: "#34495e",
    greenSea: "#16a085",
    nephritis: "#27ae60",
    belizeHole: "#2980b9",
    wisteria: "#8e44ad",
    midnightBlue: "#2c3e50",
    sunFlower: "#f1c40f",
    carrot: "#e67e22",
    alizarin: "#e74c3c",
    clouds: "#ecf0f1",
    concrete: "#95a5a6",
    orange: "#f39c12",
    pumpkin: "#d35400",
    pomegranate: "#c0392b",
    silver: "#bdc3c7",
    asbestos: "#7f8c8d"
  };

  // eslint-disable-next-line import/no-anonymous-default-export
  export default (color) => {
    if (!(color in palette)) {
      throw new Error("Color is not defined in palette");
    }
    return palette[color];
  };