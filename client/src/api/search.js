const BACKEND_URL = process.env.BACKEND_URL || "https://medicines-backend.utkarshahuja.tech";

/**
 * Searches for medicines based on the query.
 * @param {string} query - The search query string.
 * @returns {Promise<Object[]>} - Promise resolving to search results as an array of objects.
 * @throws Will throw an error if the request fails.
 */
const search = async (query) => {
  try {
    const response = await fetch(`${BACKEND_URL}/search?query=${encodeURIComponent(query)}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Search failed with status ${response.status}: ${errorData.message}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    throw new Error("Failed to fetch search data. Please try again later.");
  }
};

export default search;
