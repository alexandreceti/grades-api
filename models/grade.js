import mongoose from 'mongoose';

export const gradeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true,
    validate(value) {
      if (value < 0) {
        throw new Error('Valor Negativo não permitido');
      }
    },
  },
  lastModified: {
    type: Date,
    default: Date.now(),
  },
});

const gradeModel = mongoose.model('grade', gradeSchema, 'grades');

export { gradeModel };
