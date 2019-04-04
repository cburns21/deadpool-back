

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/deadpool'
  },


  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
  }

};
