const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  // write your solution here

  let morse = "";
  let morseDecoded = "";

  const map = new Map(Object.entries(MORSE_TABLE));
  map.set(" ", " ");

  for (let i = 0; i <= expr.length; i = i + 10) {
    let block = expr.slice(i, i + 10);
    if (block == "**********") {
      morse += " ";
    } else {
      for (let ii = 0; ii <= block.length; ii = ii + 2) {
        x = block.slice(ii, ii + 2);
        if (x === "10") {
          morse += ".";
        } else if (x === "11") {
          morse += "-";
        } 
      }
    }
    if (morse !== "") {
      morseDecoded += map.get(morse);
      morse = "";
    }
  }
  return morseDecoded;
}

module.exports = {
  decode,
};
