import express from 'express';
import schema from './schema';
import { graphql } from 'graphql';
import bodyParser from 'body-parser';

let app = express();

// parse POST body as text
app.use(bodyParser.text({ type: 'application/graphql' }));

app.get('/', (req, res) => res.send('Server running...'));

app.post('/graphql', (req, res) => {
  // execute GraphQL!
  graphql(schema, req.body)
  .then((result) => {
    res.send(JSON.stringify(result, null, 2));
  });
});

app.listen(3000, function () {
  console.log('Server running on http://localhost:3000/');
});
