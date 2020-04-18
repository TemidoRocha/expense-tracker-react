import axios from 'axios';

const instance = axios.create({
  baseURL: '/API',
});

const transactions = async () => {
  const result = await instance.get(`/`);
  return result.data;
};

//this service will retrieve the workspace that the user is the operator and is defined on the dropdown menu
const addTransaction = async (data) => {
  const result = await instance.post(`/addTransaction`, data);
  return result.data;
};

//route to remove the users that were previously approved
const deleteTransaction = async (id) => {
  const result = await instance.delete(`/deleteTransaction`, data);
  return result.data;
};

export { transactions, addTransaction, deleteTransaction };
