const socket = io();

// //to get info from server
// socket.on('countUpdated', (count) => {
//     console.log('The count has been updated', count)
// })

// document.querySelector('#increment').addEventListener('click', () => {
//     console.log('clicked')
//     socket.emit('increment')
// })
socket.on('message', (message) => {
    console.log(message)
})