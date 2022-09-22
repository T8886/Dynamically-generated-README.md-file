// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache License 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "MIT License") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "BSD 2-Clause") {
    return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
  } else if (license === "BSD 3-Clause") {
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  } else if (license === "Boost Software License 1.0") {
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
  } else if (license === "") {
    return "";
  }
}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Apache License 2.0") {
    return "(https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "MIT License") {
    return "(https://opensource.org/licenses/MIT)";
  } else if (license === "BSD 2-Clause") {
    return "(https://opensource.org/licenses/BSD-2-Clause)";
  } else if (license === "BSD 3-Clause") {
    return "(https://opensource.org/licenses/BSD-3-Clause)";
  } else if (license === "Boost Software License 1.0") {
    return "(https://www.boost.org/LICENSE_1_0.txt)";
  } else if (license === "") {
    return "";
  }
}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

 `;
}

module.exports = renderLicenseBadge
module.exports = generateMarkdown;
