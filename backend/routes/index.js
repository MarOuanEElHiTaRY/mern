import express from 'express';
let indexRouter = express.Router();

indexRouter.get('/', function (req, res) {
  res.send({
    name: 'MongoDB'
  });
});

indexRouter.post('/hola', function (req, res) {
  res.send({
    name: 'Hola buenos dias'
  });
});

export default indexRouter;
