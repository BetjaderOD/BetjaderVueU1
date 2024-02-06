import axios from 'axios';


const API_URL = 'http://localhost:8080/api/vehiculos';

const guardarCarros = async (brand, model, serie, year) => {
  const params = {
    brand, model, serie, year
  };
  console.log(params);
  try {
    const response = await axios.post(API_URL, params);

    return response.data;
  } catch (error) {
    throw error;
  }
};
const API_URL_GET = 'http://localhost:8080/api/vehiculos/page';

const obtenerCarros = async (page, size, sort) => {
  const params = {
    page,
    size, sort
  };
  try {
    const response = await axios.post(API_URL_GET, null, { params });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export default {
  guardarCarros,
  obtenerCarros
};
