import mongoose, { Document } from "mongoose";

export interface Task {
  title: string;
  description: string;
  dueDate: string;
  isCompleted: boolean;
}

export interface TaskDocument extends Task, Document {
  createdAt: Date;
  updatedAt: Date;
}

const taskSchema = new mongoose.Schema<TaskDocument>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  dueDate: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  }
}, {
  timestamps: true, // Automatically create createdAt and updatedAt fields)  
});

export const TaskModel = mongoose.models.Task || mongoose.model<TaskDocument>("Task", taskSchema);