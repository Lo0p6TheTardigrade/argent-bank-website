// const date = new Date();
const dateNow = Date.now();
// const getDate = date.getDate();
// const getMonth = date.getMonth() + 1;
// const getYear = date.getFullYear();

export const dataBalance = [
  {
    operation_1: {
      bank: { balance: 34056 },
      in: {
        date: dateNow,
        description: 'salary',
        amount: 3450,
        balance: '',
      },
      out: {
        date: dateNow,
        description: { seller: 'The Heaven Couch', article: { 1: 'couch', 2: 'candle', 3: 'lamp' } },
        amount: 766,
        balance: '',
      },
    },
    operation_2: {
      bank: { balance: 72652 },
      in: {
        date: dateNow,
        description: 'salary',
        amount: 3450,
        balance: '',
      },
      out: {
        date: dateNow,
        description: { seller: 'Grocery', article: { 1: 'milk', 2: 'food', 3: 'ice cream' } },
        amount: 63,
        balance: '',
      },
    },
  },
];
