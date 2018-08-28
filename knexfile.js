// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/reads'
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: 'postgres://lnpxrlbmxxcofq:c23744949f545ce92dccf6a687607d12ecd743c8ddc317fdf4c435b0b1b0017d@ec2-54-235-86-226.compute-1.amazonaws.com:5432/dbn4h136c6jln7'
    
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

