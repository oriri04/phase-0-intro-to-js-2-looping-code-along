const names = ['Guadalupe', 'Ollie', 'Aki'];

function writeCards() {
  for (let i = 0; i < names.length; i++) {
    console.log(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    debugger;
  }
  return names;
}

writeCards(names);


function countDown(number) {
  for (let i = number; i >= 0; i--) {
    console.log(i);
  }
}

countDown(11); 


