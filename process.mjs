import json from "./polaris.json" assert { type: "json" };

const data = json.children.components;

// Write a function collect all the component names from the data that does not have any children
// and return an array of strings
function collectComponentNames(data) {
  // Your code here
  const result = [];

  if (data.children) {
    const keys = Object.keys(data.children);

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const child = data.children[key];

      if (child.children) {
        result.push(...collectComponentNames(child));
      } else {
        result.push(child.title);
      }
    }
  }

  return result;
}

const listOfComponentNames = collectComponentNames(data);

const listOfComponentNamesInPascalCase = listOfComponentNames
  .map((name) => {
    return (
      "'" +
      name
        .split(" ")
        .map((word) => {
          return word[0].toUpperCase() + word.slice(1);
        })
        .join("") +
      "'"
    );
  })
  .join(" | ");

// console.log(listOfComponentNamesInPascalCase);

// Write to a file
import fs from "fs";

fs.writeFileSync(
  "./output.json",
  JSON.stringify(listOfComponentNamesInPascalCase, null, 2),
);
