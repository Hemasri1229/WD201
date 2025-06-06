<<<<<<< HEAD
const hello = () => {
  console.log("Hello Github!");
};

hello();

const fs = require("fs");

fs.writeFile(
  "sample.txt",
  "Hello World. Welcome to Node.js File System module.",
  (err) => {
    if (err) throw err;
    console.log("File created!");
  },
);

fs.readFile("sample.txt", (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});

fs.appendFile("sample.txt", " This is my updated content", (err) => {
  if (err) throw err;
  console.log("File updated!");
});

fs.rename("sample.txt", "test.txt", (err) => {
  if (err) throw err;
  console.log("File name updated!");
});
fs.unlink("test.txt", (err) => {
  if (err) throw err;
  console.log("File test.txt deleted successfully!");
});
=======
console.log("Hello GitHub!");
>>>>>>> 43ec1ae2630b56e318b4eb2b0952cdf021fc5cb2
