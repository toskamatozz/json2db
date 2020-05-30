// конфигурация базы данных
module.exports = {
  db: {
    uri: 'mongodb://localhost:27017/json2mongoose',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
};
