import {MAX_WORD_LENGTH} from "./settings";
import GitInfo from 'react-git-info/macro';

export const GAME_TITLE = 'शब्दक'
export const GAME_VERSION = GitInfo().commit.shortHash || 'unknown'
export const GAME_URL = 'shabdak.com'  // TODO #17
export const WIN_MESSAGES = ['फारच छान!', 'उत्तम!', 'भले शाब्बास!']
export const GAME_COPIED_MESSAGE = 'आता व्हॉट्सॅप् वर पेस्ट करा'
export const ABOUT_GAME_MESSAGE = `'${GAME_TITLE}'विषयी थोडेसे ...`
export const NOT_ENOUGH_LETTERS_MESSAGE = `निदान ${MAX_WORD_LENGTH} तरी अक्षरं हवीत!`
export const CORRECT_WORD_MESSAGE = (solution: string) =>
    `आजचा शब्द आहे ${solution}`
export const ENTER_TEXT = '\u2713'
export const DELETE_TEXT = '\u232B'
export const WORD_NOT_FOUND_MESSAGE = 'हा कुठला शब्द? दुसरा निवडा! (\u232B कळ वापरा)'
export const STATISTICS_TITLE = 'काही आकडे'
export const GUESS_DISTRIBUTION_TEXT = 'तुमचे प्रयत्न असे होते'
export const GUESS_DISTRIBUTION_SUBTEXT = '(उजवीकडे: ओळखलेली शब्दसंख्या, डावीकडे: लागलेले प्रयत्न)'
export const NEW_WORD_TEXT = 'पुन्हा आपली भेट'
export const SHARE_TEXT = 'व्हॉट्सॅप् वर कळवा!'
export const TOTAL_TRIES_TEXT = 'तुमचे अंदाज'
export const SUCCESS_RATE_TEXT = 'यशाची सरासरी'
export const CURRENT_STREAK_TEXT = 'अखंडीत यशोमाला'
export const BEST_STREAK_TEXT = 'सर्वोत्तम यशोमाला'
