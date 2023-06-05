function convertTo1337() {
    const inputText = document.getElementById('inputText').value;
    const outputText = document.getElementById('outputText');
    const convertedText = to1337(inputText);
    outputText.textContent = convertedText;
  }
  
  function to1337(text) {
    const replacements = {
      'a': '4',
      'e': '3',
      'l': '1',
      'o': '0',
      't': '7',
      's': '5',
      'g': '9'
    };
  
    return text.replace(/[aeglost]/gi, match => replacements[match.toLowerCase()] || match);
  }
  