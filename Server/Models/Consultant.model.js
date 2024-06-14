import mongoose from 'mongoose';


const consultantSchema = new mongoose.Schema({
    userId: {
        type: String,
    },
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: [true, 'phone no. is required']
    },
    specialization: {
        type: String,
        required: [true, 'Specialization is required']
    },
    experience: {
        type: String,
        requied: [true, 'Experience is required']
    },
    feesPerConsultation: {
        type: Number,
        required: [true, 'feesPerConsultation is required']
    },
    avatar: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    approved: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending'
    },
    badge: {
        type: String
    },
    reviews: {
        type: Array,
        default: []
    },
    experienceYear: {
        type: String,
        required: true
    },
    linkedinUrl: {
        type: String,
        required: true
    },
    ordersNumber: {
        type: String
    },
    tags: {
        type: Array,
        default: []
    }
}, { timestamps: true });

const Consultant = mongoose.model('Consultant', consultantSchema);

export default Consultant;
