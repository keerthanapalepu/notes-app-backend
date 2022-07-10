import express from 'express';
import { getNotes, createNotes, deleteNotes } from '../controller/notes.js';

const router = express.Router();

router.get('/', getNotes);
router.post('/', createNotes);
router.delete('/:id', deleteNotes);

export default router;