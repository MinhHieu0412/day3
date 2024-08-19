const eventEmiter = require('events')
const { EventEmitter } = require('stream')

class NotifyEmitter extends EventEmitter{}
 const notifyEmitter = new NotifyEmitter()

 //dang ki listener

 notifyEmitter.on("sendNotification", (msg) => {
    console.log(`Sending notification ${msg}`);
 })

 setTimeout(() => {
    notifyEmitter.emit("sendNoti", "1");
 }, 2000);

 setTimeout(() => {
    notifyEmitter.emit("sendNoti", "2");
 }, 4000);

 setTimeout(() => {
    notifyEmitter.emit("sendNoti", "3");
 }, 6000);