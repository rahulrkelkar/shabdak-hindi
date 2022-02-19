import {syllables} from "./devStrUtils";
import exp from "constants";

// test('passes basic test', () => {
//     console.log("running basic test");
//     console.log(syllables("अक्षर ओळख"));
// })

describe('syllables function', () => {
    test("when given अक्षर it returns 'अ', 'क्ष', 'र'" , () => {
        const s = "अक्षर"
        const exp = ['अ', 'क्ष', 'र']
        expect(syllables(s)).toEqual(exp)
    })
    test("when given शब्दक it returns 'श', 'ब्द', 'क'", () => {
        const s = "शब्दक"
        const exp = ['श', 'ब्द', 'क']
        expect(syllables(s)).toEqual(exp)
    })
    test("when given अन्याय it returns 'अ', 'न्या', 'य'" , () => {
        const s = "अन्याय"
        const exp = ['अ', 'न्या', 'य']
        expect(syllables(s)).toEqual(exp)
    })
})