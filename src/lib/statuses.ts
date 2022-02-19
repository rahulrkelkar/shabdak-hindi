import { solution } from './words'
import {syllables} from "./devStrUtils";

export type CharStatus = 'absent' | 'present' | 'correct'

export type CharValue =
  | 'अ'
  | 'आ'
  | 'ई'
  // | 'इ'
  | 'क'
  | 'ख'
  | 'ग'
  | 'घ'
  | 'च'
  | 'छ'
  | 'ज'
  | 'झ'
  | 'ट'
  | 'ठ'
  | 'ड'
  | 'ढ'
  | 'ण'
  | 'त'
  | 'थ'
  | 'द'
  | 'ध'
  | 'न'
  | 'प'
  | 'फ'
  | 'ब'
  | 'भ'
  | 'म'
  | 'य'
  | 'र'
  | 'ल'
  | 'व'
  | 'श'
  | 'स'
  | 'ष'
  | 'ह'
  | 'क्ष'
  | 'ज्ञ'
  | 'ळ'
  | 'सा'
  | 'शा'
  | 'दा'

export const getStatuses = (
  guesses: string[]
): { [key: string]: CharStatus } => {
  const  charObj: { [key: string]: CharStatus } = {}

  guesses.forEach((word) => {
    syllables(word).forEach((letter, i) => {
      let solutionSyllables = syllables(solution);
      if (!solutionSyllables.includes(letter)) {
        // make status absent
        return (charObj[letter] = 'absent')
      }

      if (letter === solutionSyllables[i]) {
        //make status correct
        return (charObj[letter] = 'correct')
      }

      if (charObj[letter] !== 'correct') {
        //make status present
        return (charObj[letter] = 'present')
      }
    })
  })

  return charObj
}

export const getGuessStatuses = (guess: string): CharStatus[] => {
  const splitSolution = syllables(solution)
  const splitGuess = syllables(guess)

  const solutionCharsTaken = splitSolution.map((_) => false)

  const statuses: CharStatus[] = Array.from(Array(splitGuess.length))

  // handle all correct cases first
  splitGuess.forEach((letter, i) => {
    if (letter === splitSolution[i]) {
      statuses[i] = 'correct'
      solutionCharsTaken[i] = true
      return
    }
  })

  splitGuess.forEach((letter, i) => {
    if (statuses[i]) return

    if (!splitSolution.includes(letter)) {
      // handles the absent case
      statuses[i] = 'absent'
      return
    }

    // now we are left with "present"s
    const indexOfPresentChar = splitSolution.findIndex(
      (x, index) => x === letter && !solutionCharsTaken[index]
    )

    if (indexOfPresentChar > -1) {
      statuses[i] = 'present'
      solutionCharsTaken[indexOfPresentChar] = true
      return
    } else {
      statuses[i] = 'absent'
      return
    }
  })

  return statuses
}
