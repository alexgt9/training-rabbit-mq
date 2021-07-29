import * as Amqp from "amqp-ts";

console.log("Consumer running...");

var connection = new Amqp.Connection("amqp://localhost");
var exchange = connection.declareExchange("aleh-exchange");
var queue = connection.declareQueue("aleh-queue");
queue.bind(exchange);
queue.activateConsumer((message) => {
    console.log("Message received: " + message.getContent());
});