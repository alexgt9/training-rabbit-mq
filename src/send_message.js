import * as Amqp from "amqp-ts";

var connection = new Amqp.Connection("amqp://localhost");
var exchange = connection.declareExchange("aleh-exchange");

connection.completeConfiguration().then(() => {
    // the following message will be received because
    // everything you defined earlier for this connection now exists
    var msg2 = new Amqp.Message(JSON.stringify({"id": 1234, "message": process.argv[2]}));
    exchange.send(msg2);
});

setTimeout(function() {
    connection.close();
    process.exit();
  }, 500);