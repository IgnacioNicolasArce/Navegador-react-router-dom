// src/services/productService.js

export const getProducts = async () => {
  try {
    const response = await fetch('http://localhost:5173/api/products.json', {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('Error en la respuesta de la API');
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error('Error al obtener productos:', err);
    return null;
  }
};

export const getProductById = async (id) => {
  try {
    const response = await fetch('http://localhost:5173/api/products.json', {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('Error en la respuesta de la API');
    }

    const products = await response.json();
    const product = products.find((product) => product.id === parseInt(id));
    return product;
  } catch (err) {
    console.error('Error al obtener el producto:', err);
    return null;
  }
};
