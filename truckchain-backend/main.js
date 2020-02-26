const invoke = require('./invoke');
const quary = require('./queryAllOrdersForOwner');
const enroll = require('./enrollUser');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
//Port for backend
const port = 8080;

// Parse URL-encoded bodies (as sent by HTML forms)

app.use(express.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(express.static('build'));
app.get('/api/test', (req, res) => res.send('Hello World!'));

app.get('/api/user/enroll', async (req, res) => {
  try {
    const userEnroll = await enroll.enrollUser('user1');
    console.log(userEnroll);

    res.send({
      error: false,
      payload: userEnroll
    });
  } catch (err) {
    res.send({
      error: true,
      error: { err }
    });
  }
});

// quary all orders to load into table returned in object -> payload
app.get('/api/order/QuaryForOwner', async (req, res) => {
  try {
    console.log('Trying');
    const orderResult = await quary.quaryAllOrdersForOwner('Mads', 'RGS');

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
app.post('/api/order/:orderId', async (req, res) => {
  try {
    console.log('Trying');

    const orderResult = await invoke.createOrder(
      JSON.stringify(req.body.order),
      'RGS',
      JSON.stringify({ access: req.body.order.accessibleBy })
      // JSON.stringify({ access: req.params.orderId.access })
    );

    console.log('OrderResult', orderResult);

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
