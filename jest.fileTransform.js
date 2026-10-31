const path = require('path');

// Static image imports (`import img from "...png"`) resolve to the same shape
// Next's bundler produces, with `src` set to the public URL of the file.
module.exports = {
  process(_source, filename) {
    const src = JSON.stringify(`/${path.basename(filename)}`);
    return {
      code: `module.exports = { src: ${src}, width: 1, height: 1, blurDataURL: "data:image/png;base64," };`,
    };
  },
};
