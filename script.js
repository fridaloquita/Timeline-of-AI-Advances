const events = [
  { year: 1943, description: "McCulloch and Pitts propose a computational model of a neuron.", image: "https://www.researchgate.net/publication/285325023/figure/fig5/AS:668583155740690@1536414054940/Artificial-model-McCulloch-and-Pitts-1943-of-a-biological-neuron-As-it-can-be.png" },
  { year: 1950, description: "Alan Turing publishes 'Computing Machinery and Intelligence'.", image: "https://i0.wp.com/historictech.com/wp-content/uploads/2021/11/IMG_6969a-1.jpg?fit=766%2C766&ssl=1" },
  { year: 1956, description: "Dartmouth conference marks the beginning of AI research as an interdisciplinary field.", image: "https://media.licdn.com/dms/image/D4E12AQHFuIAUby3aIQ/article-cover_image-shrink_720_1280/0/1695919424726?e=2147483647&v=beta&t=uuA-7hL50Q3w4lWGnmf1dno62_vfHJjJtDQ6K7EuCdY" },
  { year: 1969, description: "Minsky and Papert publish 'Perceptrons'.", image: "https://miro.medium.com/v2/resize:fit:1400/1*DsWkLnk_0APeaExD8bvsGg.png" },
  { year: 1980, description: "Development of expert systems.", image: "https://img.brainkart.com/imagebk9/KZg6kES.jpg" },
  { year: 1997, description: "IBM's Deep Blue defeats Garry Kasparov in chess.", image: "https://cdn.theatlantic.com/media/mt/science/AP96021701227.jpg" },
  { year: 2006, description: "Geoffrey Hinton and team publish a paper on efficient training of deep neural networks.", image: "https://miro.medium.com/v2/resize:fit:2000/1*CITAOoIiDNKQjxPILArJzw.png" },
  { year: 2011, description: "IBM Watson wins Jeopardy! competition.", image: "https://www.recordonline.com/gcdn/authoring/2011/02/17/NTHR/ghows-TH-8a5b645f-74f7-4e02-a347-231bd449a655-ca4878a9.jpeg?crop=799,451,x0,y3&width=799&height=451&format=pjpg&auto=webp" },
  { year: 2012, description: "AlexNet wins ImageNet competition.", image: "https://miro.medium.com/v2/resize:fit:1200/0*xFY-719luaVR1wjY.png" },
  { year: 2016, description: "AlphaGo defeats Lee Sedol in Go.", image: "https://ichef.bbci.co.uk/ace/ws/640/amz/worldservice/live/assets/images/2016/03/12/160312101844_go_game_640x360_other_nocredit.jpg" },
  { year: 2018, description: "OpenAI develops GPT, a state-of-the-art language model.", image: "https://developer-blogs.nvidia.com/wp-content/uploads/2020/07/OpenAI-GPT-3-featured-image.png" },
  { year: 2020, description: "OpenAI releases GPT-3, achieving remarkable text generation and understanding.", image: "https://miro.medium.com/v2/resize:fit:1200/1*0fQziEpgiNZDrrT5wm53Pg.jpeg" }
];
const timelineElement = document.getElementById('timeline');
events.forEach(event => {
  const listItem = document.createElement('li');
  listItem.classList.add('event');
  listItem.innerHTML = `
    <span class="year">${event.year}</span>
    <div>
      <img src="${event.image}" alt="Event Image" class="event-img">
      <p class="description">${event.description}</p>
    </div>
  `;
  timelineElement.appendChild(listItem);
});
   