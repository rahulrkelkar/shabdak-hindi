import {MAX_WORD_LENGTH} from "./settings";

export const GAME_TITLE = 'शब्दक-हिंदी'
export const GAME_URL = 'hindi.shabdak.com'  // TODO #17
export const WIN_MESSAGES = ['बहुत अच्छे!', 'क्या बात है!', 'बधाई हो!']
export const GAME_COPIED_MESSAGE = 'व्हॉटस्ॲप पर पेस्ट कीजिये'
export const ABOUT_GAME_MESSAGE = `'${GAME_TITLE}'के बारे में थोड़ा कुछ...`
export const NOT_ENOUGH_LETTERS_MESSAGE = `कम से कम ${MAX_WORD_LENGTH} अक्षर होना ज़रूरी हैं!`
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `आज का शब्द है ${solution}`
export const ENTER_TEXT = '\u2713'
export const DELETE_TEXT = '\u232B'
export const WORD_NOT_FOUND_MESSAGE = 'ये शब्द कहाँ से लाए? दूसरा चुनिये! (\u232B की दबाकर)'
export const STATISTICS_TITLE = 'कुछ आँकडें'
export const GUESS_DISTRIBUTION_TEXT = 'आप के जवाब ऐसे थे'
export const GUESS_DISTRIBUTION_SUBTEXT = '(दाएँ: आप ने कितने शब्द बूझे, बाएँ: आप की कोशिशें)'
export const NEW_WORD_TEXT = 'फिर मिलेंगे'
export const SHARE_TEXT = 'व्हॉटस्ॲप पर शेअर कीजिये!'
export const TOTAL_TRIES_TEXT = 'आप की कोशिशें'
export const SUCCESS_RATE_TEXT = 'औसतन सही जवाब'
export const CURRENT_STREAK_TEXT = 'अखंडीत यशोमाला'
export const BEST_STREAK_TEXT = 'सर्वोत्तम यशोमाला'
