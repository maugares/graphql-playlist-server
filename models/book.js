import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// Define database schema for Book
const BookSchema = new Schema({
  name: String,
  genre: String,
  authorId: String,
});

export default mongoose.model('book', BookSchema);