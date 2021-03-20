var sass = require("sass");
var Fiber = require("fibers");

sass.render(
  {
    file: "./main.scss",
    importer: function (url, prev, done) {
      // ...
    },
    fiber: Fiber,
  },
  function (err, result) {
    // ...
  }
);
