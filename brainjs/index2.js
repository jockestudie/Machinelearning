const brain = require('brain.js');
const data = require('./data.json');

const network = new brain.recurrent.LSTM();

const trainingData = data.map(item => ({
    input: item.text,
    output: item.category
  }));
  
  network.train(trainingData, {
    iterations: 2000
  });                              //Tiden som beräkningar sker! 
  
  const output = network.run('The code has some bugs');   //Text som skall kontrolleras....
  
  console.log(`Category: ${output}`);