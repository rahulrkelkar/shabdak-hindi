import {WORDS} from '../constants/wordlist'
import {VALIDGUESSES} from '../constants/validGuesses'
import {RANDOM_DATE} from "../constants/settings";

export const isWordInWordList = (word: string) => {
    return (
        WORDS.includes(word.toLowerCase()) ||
        VALIDGUESSES.includes(word.toLowerCase())
    )
}

export const isWinningWord = (word: string) => {
    return solution === word
}

const epoch = new Date('January 1, 2022 00:00:00');
const epochMs = epoch.valueOf()

const generateRandomPastDate = (): number => { // thanks to https://stackoverflow.com/a/60180035/437506
    const fromTime = epoch.getTime();
    const toTime = new Date().getTime();
    return new Date(fromTime + Math.random() * (toTime - fromTime)).valueOf();
}

export const getWordOfDay = () => {
    // January 1, 2022 Game Epoch
    const now = Date.now()
    const msInDay = 86400000
    const today = Math.floor((now - epochMs) / msInDay)
    const nextday = (today + 1) * msInDay + epochMs
    let picked: number
    if (RANDOM_DATE) {
        picked = generateRandomPastDate()
    } else {
        picked = today
    }

    let word = WORDS[picked % WORDS.length];
    return {
        solution: word,
        solutionIndex: today,
        tomorrow: nextday,
    }
}

export const {solution, solutionIndex, tomorrow} = getWordOfDay()
