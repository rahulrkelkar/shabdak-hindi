// Just a few utility functions
// From the Unicode standard, Range: 0900–097F
// Relies heavily on the Devanagari Block Range: 0900–097F of the Unicode standard version 14.0
// We only use subsets of various vowels, consonants etc.

export const VOWELS = new Set([
    'अ', // 0905 अ DEVANAGARI LETTER A
    'आ', // 0906 आ DEVANAGARI LETTER AA
    'इ', // 0907 इ DEVANAGARI LETTER I
    'ई', // 0908 ई DEVANAGARI LETTER II
    'उ', // 0909 उ DEVANAGARI LETTER U
    'ऊ', // 090A ऊ DEVANAGARI LETTER UU
    'ऋ', // 090B ऋ DEVANAGARI LETTER VOCALIC R
    'ए', // 090F ए DEVANAGARI LETTER E
    'ऐ', // 0910 ऐ DEVANAGARI LETTER AI
    'ओ', // 0913 ओ DEVANAGARI LETTER O
    'औ', // 0914 औ DEVANAGARI LETTER AU
])
export const CONSONANTS = new Set([
    // 'क' वर्ग
    'क', // 0915 क DEVANAGARI LETTER KA
    'ख', // 0916 ख DEVANAGARI LETTER KHA
    'ग', // 0917 ग DEVANAGARI LETTER GA
    'घ', // 0918 घ DEVANAGARI LETTER GHA
    'ङ', // 0919 ङ DEVANAGARI LETTER NGA
    // 'च' वर्ग
    'च', // 091A च DEVANAGARI LETTER CA
    'छ', // 091B छ DEVANAGARI LETTER CHA
    'ज', // 091C ज DEVANAGARI LETTER JA
    'झ', // 091D झ DEVANAGARI LETTER JHA
    'ञ', // 091E ञ DEVANAGARI LETTER NYA
    // 'ट' वर्ग
    'ट', // 091F ट DEVANAGARI LETTER TTA
    'ठ', // 0920 ठ DEVANAGARI LETTER TTHA
    'ड', // 0921 ड DEVANAGARI LETTER DDA
    'ढ', // 0922 ढ DEVANAGARI LETTER DDHA
    'ण', // 0923 ण DEVANAGARI LETTER NNA
    // 'त' वर्ग
    'त', // 0924 त DEVANAGARI LETTER TA
    'थ', // 0925 थ DEVANAGARI LETTER THA
    'द', // 0926 द DEVANAGARI LETTER DA
    'ध', // 0927 ध DEVANAGARI LETTER DHA
    'न', // 0928 न DEVANAGARI LETTER NA
    // 'प' वर्ग
    'प', // 092A प DEVANAGARI LETTER PA
    'फ', // 092B फ DEVANAGARI LETTER PHA
    'ब', // 092C ब DEVANAGARI LETTER BA
    'भ', // 092D भ DEVANAGARI LETTER BHA
    'म', // 092E म DEVANAGARI LETTER MA
    // 8 अवर्गीय व्यंजने
    'य', // 092F य DEVANAGARI LETTER YA
    'र', // 0930 र DEVANAGARI LETTER RA
    'ऱ', // 0931 ऱ DEVANAGARI LETTER RRA
    'व', // 0935 व DEVANAGARI LETTER VA
    'ल', // 0932 ल DEVANAGARI LETTER LA
    'श', // 0936 श DEVANAGARI LETTER SHA
    'ष', // 0937 ष DEVANAGARI LETTER SSA
    'स', // 0938 स DEVANAGARI LETTER SA
    'ह', // 0939 ह DEVANAGARI LETTER HA
    // special
    'ळ', // 0933 ळ DEVANAGARI LETTER LLA'
])

export const SIGNS = new Set([
    'ा', // 093E ा DEVANAGARI VOWEL SIGN AA
    'ि', // 093F ि DEVANAGARI VOWEL SIGN I, stands to the left of the consonant
    'ी', // 0940 ी DEVANAGARI VOWEL SIGN II
    'ु',// 0941 ु DEVANAGARI VOWEL SIGN U
    'ू', // 0942 ू DEVANAGARI VOWEL SIGN UU
    'ृ', // 0943 ृ DEVANAGARI VOWEL SIGN VOCALIC R
    'े', // 0947 े DEVANAGARI VOWEL SIGN E
    'ै', // 0948 ै DEVANAGARI VOWEL SIGN AI
    'ो', // 094B ो DEVANAGARI VOWEL SIGN O
    'ौ', // 094C ौ DEVANAGARI VOWEL SIGN AU
    'ं',// 0902 ं DEVANAGARI SIGN ANUSVARA, Unicode standard denotes this as a sign, but not a vowel sign
    // no visarga for now
])

export const VIRAMA = '्'; // 094D ् DEVANAGARI SIGN VIRAMA, = halant (the preferred Hindi name), suppresses inherent vowel

// In the Devanagari (when used for languages like Marathi, Hindi) a syllable is the final form of an alphabet
// as it appears in a word. The general liberal grammar of a syllable follows (.) means concatenation:
// syllable = vowel | consonant | consonant.sign | consonant.special | consonant.consonant | consonant.consonant.sign | consonant.consonant.special
// This should cover a lot of words!
export function syllables(s: string): string[] {
    const a = [];
    let len = s.length;
    // console.log("finding for: " + s, " len: ", len);
    let i = 0;
    while (i < len) {
        let cur = s.charAt(i);
        if (VOWELS.has(cur)) { // is a vowel
            a.push(cur);
            i += 1;
        } else if (CONSONANTS.has(cur)) { // starts with a consonant
            if (i + 3 < len && s.charAt(i + 1) === VIRAMA && CONSONANTS.has(s.charAt(i + 2)) && (SIGNS.has(s.charAt(i + 3)))) {
                a.push(cur + VIRAMA + s.charAt(i + 2) + s.charAt(i + 3));
                i += 4;
            } else if (i + 2 < len && s.charAt(i + 1) === VIRAMA && CONSONANTS.has(s.charAt(i + 2))) {
                a.push(cur + VIRAMA + s.charAt(i + 2));
                i += 3;
            } else if (i + 1 < len && (SIGNS.has(s.charAt(i + 1)))) {
                a.push(cur + s.charAt(i + 1));
                i += 2;
            } else {
                a.push(cur);
                i += 1;
            }
        } else {
            i += 1; // other characters
        }
    }
    return a;
}
