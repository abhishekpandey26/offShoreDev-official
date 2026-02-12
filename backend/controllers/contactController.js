import Contact from '../models/Contact.js';
import { sendAdminNotification, sendClientConfirmation } from '../services/emailService.js';

/**
 * Submit contact form
 * POST /api/contact
 */
export const submitContact = async (req, res) => {
    try {
        const { name, email, phone, projectDescription } = req.body;

        // Validation
        if (!name || !email || !phone || !projectDescription) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required',
            });
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid email format',
            });
        }

        // Phone validation (basic)
        const phoneRegex = /^[0-9+\s()-]{10,}$/;
        if (!phoneRegex.test(phone)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid phone number format',
            });
        }

        // Get client IP and user agent
        const ipAddress = req.ip || req.connection.remoteAddress;
        const userAgent = req.get('user-agent');

        // Create contact record in database
        const contact = new Contact({
            name,
            email,
            phone,
            projectDescription,
            ipAddress,
            userAgent,
        });

        await contact.save();

        // Send emails asynchronously (don't wait for them to complete)
        const contactData = { name, email, phone, projectDescription };

        // Send notification to admin
        sendAdminNotification(contactData).catch(error => {
            console.error('Failed to send admin notification:', error);
        });

        // Send confirmation to client
        sendClientConfirmation(contactData).catch(error => {
            console.error('Failed to send client confirmation:', error);
        });

        // Return success response immediately
        res.status(201).json({
            success: true,
            message: 'Thank you for contacting us! We will get back to you soon.',
            data: {
                id: contact._id,
                name: contact.name,
                email: contact.email,
            },
        });

    } catch (error) {
        console.error('Error submitting contact form:', error);
        res.status(500).json({
            success: false,
            message: 'An error occurred while submitting your request. Please try again.',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined,
        });
    }
};

/**
 * Get all contacts (Admin only)
 * GET /api/contact
 */
export const getAllContacts = async (req, res) => {
    try {
        const { status, page = 1, limit = 10 } = req.query;

        const query = status ? { status } : {};
        const skip = (page - 1) * limit;

        const contacts = await Contact.find(query)
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(parseInt(limit));

        const total = await Contact.countDocuments(query);

        res.status(200).json({
            success: true,
            data: contacts,
            pagination: {
                total,
                page: parseInt(page),
                limit: parseInt(limit),
                pages: Math.ceil(total / limit),
            },
        });

    } catch (error) {
        console.error('Error fetching contacts:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching contacts',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined,
        });
    }
};

/**
 * Get single contact by ID
 * GET /api/contact/:id
 */
export const getContactById = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);

        if (!contact) {
            return res.status(404).json({
                success: false,
                message: 'Contact not found',
            });
        }

        res.status(200).json({
            success: true,
            data: contact,
        });

    } catch (error) {
        console.error('Error fetching contact:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching contact',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined,
        });
    }
};

/**
 * Update contact status
 * PATCH /api/contact/:id
 */
export const updateContactStatus = async (req, res) => {
    try {
        const { status } = req.body;

        const validStatuses = ['new', 'contacted', 'in-progress', 'completed', 'rejected'];
        if (!validStatuses.includes(status)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid status value',
            });
        }

        const contact = await Contact.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true, runValidators: true }
        );

        if (!contact) {
            return res.status(404).json({
                success: false,
                message: 'Contact not found',
            });
        }

        res.status(200).json({
            success: true,
            message: 'Contact status updated successfully',
            data: contact,
        });

    } catch (error) {
        console.error('Error updating contact:', error);
        res.status(500).json({
            success: false,
            message: 'Error updating contact',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined,
        });
    }
};

/**
 * Delete contact
 * DELETE /api/contact/:id
 */
export const deleteContact = async (req, res) => {
    try {
        const contact = await Contact.findByIdAndDelete(req.params.id);

        if (!contact) {
            return res.status(404).json({
                success: false,
                message: 'Contact not found',
            });
        }

        res.status(200).json({
            success: true,
            message: 'Contact deleted successfully',
        });

    } catch (error) {
        console.error('Error deleting contact:', error);
        res.status(500).json({
            success: false,
            message: 'Error deleting contact',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined,
        });
    }
};
