import { ObjectId } from "mongodb";
import * as dotenv from "dotenv";
import mongoose, {Schema, model} from "mongoose";
// for incrementing task #
// credit to mongoose docs for the increment function + schema
var incrementSchema: Schema = new mongoose.Schema ({
  _id: {type:String, required: true},
  seq: {type: Number, default: 0}
});
var counter = mongoose.model('counter', incrementSchema);
// TODO: Link task to user on creation through frontend
export const taskSchema: Schema = new mongoose.Schema ({
    title: String,
    description: String,
    taskLog: String,
    department: String,
    _id: Number,
    // note author to map to username
    author: String,
    creationDate: {type: Date, default: Date.now},
    dueDate: {type: Date},
    assignedUser: String
  }, {timestamps: true} 
 )

  const TaskCollection = mongoose.model("Task", taskSchema);
  // pre == hook on creation of task
  taskSchema.pre('save', function(next) {
    const task = this;
    counter.findByIdAndUpdate({_id: 'entityId'}, {$inc: {seq: 1}}, function (error, counter) {
      if (error){
        return next(error);
      }
      task._id = counter.seq;
      next();
    })
 })

 export default TaskCollection;