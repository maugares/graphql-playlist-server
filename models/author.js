import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// Define database schema for Author
const AuthorSchema = new Schema({
  name: String,
  age: Number,
});

export default mongoose.model('author', AuthorSchema);