const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        trim: true,
        required: [true, 'Please provide product name'],
        maxlength: [100, 'Name can not be more than 100 characters'],
      },
      price: {
        type: Number,
        required: [true, 'Please provide product price'],
        default: 0,
      },
    },
    { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
  );

  productSchema.virtual('reviews', {
    ref: 'Review',
    localField: '_id',
    foreignField: 'product',
    justOne: false,
  });
  
  productSchema.pre('remove', async function (next) {
    await this.model('Review').deleteMany({ product: this._id });
  });


module.exports = mongoose.model('Product', productSchema);