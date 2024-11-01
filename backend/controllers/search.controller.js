const client = require('../services/elasticsearch');

async function searchMedicines(req, res) {
  const { query } = req.query;
  try {
    const searchResult = await client.search({
      index: 'medicines',
      body: {
        query: {
          multi_match: {
            query,
            fields: ['Medicine Name', 'Composition', 'Uses', 'Side_effects', 'Manufacturer'],
          },
        },
      },
    });
    res.status(200).json(searchResult.hits.hits);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { searchMedicines };
