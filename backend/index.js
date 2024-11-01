const express = require('express');
const cors = require('cors');
const { uploadCSV } = require('./controllers/upload.controller');
const { searchMedicines } = require('./controllers/search.controller');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.post('/upload', uploadCSV);
app.get('/search', searchMedicines);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
