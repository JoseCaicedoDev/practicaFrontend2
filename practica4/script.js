const imagenes = document.querySelectorAll("img");

const urlImagenes = [];

imagenes.forEach((_, index) => {
  const url = prompt(`Ingresa la url para la imagen ${index + 1}`);
  urlImagenes.push(url);
});

urlImagenes.forEach((url, index) => {

  const anclaImagen = document.querySelector(`.rutas-img-${index + 1}`);
  anclaImagen.setAttribute('href', `${url}`);
  anclaImagen.setAttribute('target', '_blank');

  const nodoImagen = document.querySelector(`#imagen-${index + 1}`);
  nodoImagen.setAttribute('src', url);
});

/*
https://concepto.de/wp-content/uploads/2019/06/satelite-artificial-e1561135688326-800x400.jpg
https://blogthinkbig.com/wp-content/uploads/sites/4/2014/07/satelites-vida-util.jpg
https://actualidadaeroespacial.com/wp-content/uploads/2021/07/ERS-1-190721-750x375.jpg */