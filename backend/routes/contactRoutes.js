import express from 'express';
import {
    submitContact,
    getAllContacts,
    getContactById,
    updateContactStatus,
    deleteContact,
} from '../controllers/contactController.js';

const router = express.Router();

// Public route - Submit contact form
router.post('/', submitContact);

// Admin routes - Manage contacts
router.get('/', getAllContacts);
router.get('/:id', getContactById);
router.patch('/:id', updateContactStatus);
router.delete('/:id', deleteContact);

export default router;
