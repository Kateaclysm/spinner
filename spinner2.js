let end = 5;
let start = 0;
let count = 100;
let frames = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r\|   '];

for (let i = 0; i < frames.length; i++) {
  count = count += 200;
  setTimeout(() => process.stdout.write(frames[i]), count);
}