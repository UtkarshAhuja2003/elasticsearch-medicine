const fs = require('fs');
const csv = require('csv-parser');
const { Client } = require('@elastic/elasticsearch');

const client = new Client({
    node: process.env.ELASTICSEARCH_URL,
    auth: {
      apiKey: process.env.ELASTICSEARCH_API_KEY
    },
  });
const indexName = 'medicines';

async function uploadCSV() {
  const results = [];

  fs.createReadStream('../data/medicine_data.csv')
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
      console.log('Data upload complete!');
    });
}

uploadCSV().catch(console.error);
