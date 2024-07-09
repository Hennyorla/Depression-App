const mongoose =require('mongoose');

const Schema = mongoose.Schema;


//resource model

const resourceSchema = new Schema(
    {
      title: {
        type: String,
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
      author: {
        type: Schema.Types.ObjectId,
        ref: "Professional",
        required: true,
      },
  
      images: String,
      videos: String,
    },
    { timestamps: true }
  );
  
  const Resource = mongoose.model("Resource", resourceSchema);
  
  module.exports = Resource;
  