

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/deadpool_db'
  },


  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
  }

};
