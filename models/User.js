const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    unique: true
  },
  password: {
    type: String
  },

  characters: [
    {
      // store ObjectIds in an array
      type: Schema.Types.ObjectId,
      // the ObjectIds will refer to id's from the Character model
      ref: "Character"
    }
  ]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
