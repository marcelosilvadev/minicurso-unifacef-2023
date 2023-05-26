const {bootstrap} = require('./server/server');
const environment = require('./config/environment');

bootstrap()
  .then(() => {
      console.log(`App listening on port ${environment.application.port}`)
    }
  )
  .catch((err) => console.error(err));