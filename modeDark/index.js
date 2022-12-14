const listadoFelinos = [
  {
    title: 'El tigre',
    imgUrl: './imagenes/tiger.jpg',
    description: 'El tigre (Panthera tigris) es una de las especies​ de la subfamilia de los panterinos (familia Felidae) pertenecientes al género Panthera. Se encuentra solamente en el continente asiático; es un predador carnívoro y es la especie de félido más grande del mundo junto con el león pudiendo alcanzar ambos un tamaño comparable al de los fósiles de félidos de mayor tamaño.',
    createdAt: '2021-06-01T23:12:11.837Z'
  },
  {
    title: 'El leon',
    imgUrl: './imagenes/leon.jpg',
    description: 'El león (Panthera leo) es un mamífero carnívoro de la familia de los félidos y una de las cinco especies del género Panthera. Los leones salvajes viven en poblaciones cada vez más dispersas y fragmentadas del África subsahariana (a excepción de las regiones selváticas de la costa del Atlántico y la cuenca del Congo) y una pequeña zona del noroeste de India',
    createdAt: '2021-05-05T23:12:11.837Z'
  },
  {
    title: 'El leopardo',
    imgUrl: './imagenes/leopardo.jpg',
    description: 'El leopardo (Panthera pardus) es un mamífero carnívoro de familia de los félidos. Al igual que tres de los demás félidos del género Panthera: el león, el tigre y el jaguar, están caracterizados por una modificación en el hueso hioides que les permite rugir. También se lo conoce como pantera parda y, cuando presenta un pelaje completamente oscuro como pantera negra (melánico).',
    createdAt: '2021-05-05T23:12:11.837Z'
  },
  {
    title: 'La pantera negra',
    imgUrl: './imagenes/pantera-negra.jpg',
    description: 'La pantera negra es una variación negra (melanismo) de varias especies de grandes félidos, en especial del leopardo (Panthera pardus) y del jaguar (Panthera onca). Pero cabe recalcar que no es una nueva especie, ni siquiera una subespecie, es simplemente una variación negra de estos animales.',
    createdAt: '2021-04-09T23:12:11.837Z'
  },
  {
    title: 'El jaguar',
    imgUrl: './imagenes/jaguar.jpg',
    description: 'El jaguar, yaguar o yaguareté (Panthera onca) es un carnívoro félido de la subfamilia de los Panterinos y género Panthera. Es la única de las cinco especies actuales de este género que se encuentra en América. También es el mayor félido de América y el tercero del mundo, después del tigre (Panthera tigris) y el león (Panthera leo).',
    createdAt: '2021-05-18T23:12:11.837Z'
  },
  {
    title: 'El guepardo',
    imgUrl: './imagenes/chita.jpg',
    description: 'El guepardo o chita (Acinonyx jubatus)1​ es un miembro atípico de la familia de los félidos. Es el único representante vivo del género Acinonyx. Caza gracias a su vista y a su gran velocidad. Es el animal terrestre más veloz, ya que alcanza una velocidad punta de 115 km/h en carreras de hasta cuatrocientos o quinientos metros.',
    createdAt: '2021-05-22T23:12:11.837Z'
  },
];

for (const felino of listadoFelinos) {
  const createCard = () => {
    const containerItem = document.createElement('div');
    containerItem.className = 'item';

    const image = document.createElement('img');
    image.src = felino.imgUrl;

    const subTitle = document.createElement('h2');
    subTitle.textContent = felino.title;
    // .innerText or .textContent

    const description = document.createElement('p');
    description.textContent = felino.description;

    const date = document.createElement('p');
    let fecha = new Date(felino.createdAt);
    date.textContent = `Fecha: ${fecha.getDate()}-${fecha.getMonth()}-${fecha.getFullYear()} `;

/*     containerItem.appendChild(image);
    containerItem.appendChild(subTitle);
    containerItem.appendChild(description);
    containerItem.appendChild(date); */
    containerItem.append(image);
    containerItem.append(subTitle);
    containerItem.append(description);
    containerItem.append(date);

    return containerItem;
  }

  const newCard = createCard();
  const container = document.querySelector('.contenedor');
  container.append(newCard);
}



const btndark = document.querySelector('#bdark')
const body = document.querySelector('.dark')

btndark.addEventListener('click', e => {
  body.classList.toggle('dark');

/*   body.classList.add('dark');
  body.classList.remove('dark'); */

})
