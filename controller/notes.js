import { Notes } from '../models/notes.js'
import mongoose from 'mongoose';


export const getNotes = async(req, res) => {
    try {
        const notes = await Notes.find();
        res.status(200).json(notes);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createNotes = async(req, res) => {
    const { id, text, date } = req.body;

    const Note = new Notes({ id: id, text: text, date: date })

    try {
        await Note.save();

        res.status(201).json(Note);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const deleteNotes = async(req, res) => {
    const { id } = req.params;
    console.log(id);
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await Notes.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}