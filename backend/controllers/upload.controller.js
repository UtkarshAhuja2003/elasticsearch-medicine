const fs = require('fs');
const csv = require('csv-parser');
const client = require('../services/elasticsearch');
const indexName = require('../constants');

async function uploadCSV(req, res) {
  const results = [];

  fs.createReadStream('./data/medicine_data.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', async () => {
      for (const row of results) {
        await client.index({
          index: indexName,
          body: row,
        });
      }
      await client.indices.refresh({ index: indexName });
      res.status(200).json({ message: 'Data upload complete!' });
    });
}

module.exports = { uploadCSV };
