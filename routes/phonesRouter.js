const { Router } = require('express');

const phonesRouter = Router();

phonesRouter
  .route('/')
  .post(phonesController.createPhone)
  .get(phonesController.getPhones);

phonesRouter
  .route('/:userId')
  .get(phonesController.getPhoneById)
  .patch(phonesController.updatePhone)
  .put(phonesController.updateOrCreatePhone)
  .delete(phonesController.deletePhone);

module.exports = phonesRouter;
