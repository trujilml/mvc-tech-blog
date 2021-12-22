const Post = require('./Post');
const User = require('./User');
const Comment = require('./Comment');

User.hasMany

Post.belongsTo

User.belongsToMany

Post.belongsToMany

Comment.belongsTo

Comment.belongsTo

User.hasMany

Post.hasMany

module.exports = { User, Post, Comment };