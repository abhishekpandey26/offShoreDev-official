import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    projectDescription: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: String,
        enum: ['new', 'contacted', 'in-progress', 'completed', 'rejected'],
        default: 'new'
    },
    submittedAt: {
        type: Date,
        default: Date.now
    },
    ipAddress: {
        type: String
    },
    userAgent: {
        type: String
    }
}, {
    timestamps: true
});

// Index for faster queries
contactSchema.index({ email: 1, createdAt: -1 });
contactSchema.index({ status: 1 });

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;
