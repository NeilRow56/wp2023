import mongoose from 'mongoose';

const fixedAssetSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Please enter asset name"],
            trim: true,
			maxlength: [100, "Asset name cannot exceed 100 characters"],
		},
		description: {
			type: String,
			required: [true, "Please enter asset description"],
            
		},
		dateAcquired: {
			type: Date,
			required: false,
		},
		cost: {
			type: Number,
			required: [true, 'Please enter asset cost'],
            maxlength: [20, "Asset cost cannot exceed 20 characters"],
            default:0.0
		},
		valuation: {
			type: Number,
            required:false,
			default: 0,
		},
		dateRevalued: {
			type: Date,
            required: false
		},
		category: {
			type: String,
			required: [false, 'Please enter asset category'],
			enum: {
				values: [
					'Plant and Equipment',
					'Vehicles',
					'Office Equipment',
					'Furniture and Fixtures',
					'Freehold Property',
					'Leasehold Property',
					'Investment Property',
					'Investments',
					'Goodwill',
				],
				message: 'Please select correct category for asset',
			},
		},
		writtenDownValue: {
			type: Number,
			required: true,
		},
		depreciationMethod: {
			type: String,
			required: [false, 'Please enter asset category'],
			enum: {
				values: ['Reducing Balance', 'Straight Line'],
				message: 'Please select correct method for asset',
			},
		},

		statusHP: {
			type: Boolean,
			default: false,
		},

		dateOfDisposal: {
			type: Date,
		},
		disposalProceeds: {
			type: Number,
			default: 0,
		},
		profitLossOnSale: {
			type: Number,
			default: 0,
		},
		images: [
			{
				public_id: {
					type: String,
					required: false,
				},
				url: {
					type: String,
					required: false,
				},
			},
		],
		company: {
			type: mongoose.Schema.ObjectId,
			ref: 'Company',
			required: false
		},
	},
	{ timestamps: true }
);

export default mongoose.models.FixedAsset || mongoose.model('FixedAsset', fixedAssetSchema);