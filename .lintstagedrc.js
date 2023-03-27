const path = require("path");

const buildEslintCommand = (filenames) => {
  console.log("commit lint!");
  return `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;
};

module.exports = {
  "*.{js,jsx,ts,tsx}": [buildEslintCommand],
};
