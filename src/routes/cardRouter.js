import express from 'express';
import authChecker from '../middlewares/authCheck';

import { Product } from '../../db/models';


const cardRouter = express.Router();


cardRouter.get('/', authChecker(true), async (req, res) => {
  try {
    const cards = await Product.findAll();
    const initState = { cards }
    res.render('Layout', initState);
  } catch (e) {
    res.status(500).json({ message: 'Server error' });
  }
});


export default cardRouter;