const router = require('./router');

const app = express();

app.use(
  express.json({
    type: 'application/vnd.api+json',
  })
);

app.use('/api', router);

app.use((err, req, res, next) => {
  if (res.headersSend) {
    return;
  }

  const errorStatus = err?.status ?? 500;
  res.status(errorStatus).send({
    errors: [
      {
        status: errorStatus,
        title: err.message ?? 'Internal Server Error',
      },
    ],
  });
});

module.exports = app;
