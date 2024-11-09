import express from 'express'
import expressAsyncHandler from 'express-async-handler';
import Milk from '../models/MilkModel.js'

const milkRouter = express.Router();

milkRouter.get(
	'/get-all-records',
	expressAsyncHandler(async (req, res) => {
		const records = await Milk.find({}).sort({ _id: -1 });
		res.send(records);
	})
);

milkRouter.post(
	'/add-new-record',
	expressAsyncHandler(async (req, res) => {
		console.log(JSON.stringify(req.body))
		const milk = await Milk({ ...req.body });
		const records = milk.save();
		res.send(records);
	})
);

export default milkRouter;
