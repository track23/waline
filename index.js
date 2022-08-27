const Application = require('@waline/vercel');

module.exports = Application({
  async postSave(comment) {
    delete comment.ua;
    delete comment.ip;
  },
});
