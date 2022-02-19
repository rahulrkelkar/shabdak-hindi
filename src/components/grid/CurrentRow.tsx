import { MAX_WORD_LENGTH } from '../../constants/settings'
import { Cell } from './Cell'
import {syllables} from "../../lib/devStrUtils";

type Props = {
  guess: string
}

export const CurrentRow = ({ guess }: Props) => {
  const splitGuess = syllables(guess)
  const emptyCells = Array.from(Array(MAX_WORD_LENGTH - splitGuess.length))

  return (
    <div className="flex justify-center mb-1">
      {splitGuess.map((letter, i) => (
        <Cell key={i} value={letter} />
      ))}
      {emptyCells.map((_, i) => (
        <Cell key={i} />
      ))}
    </div>
  )
}
