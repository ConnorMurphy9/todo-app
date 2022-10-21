const Task = require("./Task");
const User = require("./User");

User.hasMany(Task, {
    foeignKey: "user_id",
    onDelete: "CASCADE",
});

Task.belongsTo(User, {
    foreignKey: "user_id",
});

module.exports = { User, Task };