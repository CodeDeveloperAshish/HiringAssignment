const BaseUrl = "https://dummyjson.com";

const getProducts = async () => {
  try {
    const response = await fetch(`${BaseUrl}/products`, {
      method: "GET", // You can change this to 'POST', 'PUT', 'DELETE', etc.
      headers: {
        "Content-Type": "application/json",
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Rethrow the error to handle it in the component
  }
};

const getProductDetail = async (productId) => {
  try {
    const response = await fetch(`${BaseUrl}/products/${productId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Rethrow the error to handle it in the component
  }
};

export default {
  getProducts,
  getProductDetail,
};
