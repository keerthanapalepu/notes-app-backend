import mongoose from 'mongoose';

const notesSchema = mongoose.Schema({
    id: String,
    text: String,
    date: String
})
export const Notes = mongoose.model('Notes', notesSchema);