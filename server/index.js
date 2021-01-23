const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express()
const port = 2000

app.use(cors());

app.get('/search', async (req, res) => {
  const { q, limit } = req.query;
  if (!q) res.json({ success: false });

  // Fetch data from api
  // Probably should put try catch for error handling
  const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${q}`);
  res.json({
    success: true,
    content: response.data.drinks.slice(0, limit)
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})