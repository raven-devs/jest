module.exports = {
  heavyTask: (args) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`heavyTask done: ${args.milliseconds}`);
      }, args.milliseconds);
    });
  },
};
