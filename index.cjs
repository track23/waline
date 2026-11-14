const Application = require('@waline/vercel');

module.exports = Application({
  async preSave(comment) {
    delete comment.ua;
    delete comment.ip;
  },
});
