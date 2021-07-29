import * as Amqp from "amqp-ts";

var connection = new Amqp.Connection("amqp://localhost");
var exchange = connection.declareExchange("aleh-exchange");

var msg2 = new Amqp.Message(JSON.stringify({"id": 1234, "message": "Hola"}));
exchange.send(msg2);

process.exit();