const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  userId: { type: String, required: true},
  slug: { type: String, unique: true, sparse: true },
  title: { type: String, required: true, maxlength: 96},
  subTitle: { type: String, required: true},
  story: { type: String, required: true},
  createdAt: { type: String, default: Date.now },
  updatedAt: { type: String, default: Date.now },
  status: { type: String, default: 'draft'},
  author: { type: String, required: true}
});

module.exports = mongoose.model('Blog', blogSchema);
