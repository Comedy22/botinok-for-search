import express from 'express';
import authChecker from '../middlewares/authCheck';

const indexRouter = express.Router();

indexRouter.get('/', (req, res) => {
  res.render('Layout', {});
});
indexRouter.get('/signup', (req, res) => {
  res.render('Layout', {});
});

indexRouter.get('/signup', authChecker(false), (req, res) => res.render('Layout'));
indexRouter.get('/signin', authChecker(false), (req, res) => res.render('Layout'));
indexRouter.get('/account', authChecker(true), (req, res) => res.render('Layout'));

export default indexRouter;
