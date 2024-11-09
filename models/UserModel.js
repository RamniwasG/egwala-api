import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
	{
		username: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
        phone: { type: String },
		roles: [{ type: String, required: true }],
		seller_id: { type: mongoose.Schema.Types.ObjectId, required: false }
	},
	{
		timestamps: true,
	}
);

const User = mongoose.model('User', UserSchema);

export default User;
