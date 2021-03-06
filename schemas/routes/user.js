const schema = {
  type: 'object',
  properties: {
    _id: { type: 'string' },
    index: { type: 'number' },
    guid: { type: 'string' },
    isActive: { type: 'boolean' },
    balance: { type: 'string' },
    picture: { type: 'string' },
    age: { type: 'number' },
    eyeColor: { type: 'string' },
    name: { type: 'string' },
    gender: { type: 'string' },
    company: { type: 'string' },
    email: { type: 'string' },
    phone: { type: 'string' },
    address: { type: 'string' },
    about: { type: 'string' },
    registered: { type: 'string' },
    latitude: { type: 'number' },
    longitude: { type: 'number' },
    tags: { type: 'array',
      items: { type: 'string' },
    },
    friends: { type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'number' },
          name: { type: 'string' },
        },
      },
    },
    greeting: { type: 'string' },
    favoriteFruit: { type: 'string' },
  },
  additionalProperties: false,
}

module.exports = schema;
