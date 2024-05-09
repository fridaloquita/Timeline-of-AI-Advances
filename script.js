const events = [
     { year: 1943, description: "McCulloch and Pitts propose a computational model of a neuron." },
     { year: 1950, description: "Alan Turing publishes 'Computing Machinery and Intelligence'." },
     { year: 1956, description: "Dartmouth conference marks the beginning of AI research as an interdisciplinary field." },
     { year: 1969, description: "Minsky and Papert publish 'Perceptrons'." },
     { year: 1980, description: "Development of expert systems." },
     { year: 1997, description: "IBM's Deep Blue defeats Garry Kasparov in chess." },
     { year: 2006, description: "Geoffrey Hinton and team publish a paper on efficient training of deep neural networks." },
     { year: 2011, description: "IBM Watson wins Jeopardy! competition." },
     { year: 2012, description: "AlexNet wins ImageNet competition." },
     { year: 2016, description: "AlphaGo defeats Lee Sedol in Go." },
     { year: 2018, description: "OpenAI develops GPT, a state-of-the-art language model." },
     { year: 2020, description: "OpenAI releases GPT-3, achieving remarkable text generation and understanding." }
   ];
   
   const timelineElement = document.getElementById('timeline');
   events.forEach(event => {
     const listItem = document.createElement('li');
     listItem.classList.add('event');
     listItem.innerHTML = `
       <span class="year">${event.year}</span>
       <p class="description">${event.description}</p>
     `;
     timelineElement.appendChild(listItem);
   });
   