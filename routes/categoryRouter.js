import express from 'express'
import expressAsyncHandler from 'express-async-handler';
import Category from './../models/category.js'

const categoryRouter = express.Router();

categoryRouter.get(
	'/get-categories',
	expressAsyncHandler(async (req, res) => {
		const categories = await Category.find({}).sort({ _id: -1 })
		res.send(categories);
	})
);

export default categoryRouter;
