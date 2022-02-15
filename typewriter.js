let sentence = "hello there from lighthouse labs";

let delay = 50;
setTimeout(() => console.log('\n'), delay * sentence.length + delay);
for (const char of sentence) {
  setTimeout(() => { process.stdout.write(char) }, delay)
  delay += 50;
}