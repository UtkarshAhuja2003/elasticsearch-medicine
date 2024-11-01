
# Medicines Search Application

A web application for searching medicine information using a user-friendly interface. This application leverages Elasticsearch for searching and is built with Next.js for the client-side.

## Features

- Search for medicines by name, composition, uses, side effects, and manufacturer.
- Responsive design using Tailwind CSS.
- Displays search results in a clean and modern card layout.

## Technologies Used

- Backend: Node.js, Express, Elasticsearch
- Frontend: Next.js, React, Tailwind CSS

## Dataset

This project uses the dataset from Kaggle: [Medicine Details Dataset](https://www.kaggle.com/datasets/singhnavjot2062001/11000-medicine-details).

---

## Backend (Server)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/UtkarshAhuja2003/elasticsearch-medicine.git
   ```

2. Navigate to the backend directory:
   ```bash
   cd backend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up environment variables:
   - Copy the sample environment file:
     ```bash
     cp .env.sample .env
     ```

5. Upload CSV data to Elasticsearch:
   - The server includes a script to upload CSV data.

### Running the Server

To start the server, run:
```bash
npm start
```

---

## Client

### Installation

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy the sample environment file:
     ```bash
     cp .sample.env .env
     ```

### Running the Client

To start the client, run:
```bash
npm run dev
```

---


## Contributing

Feel free to fork the repository and submit pull requests for any improvements or bug fixes.

---

## License

This project is licensed under the MIT License.
