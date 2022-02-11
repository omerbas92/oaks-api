import * as knex from 'knex';

function get() {
  const db = knex({
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      port: 3306,
      user: 'root',
      database: 'startup-progress',
    },

    pool: {
      min: 0,
      max: 16,

      afterCreate(conn, done) {
        console.info('on connect -> ', conn.config.host);
        done();
      },
      acquireTimeoutMillis: 30000,
      idleTimeoutMillis: 30000,
      reapIntervalMillis: 1000,
    },
    acquireConnectionTimeout: 30000,
    asyncStackTraces: true,
    debug: true,
  });

  db.on('query-error', (error) => {
    console.log(error);
  });

  return db;
}

export default { get };
