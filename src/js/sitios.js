const detalles = document.querySelectorAll("details");

detalles.forEach((detalle) => {
  detalle.addEventListener("toggle", () => {
    if (detalle.open) {
      // Cierra los otros detalles si están abiertos
      detalles.forEach((d) => {
        if (d !== detalle && d.open) {
          d.removeAttribute("open");
        }
      });
    }
  });
});
