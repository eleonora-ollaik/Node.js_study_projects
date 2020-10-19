const fs = require('fs')
// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book); //to Json
// // console.log(bookJSON)

// // const parsedData = JSON.parse(bookJSON); //from Json to readable object
// // console.log(parsedData.author)

// fs.writeFileSync('1-json.json', bookJSON) //creates a new json file with data
// const dataBuffer = fs.readFileSync('1-json.json'); //gets binary data from the file
// const dataJSON = dataBuffer.toString(); //returns formatted data
// const data = JSON.parse(dataJSON) //parsing data as an object
// console.log(data.title)

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON);
user.name = 'Eleonora';
user.age = 25;
const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)
console.log(user)
