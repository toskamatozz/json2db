const path = require('path');
const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({ // Схема
  _id: {
    type: Schema.Types.ObjectId
  },
  index: {
    type: Schema.Types.Number
  },
  guid: {
    type: Schema.Types.String
  },
  isActive: {
    type: Schema.Types.Boolean
  },
  balance: {
    type: Schema.Types.String
  },
  picture: {
    type: Schema.Types.String
  },
  age: {
    type: Schema.Types.Number
  },
  eyeColor: {
    type: Schema.Types.String
  },
  name: {
    type: Schema.Types.String
  },
  gender: {
    type: Schema.Types.String
  },
  company: {
    type: Schema.Types.String
  },
  email: {
    type: Schema.Types.String
  },
  phone: {
    type: Schema.Types.String
  },
  address: {
    type: Schema.Types.String
  },
  about: {
    type: Schema.Types.String
  },
  registered: {
    type: Schema.Types.String
  },
  latitude: {
    type: Schema.Types.Number
  },
  longitude: {
    type: Schema.Types.Number
  },
  tags: {
    type: [Schema.Types.String]
  },
  friends: {
    type: [Schema.Types.Mixed]
  },
  greeting: {
    type: Schema.Types.String
  },
  favoriteFruit: {
    type: Schema.Types.String
  }
}, { timestamps: true }); // Настройки схемы, в данном случае добавить поле createdAt, updatedAt (когда создали документ, когда обновили документ)


const modelname = path.basename(__filename, '.js'); // Название модели совпадает с названием файла модели. Тут мы получаем имя файла без расширения .js
const model = mongoose.model(modelname, userSchema); // собственно создаем модель
module.exports = model;
