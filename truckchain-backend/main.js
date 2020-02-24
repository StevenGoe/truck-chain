const invoke = require("./invoke");
const quary = require("./queryAllOrdersForOwner");
const express = require("express");
const app = express();
//Port for backend
const port = 5000;

app.get("/"); // serve index.html
app.get("/api/test", (req, res) => res.send("Hello World!"));

// quary all orders to load into table returned in object -> payload
app.get("/api/order/QuaryForOwner", async (req, res) => {
  try {
    console.log("Trying");
    const orderResult = await quary.quaryAllOrdersForOwner("Mads", "Ulla");
    console.log(orderResult);

    res.send({
      error: false,
      payload: orderResult
    });
  } catch (err) {
    res.send({
      error: true,
      errors: [err]
    });
  }
});

// initial work to create an order. a random orderId is generated on the frontend and passed through
app.post("/api/order/:orderId", async (req, res) => {
  console.log(req.body);
  try {
    console.log("Trying");
    const orderResult = await invoke.createOrder(
      JSON.stringify({ orderId: req.params.orderId }),
      "John",
      JSON.stringify({ access: [""] })
    );
    console.log(orderResult);

    res.send({
      error: false,
      payload: orderResult
    });
  } catch (err) {
    res.send({
      error: true,
      errors: [err]
    });
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
