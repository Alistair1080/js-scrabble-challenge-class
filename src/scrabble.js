class Scrabble {
  constructor(word) {
    this.word = word
    this.total = 0
    this.validWord = false
    if (typeof word === 'string') {
      this.validWord = checkWord(word)
    }
    if (this.validWord === true) {
      console.log('calculate score here with function')
      this.total = calculateScore(word)
    }
  }

  score() {
    return this.total
  }
}

function checkWord(word) {
  let valid = true
  const validCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ]
  console.log(word.toUpperCase())

  for (let i = 0; i < word.length; i++) {
    console.log(word.toUpperCase()[i])
    if (validCharacters.includes(word.toUpperCase()[i]) === true) {
      console.log('character good')
    } else {
      valid = false
      console.log('character bad')
      console.log(word.toUpperCase()[i])
    }
  }

  return valid
}

function calculateScore(word) {
  let score = 0
  const scoreObject = {
    A: 1,
    E: 1,
    I: 1,
    O: 1,
    U: 1,
    L: 1,
    N: 1,
    R: 1,
    S: 1,
    T: 1,
    D: 2,
    G: 2,
    B: 3,
    C: 3,
    M: 3,
    P: 3,
    F: 4,
    H: 4,
    V: 4,
    W: 4,
    Y: 4,
    K: 5,
    J: 8,
    X: 8,
    Q: 10,
    Z: 10
  }

  // add more letters

  for (let i = 0; i < word.length; i++) {
    // console.log(word[i].toUpperCase())
    // console.log(scoreObject[word[i].toUpperCase()])
    score += scoreObject[word[i].toUpperCase()]
  }

  return score
}

const scrabble = new Scrabble('street')
scrabble.score()
console.log(scrabble.word)

// console.log(calculateScore("aei"))

module.exports = Scrabble
