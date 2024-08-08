import {getIngForm} from "../englishUtils.ts";
import {type BaseFormInEnglish, Person, Tense, type Verb, VerbObjectList, VerbType} from "../conjugator.ts";


export function getMonovalentIntransitiveVerbs(root: string, wordInEn: BaseFormInEnglish): Verb[] {
    const list = new VerbObjectList();
    const presentForms = _getPresentTense(root, wordInEn);
    list.addVerbs(presentForms); // add present tense forms
    const pastForms = _getPastTense(root, wordInEn);
    list.addVerbs(pastForms); // add past tense forms
    const futureForms = _getFutureTense(root, wordInEn);
    list.addVerbs(futureForms); // add future tense forms

    return list.getVerbs();
}

function _getPresentTense(root: string, wordInEn: BaseFormInEnglish): Verb[] {
    const list = new VerbObjectList();

    // сэплъэ
    list.addVerb({
        word:`сэ${root}`,
        meaningInEnglish: `I am ${(wordInEn.ing)}`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Singular1stPerson,
    });
    // оплъэ
    list.addVerb({
        word:`о${root}`,
        meaningInEnglish: `You are ${(wordInEn.ing)}`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Singular2stPerson,
    });
    // мэплъэ
    list.addVerb({
        word:`мэ${root}`,
        meaningInEnglish: `He/She/It is ${(wordInEn.ing)}`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Singular3rdPerson,
    });
    // тэплъэ
    list.addVerb({
        word:`тэ${root}`,
        meaningInEnglish: `We are ${(wordInEn.ing)}`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Plural1stPerson,
    });
    // шъоплъэ
    list.addVerb({
        word:`шъо${root}`,
        meaningInEnglish: `You all are ${(wordInEn.ing)}`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Plural2stPerson,
    });
    // мэплъэх
    list.addVerb({
        word:`мэ${root}х`,
        meaningInEnglish: `They are ${(wordInEn.ing)}`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Plural3rdPerson,
    });

    return list.getVerbs();
}

function _getPastTense(root: string, wordInEn: BaseFormInEnglish): Verb[] {
    const list = new VerbObjectList();

    if (root.endsWith("ы")) {
        root += "гъ";
    } else if (root.endsWith("э")) {
        // replace last character with "гъ"
        root = root.slice(0, -1) + "агъ";
    } else if (root.endsWith("о")) {
        // replace last character with "гъ"
        root = root.slice(0, -1) + "уагъ";
    }

    // сыплъагъ
    list.addVerb({
        word:`сы${root}`,
        meaningInEnglish: `I ${(wordInEn.v2)}`,
        tense: Tense.Past,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Singular1stPerson,
    });
    // уплъагъ
    list.addVerb({
        word:`у${root}`,
        meaningInEnglish: `You ${(wordInEn.v2)}`,
        tense: Tense.Past,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Singular2stPerson,
    });
    // плъагъ
    list.addVerb({
        word:`${root}`,
        meaningInEnglish: `He/She/It ${(wordInEn.v2)}`,
        tense: Tense.Past,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Singular3rdPerson,
    });
    // тыплъагъ
    list.addVerb({
        word:`ты${root}`,
        meaningInEnglish: `We ${(wordInEn.v2)}`,
        tense: Tense.Past,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Plural1stPerson,
    });
    // шъуплъагъ
    list.addVerb({
        word:`шъу${root}`,
        meaningInEnglish: `You all ${(wordInEn.v2)}`,
        tense: Tense.Past,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Plural2stPerson,
    });
    // плъагъэх
    list.addVerb({
        word:`${root}эх`,
        meaningInEnglish: `They ${(wordInEn.v2)}`,
        tense: Tense.Past,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Plural3rdPerson,
    });

    return list.getVerbs();
}


function _getFutureTense(root: string, wordInEn: BaseFormInEnglish): Verb[] {
    const list = new VerbObjectList();
    root += "щт"

    // сыплъагъ
    list.addVerb({
        word:`сы${root}`,
        meaningInEnglish: `I will ${(wordInEn.v1)}`,
        tense: Tense.Future,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Singular1stPerson,
    });
    // уплъагъ
    list.addVerb({
        word:`у${root}`,
        meaningInEnglish: `You will ${(wordInEn.v1)}`,
        tense: Tense.Future,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Singular2stPerson,
    });
    // плъагъ
    list.addVerb({
        word:`${root}`,
        meaningInEnglish: `He/She/It will ${(wordInEn.v1)}`,
        tense: Tense.Future,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Singular3rdPerson,
    });
    // тыплъагъ
    list.addVerb({
        word:`ты${root}`,
        meaningInEnglish: `We will ${(wordInEn.v1)}`,
        tense: Tense.Future,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Plural1stPerson,
    });
    // шъуплъагъ
    list.addVerb({
        word:`шъу${root}`,
        meaningInEnglish: `You all will ${(wordInEn.v1)}`,
        tense: Tense.Future,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Plural2stPerson,
    });
    // плъагъэх
    list.addVerb({
        word:`${root}ых`,
        meaningInEnglish: `They will ${(wordInEn.v1)}`,
        tense: Tense.Future,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Plural3rdPerson,
    });

    return list.getVerbs();
}