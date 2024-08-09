import {type BaseFormInEnglish, Person, Tense, type Verb, VerbObjectList, VerbType} from "../conjugator.ts";

export function getMonovalentIntransitiveVerbs(root: string, wordInEn: BaseFormInEnglish): Verb[] {
    const list = new VerbObjectList();
    const presentForms = _getPresentTense(root, wordInEn);
    list.addVerbs(presentForms); // add present tense forms
    const pastForms = _getPastTense(root, wordInEn);
    list.addVerbs(pastForms); // add past tense forms
    const futureForms = _getFutureTense(root, wordInEn);
    list.addVerbs(futureForms); // add future tense forms

    const benefactiveForms = _getBenefactiveForms(root, wordInEn)

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

    // сыплъащт
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

function _getBenefactiveForms(root: string, wordInEn: BaseFormInEnglish): Verb[] {
    const list = new VerbObjectList();

}

function _getBenefactiveOrMalefactiveOrComitativeForms(root: string,
                                                       wordInEn: BaseFormInEnglish,
                                                       type: "Benefactive" | "Malefactive" | "Comitative"): Verb[] {

    const isBenefactive = type === "Benefactive";
    const isMalefactive = type === "Malefactive";
    const isComitative = type === "Comitative";
    let prefix = "";
    let meaning = "";

    switch (type) {
        case "Benefactive":
            prefix = "${prefix}";
            meaning = "${meaning}";
            break;
        case "Comitative":
            prefix = "дэ";
            meaning = "with";
            break;
        case "Malefactive":
            prefix = "ш1о";
            meaning = "not in favor of";
            break;
    }
    const list = new VerbObjectList();

    // -- I am --

    // I am looking ${meaning} me
    list.addVerb({
        word:`-`,
        meaningInEnglish: `-`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Singular1stPerson,
        benefactivePerson: isBenefactive ? Person.Reflexive : undefined,
        malefactivePerson: isMalefactive ? Person.Reflexive : undefined,
        comitativePerson: isComitative ? Person.Reflexive : undefined,
    });
    // I am looking ${meaning} you - скъып${prefix}к1о
    list.addVerb({
        word:`сып${prefix}${root}`,
        meaningInEnglish: `I am ${(wordInEn.ing)} ${meaning} you`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Singular1stPerson,
        benefactivePerson: isBenefactive ? Person.Singular2stPerson : undefined,
        malefactivePerson: isMalefactive ? Person.Singular2stPerson : undefined,
        comitativePerson: isComitative ? Person.Singular2stPerson : undefined,
    });
    list.addVerb({
        word:`сыкъып${prefix}${root}`,
        meaningInEnglish: `I am ${(wordInEn.ing)} ${meaning} you`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Singular1stPerson,
        benefactivePerson: isBenefactive ? Person.Singular2stPerson : undefined,
        malefactivePerson: isMalefactive ? Person.Singular2stPerson : undefined,
        comitativePerson: isComitative ? Person.Singular2stPerson : undefined,
    });
    // I am looking ${meaning} him/her/it - сы${prefix}к1о
    list.addVerb({
        word:`сы${prefix}${root}`,
        meaningInEnglish: `I am ${(wordInEn.ing)} ${meaning} him/her/it`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Singular1stPerson,
        benefactivePerson: isBenefactive ? Person.Singular3rdPerson : undefined,
        malefactivePerson: isMalefactive ? Person.Singular3rdPerson : undefined,
        comitativePerson: isComitative ? Person.Singular3rdPerson : undefined,
    });
    list.addVerb({
        word:`скъы${prefix}${root}`,
        meaningInEnglish: `I am ${(wordInEn.ing)} ${meaning} him/her/it`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Singular1stPerson,
        benefactivePerson: isBenefactive ? Person.Singular3rdPerson : undefined,
        malefactivePerson: isMalefactive ? Person.Singular3rdPerson : undefined,
        comitativePerson: isComitative ? Person.Singular3rdPerson : undefined,
    });
    // I am looking ${meaning} us - скъыт${prefix}к1о
    list.addVerb({
        word:`-`,
        meaningInEnglish: `-`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Singular1stPerson,
        benefactivePerson: isBenefactive ? Person.Plural1stPerson : undefined,
        malefactivePerson: isMalefactive ? Person.Plural1stPerson : undefined,
        comitativePerson: isComitative ? Person.Plural1stPerson : undefined,
    });
    // I am looking ${meaning} you all - скъышъу${prefix}к1о
    list.addVerb({
        word:`сышъу${prefix}${root}`,
        meaningInEnglish: `I am ${(wordInEn.ing)} ${meaning} you all`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Singular1stPerson,
        benefactivePerson: isBenefactive ? Person.Plural2stPerson : undefined,
        malefactivePerson: isMalefactive ? Person.Plural2stPerson : undefined,
        comitativePerson: isComitative ? Person.Plural2stPerson : undefined,
    });
    list.addVerb({
        word:`сыкъышъу${prefix}${root}`,
        meaningInEnglish: `I am ${(wordInEn.ing)} ${meaning} you all`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Singular1stPerson,
        benefactivePerson: isBenefactive ? Person.Plural2stPerson : undefined,
        malefactivePerson: isMalefactive ? Person.Plural2stPerson : undefined,
        comitativePerson: isComitative ? Person.Plural2stPerson : undefined,
    });
    // I am looking ${meaning} them - са${prefix}к1о
    list.addVerb({
        word:`са${prefix}${root}`,
        meaningInEnglish: `I am ${(wordInEn.ing)} ${meaning} them`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Singular1stPerson,
        benefactivePerson: isBenefactive ? Person.Plural3rdPerson : undefined,
        malefactivePerson: isMalefactive ? Person.Plural3rdPerson : undefined,
        comitativePerson: isComitative ? Person.Plural3rdPerson : undefined,
    });
    // I am looking ${meaning} myself - сыз${prefix}к1ожьы
    list.addVerb({
        word:`скъыз${prefix}${root}жьы`,
        meaningInEnglish: `I am ${(wordInEn.ing)} ${meaning} myself`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Singular1stPerson,
        benefactivePerson: isBenefactive ? Person.Reflexive : undefined,
        malefactivePerson: isMalefactive ? Person.Reflexive : undefined,
        comitativePerson: isComitative ? Person.Reflexive : undefined,
    });
    list.addVerb({
        word:`сыз${prefix}${root}жьы`,
        meaningInEnglish: `I am ${(wordInEn.ing)} ${meaning} myself`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Singular1stPerson,
        benefactivePerson: isBenefactive ? Person.Reflexive : undefined,
        malefactivePerson: isMalefactive ? Person.Reflexive : undefined,
        comitativePerson: isComitative ? Person.Reflexive : undefined,
    });

    // -- You are --

    // You are looking ${meaning} me - укъыс${prefix}к1о
    list.addVerb({
        word:`укъыс${prefix}${root}`,
        meaningInEnglish: `You are ${(wordInEn.ing)} ${meaning} me`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Singular2stPerson,
        benefactivePerson: isBenefactive ? Person.Singular1stPerson : undefined,
        malefactivePerson: isMalefactive ? Person.Singular1stPerson : undefined,
        comitativePerson: isComitative ? Person.Singular1stPerson : undefined,
    });
    // You are looking ${meaning} you
    list.addVerb({
        word:`-`,
        meaningInEnglish: `-`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Singular2stPerson,
        benefactivePerson: isBenefactive ? Person.Reflexive : undefined,
        malefactivePerson: isMalefactive ? Person.Reflexive : undefined,
        comitativePerson: isComitative ? Person.Reflexive : undefined,
    });
    // You are looking ${meaning} him/her/it - у${prefix}к1о
    list.addVerb({
        word:`у${prefix}${root}`,
        meaningInEnglish: `You are ${(wordInEn.ing)} ${meaning} him/her/it`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Singular2stPerson,
        benefactivePerson: isBenefactive ? Person.Singular3rdPerson : undefined,
        malefactivePerson: isMalefactive ? Person.Singular3rdPerson : undefined,
        comitativePerson: isComitative ? Person.Singular3rdPerson : undefined,
    });
    list.addVerb({
        word:`укъы${prefix}${root}`,
        meaningInEnglish: `You are ${(wordInEn.ing)} ${meaning} him/her/it`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Singular2stPerson,
        benefactivePerson: isBenefactive ? Person.Singular3rdPerson : undefined,
        malefactivePerson: isMalefactive ? Person.Singular3rdPerson : undefined,
        comitativePerson: isComitative ? Person.Singular3rdPerson : undefined,
    });
    // You are looking ${meaning} us - укъыт${prefix}к1о
    list.addVerb({
        word:`укъыт${prefix}${root}`,
        meaningInEnglish: `You are ${(wordInEn.ing)} ${meaning} us`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Singular2stPerson,
        benefactivePerson: isBenefactive ? Person.Plural1stPerson : undefined,
        malefactivePerson: isMalefactive ? Person.Plural1stPerson : undefined,
        comitativePerson: isComitative ? Person.Plural1stPerson : undefined,
    });
    // You are looking ${meaning} you all - укъышъу${prefix}к1о
    list.addVerb({
        word:`-`,
        meaningInEnglish: `-`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Singular2stPerson,
        benefactivePerson: isBenefactive ? Person.Plural2stPerson : undefined,
        malefactivePerson: isMalefactive ? Person.Plural2stPerson : undefined,
        comitativePerson: isComitative ? Person.Plural2stPerson : undefined,
    });
    // You are looking ${meaning} them - уа${prefix}к1о
    list.addVerb({
        word:`уа${prefix}${root}`,
        meaningInEnglish: `You are ${(wordInEn.ing)} ${meaning} them`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Singular2stPerson,
        benefactivePerson: isBenefactive ? Person.Plural3rdPerson : undefined,
        malefactivePerson: isMalefactive ? Person.Plural3rdPerson : undefined,
        comitativePerson: isComitative ? Person.Plural3rdPerson : undefined,
    });
    list.addVerb({
        word:`укъа${prefix}${root}`,
        meaningInEnglish: `You are ${(wordInEn.ing)} ${meaning} them`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Singular2stPerson,
        benefactivePerson: isBenefactive ? Person.Plural3rdPerson : undefined,
        malefactivePerson: isMalefactive ? Person.Plural3rdPerson : undefined,
        comitativePerson: isComitative ? Person.Plural3rdPerson : undefined,
    });
    // You are looking ${meaning} yourself - укъыз${prefix}к1ожьы
    list.addVerb({
        word:`уз${prefix}${root}жьы`,
        meaningInEnglish: `You are ${(wordInEn.ing)} ${meaning} yourself`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Singular2stPerson,
        benefactivePerson: isBenefactive ? Person.Reflexive : undefined,
        malefactivePerson: isMalefactive ? Person.Reflexive : undefined,
        comitativePerson: isComitative ? Person.Reflexive : undefined,
    });
    // You are looking ${meaning} yourself - укъыз${prefix}к1ожьы
    list.addVerb({
        word:`укъыз${prefix}${root}жьы`,
        meaningInEnglish: `You are ${(wordInEn.ing)} ${meaning} yourself`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Singular2stPerson,
        benefactivePerson: isBenefactive ? Person.Reflexive : undefined,
        malefactivePerson: isMalefactive ? Person.Reflexive : undefined,
        comitativePerson: isComitative ? Person.Reflexive : undefined,
    });

    // -- He/She/It is --
    // He/She/It is looking ${meaning} me - къыс${prefix}к1о
    list.addVerb({
        word:`къыс${prefix}${root}`,
        meaningInEnglish: `He/She/It is ${(wordInEn.ing)} ${meaning} me`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Singular3rdPerson,
        benefactivePerson: isBenefactive ? Person.Singular1stPerson : undefined,
        malefactivePerson: isMalefactive ? Person.Singular1stPerson : undefined,
        comitativePerson: isComitative ? Person.Singular1stPerson : undefined,
    });
    // He/She/It is looking ${meaning} you - къып${prefix}к1о
    list.addVerb({
        word:`къып${prefix}${root}`,
        meaningInEnglish: `He/She/It is ${(wordInEn.ing)} ${meaning} you`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Singular3rdPerson,
        benefactivePerson: isBenefactive ? Person.Singular2stPerson : undefined,
        malefactivePerson: isMalefactive ? Person.Singular2stPerson : undefined,
        comitativePerson: isComitative ? Person.Singular2stPerson : undefined,
    });
    // He/She/It is looking ${meaning} him/her/it - ${prefix}к1о
    list.addVerb({
        word:`${prefix}${root}`,
        meaningInEnglish: `He/She/It is ${(wordInEn.ing)} ${meaning} him/her/it`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Singular3rdPerson,
        benefactivePerson: isBenefactive ? Person.Singular3rdPerson : undefined,
        malefactivePerson: isMalefactive ? Person.Singular3rdPerson : undefined,
        comitativePerson: isComitative ? Person.Singular3rdPerson : undefined,
    });
    list.addVerb({
        word:`къы${prefix}${root}`,
        meaningInEnglish: `He/She/It is ${(wordInEn.ing)} ${meaning} him/her/it`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Singular3rdPerson,
        benefactivePerson: isBenefactive ? Person.Singular3rdPerson : undefined,
        malefactivePerson: isMalefactive ? Person.Singular3rdPerson : undefined,
        comitativePerson: isComitative ? Person.Singular3rdPerson : undefined,
    });
    // He/She/It is looking ${meaning} us - къыт${prefix}к1о
    list.addVerb({
        word:`къыт${prefix}${root}`,
        meaningInEnglish: `He/She/It is ${(wordInEn.ing)} ${meaning} us`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Singular3rdPerson,
        benefactivePerson: isBenefactive ? Person.Plural1stPerson : undefined,
        malefactivePerson: isMalefactive ? Person.Plural1stPerson : undefined,
        comitativePerson: isComitative ? Person.Plural1stPerson : undefined,
    });
    // He/She/It is looking ${meaning} you all - къышъу${prefix}к1о
    list.addVerb({
        word:`къышъу${prefix}${root}`,
        meaningInEnglish: `He/She/It is ${(wordInEn.ing)} ${meaning} you all`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Singular3rdPerson,
        benefactivePerson: isBenefactive ? Person.Plural2stPerson : undefined,
        malefactivePerson: isMalefactive ? Person.Plural2stPerson : undefined,
        comitativePerson: isComitative ? Person.Plural2stPerson : undefined,
    });
    // He/She/It is looking ${meaning} them - а${prefix}к1о
    list.addVerb({
        word:`а${prefix}${root}`,
        meaningInEnglish: `He/She/It is ${(wordInEn.ing)} ${meaning} them`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Singular3rdPerson,
        benefactivePerson: isBenefactive ? Person.Plural3rdPerson : undefined,
        malefactivePerson: isMalefactive ? Person.Plural3rdPerson : undefined,
        comitativePerson: isComitative ? Person.Plural3rdPerson : undefined,
    });
    list.addVerb({
        word:`къа${prefix}${root}`,
        meaningInEnglish: `He/She/It is ${(wordInEn.ing)} ${meaning} them`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Singular3rdPerson,
        benefactivePerson: isBenefactive ? Person.Plural3rdPerson : undefined,
        malefactivePerson: isMalefactive ? Person.Plural3rdPerson : undefined,
        comitativePerson: isComitative ? Person.Plural3rdPerson : undefined,
    });
    // He/She/It is looking ${meaning} himself/herself/itself - къыз${prefix}к1ожьы
    list.addVerb({
        word:`з${prefix}${root}жьы`,
        meaningInEnglish: `He/She/It is ${(wordInEn.ing)} ${meaning} himself/herself/itself`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Singular3rdPerson,
        benefactivePerson: isBenefactive ? Person.Reflexive : undefined,
        malefactivePerson: isMalefactive ? Person.Reflexive : undefined,
        comitativePerson: isComitative ? Person.Reflexive : undefined,
    });
    list.addVerb({
        word:`къыз${prefix}${root}жьы`,
        meaningInEnglish: `He/She/It is ${(wordInEn.ing)} ${meaning} himself/herself/itself`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Singular3rdPerson,
        benefactivePerson: isBenefactive ? Person.Reflexive : undefined,
        malefactivePerson: isMalefactive ? Person.Reflexive : undefined,
        comitativePerson: isComitative ? Person.Reflexive : undefined,
    });

    // -- We are --
    // We are looking ${meaning} me - тыс${prefix}к1о
    list.addVerb({
        word:`-`,
        meaningInEnglish: `-`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Plural1stPerson,
        benefactivePerson: isBenefactive ? Person.Singular1stPerson : undefined,
        malefactivePerson: isMalefactive ? Person.Singular1stPerson : undefined,
        comitativePerson: isComitative ? Person.Singular1stPerson : undefined,
    });
    // We are looking ${meaning} you - тып${prefix}к1о
    list.addVerb({
        word:`тып${prefix}${root}`,
        meaningInEnglish: `We are ${(wordInEn.ing)} ${meaning} you`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Plural1stPerson,
        benefactivePerson: isBenefactive ? Person.Singular2stPerson : undefined,
        malefactivePerson: isMalefactive ? Person.Singular2stPerson : undefined,
        comitativePerson: isComitative ? Person.Singular2stPerson : undefined,
    });
    list.addVerb({
        word:`тып${prefix}${root}`,
        meaningInEnglish: `We are ${(wordInEn.ing)} ${meaning} you`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Plural1stPerson,
        benefactivePerson: isBenefactive ? Person.Singular2stPerson : undefined,
        malefactivePerson: isMalefactive ? Person.Singular2stPerson : undefined,
        comitativePerson: isComitative ? Person.Singular2stPerson : undefined,
    });
    list.addVerb({
        word:`ткъыып${prefix}${root}`,
        meaningInEnglish: `We are ${(wordInEn.ing)} ${meaning} you`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Plural1stPerson,
        benefactivePerson: isBenefactive ? Person.Singular2stPerson : undefined,
        malefactivePerson: isMalefactive ? Person.Singular2stPerson : undefined,
        comitativePerson: isComitative ? Person.Singular2stPerson : undefined,
    });
    // We are looking ${meaning} him/her/it - т${prefix}к1о
    list.addVerb({
        word:`т${prefix}${root}`,
        meaningInEnglish: `We are ${(wordInEn.ing)} ${meaning} him/her/it`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Plural1stPerson,
        benefactivePerson: isBenefactive ? Person.Singular3rdPerson : undefined,
        malefactivePerson: isMalefactive ? Person.Singular3rdPerson : undefined,
        comitativePerson: isComitative ? Person.Singular3rdPerson : undefined,
    });
    list.addVerb({
        word:`ткъы${prefix}${root}`,
        meaningInEnglish: `We are ${(wordInEn.ing)} ${meaning} him/her/it`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Plural1stPerson,
        benefactivePerson: isBenefactive ? Person.Singular3rdPerson : undefined,
        malefactivePerson: isMalefactive ? Person.Singular3rdPerson : undefined,
        comitativePerson: isComitative ? Person.Singular3rdPerson : undefined,
    });
    // We are looking ${meaning} us - ткъыт${prefix}к1о
    list.addVerb({
        word:`-`,
        meaningInEnglish: `-`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Plural1stPerson,
        benefactivePerson: isBenefactive ? Person.Plural1stPerson : undefined,
        malefactivePerson: isMalefactive ? Person.Plural1stPerson : undefined,
        comitativePerson: isComitative ? Person.Plural1stPerson : undefined,
    });
    // We are looking ${meaning} you all - ткъышъу${prefix}к1о
    list.addVerb({
        word:`тышъу${prefix}${root}`,
        meaningInEnglish: `We are ${(wordInEn.ing)} ${meaning} you all`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Plural1stPerson,
        benefactivePerson: isBenefactive ? Person.Plural2stPerson : undefined,
        malefactivePerson: isMalefactive ? Person.Plural2stPerson : undefined,
        comitativePerson: isComitative ? Person.Plural2stPerson : undefined,
    });
    list.addVerb({
        word:`ткъышъу${prefix}${root}`,
        meaningInEnglish: `We are ${(wordInEn.ing)} ${meaning} you all`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Plural1stPerson,
        benefactivePerson: isBenefactive ? Person.Plural2stPerson : undefined,
        malefactivePerson: isMalefactive ? Person.Plural2stPerson : undefined,
        comitativePerson: isComitative ? Person.Plural2stPerson : undefined,
    });
    // We are looking ${meaning} them - та${prefix}к1о
    list.addVerb({
        word:`та${prefix}${root}`,
        meaningInEnglish: `We are ${(wordInEn.ing)} ${meaning} them`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Plural1stPerson,
        benefactivePerson: isBenefactive ? Person.Plural3rdPerson : undefined,
        malefactivePerson: isMalefactive ? Person.Plural3rdPerson : undefined,
        comitativePerson: isComitative ? Person.Plural3rdPerson : undefined,
    });
    list.addVerb({
        word:`тыкъа${prefix}${root}`,
        meaningInEnglish: `We are ${(wordInEn.ing)} ${meaning} them`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Plural1stPerson,
        benefactivePerson: isBenefactive ? Person.Plural3rdPerson : undefined,
        malefactivePerson: isMalefactive ? Person.Plural3rdPerson : undefined,
        comitativePerson: isComitative ? Person.Plural3rdPerson : undefined,
    });
    // We are looking ${meaning} ourselves - ткъыз${prefix}к1ожьы
    list.addVerb({
        word:`тыз${prefix}${root}жьы`,
        meaningInEnglish: `We are ${(wordInEn.ing)} ${meaning} ourselves`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Plural1stPerson,
        benefactivePerson: isBenefactive ? Person.Reflexive : undefined,
        malefactivePerson: isMalefactive ? Person.Reflexive : undefined,
        comitativePerson: isComitative ? Person.Reflexive : undefined,
    });
    list.addVerb({
        word:`ткъыз${prefix}${root}жьы`,
        meaningInEnglish: `We are ${(wordInEn.ing)} ${meaning} ourselves`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Plural1stPerson,
        benefactivePerson: isBenefactive ? Person.Reflexive : undefined,
        malefactivePerson: isMalefactive ? Person.Reflexive : undefined,
        comitativePerson: isComitative ? Person.Reflexive : undefined,
    });

    // -- You all are --
    // You all are looking ${meaning} me - шъус${prefix}к1о
    list.addVerb({
        word:`шъукъыс${prefix}${root}`,
        meaningInEnglish: `You all are ${(wordInEn.ing)} ${meaning} me`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Plural2stPerson,
        benefactivePerson: isBenefactive ? Person.Singular1stPerson : undefined,
        malefactivePerson: isMalefactive ? Person.Singular1stPerson : undefined,
        comitativePerson: isComitative ? Person.Singular1stPerson : undefined,
    });
    // You all are looking ${meaning} you - шъуп${prefix}к1о
    list.addVerb({
        word:`-`,
        meaningInEnglish: `-`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Plural2stPerson,
        benefactivePerson: isBenefactive ? Person.Singular2stPerson : undefined,
        malefactivePerson: isMalefactive ? Person.Singular2stPerson : undefined,
        comitativePerson: isComitative ? Person.Singular2stPerson : undefined,
    });
    // You all are looking ${meaning} him/her/it - шъу${prefix}к1о
    list.addVerb({
        word:`шъу${prefix}${root}`,
        meaningInEnglish: `You all are ${(wordInEn.ing)} ${meaning} him/her/it`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Plural2stPerson,
        benefactivePerson: isBenefactive ? Person.Singular3rdPerson : undefined,
        malefactivePerson: isMalefactive ? Person.Singular3rdPerson : undefined,
        comitativePerson: isComitative ? Person.Singular3rdPerson : undefined,
    });
    list.addVerb({
        word:`шъукъы${prefix}${root}`,
        meaningInEnglish: `You all are ${(wordInEn.ing)} ${meaning} him/her/it`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Plural2stPerson,
        benefactivePerson: isBenefactive ? Person.Singular3rdPerson : undefined,
        malefactivePerson: isMalefactive ? Person.Singular3rdPerson : undefined,
        comitativePerson: isComitative ? Person.Singular3rdPerson : undefined,
    });
    // You all are looking ${meaning} us - шъут${prefix}к1о
    list.addVerb({
        word:`шъукъыт${prefix}${root}`,
        meaningInEnglish: `You all are ${(wordInEn.ing)} ${meaning} us`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Plural2stPerson,
        benefactivePerson: isBenefactive ? Person.Plural1stPerson : undefined,
        malefactivePerson: isMalefactive ? Person.Plural1stPerson : undefined,
        comitativePerson: isComitative ? Person.Plural1stPerson : undefined,
    });
    // You all are looking ${meaning} you all
    list.addVerb({
        word:`-`,
        meaningInEnglish: `-`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Plural2stPerson,
        benefactivePerson: isBenefactive ? Person.Plural2stPerson : undefined,
        malefactivePerson: isMalefactive ? Person.Plural2stPerson : undefined,
        comitativePerson: isComitative ? Person.Plural2stPerson : undefined,
    });
    // You all are looking ${meaning} them - шъуа${prefix}к1о
    list.addVerb({
        word:`шъуа${prefix}${root}`,
        meaningInEnglish: `You all are ${(wordInEn.ing)} ${meaning} them`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Plural2stPerson,
        benefactivePerson: isBenefactive ? Person.Plural3rdPerson : undefined,
        malefactivePerson: isMalefactive ? Person.Plural3rdPerson : undefined,
        comitativePerson: isComitative ? Person.Plural3rdPerson : undefined,
    });
    list.addVerb({
        word:`шъукъа${prefix}${root}`,
        meaningInEnglish: `You all are ${(wordInEn.ing)} ${meaning} them`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Plural2stPerson,
        benefactivePerson: isBenefactive ? Person.Plural3rdPerson : undefined,
        malefactivePerson: isMalefactive ? Person.Plural3rdPerson : undefined,
        comitativePerson: isComitative ? Person.Plural3rdPerson : undefined,
    });
    // You all are looking ${meaning} yourselves - шъуз${prefix}к1ожьы
    list.addVerb({
        word:`шъуз${prefix}${root}жьы`,
        meaningInEnglish: `You all are ${(wordInEn.ing)} ${meaning} yourselves`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Plural2stPerson,
        benefactivePerson: isBenefactive ? Person.Reflexive : undefined,
        malefactivePerson: isMalefactive ? Person.Reflexive : undefined,
        comitativePerson: isComitative ? Person.Reflexive : undefined,
    });
    list.addVerb({
        word:`шъукъыз${prefix}${root}жьы`,
        meaningInEnglish: `You all are ${(wordInEn.ing)} ${meaning} yourselves`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Plural2stPerson,
        benefactivePerson: isBenefactive ? Person.Reflexive : undefined,
        malefactivePerson: isMalefactive ? Person.Reflexive : undefined,
        comitativePerson: isComitative ? Person.Reflexive : undefined,
    });
    // -- They are --
    // They are looking ${meaning} me - къыс${prefix}к1ох
    list.addVerb({
        word:`къыс${prefix}${root}х`,
        meaningInEnglish: `They are ${(wordInEn.ing)} ${meaning} me`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Plural3rdPerson,
        benefactivePerson: isBenefactive ? Person.Singular1stPerson : undefined,
        malefactivePerson: isMalefactive ? Person.Singular1stPerson : undefined,
        comitativePerson: isComitative ? Person.Singular1stPerson : undefined,
    });
    // They are looking ${meaning} you - къып${prefix}к1ох
    list.addVerb({
        word:`къып${prefix}${root}х`,
        meaningInEnglish: `They are ${(wordInEn.ing)} ${meaning} you`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Plural3rdPerson,
        benefactivePerson: isBenefactive ? Person.Singular2stPerson : undefined,
        malefactivePerson: isMalefactive ? Person.Singular2stPerson : undefined,
        comitativePerson: isComitative ? Person.Singular2stPerson : undefined,
    });
    // They are looking ${meaning} him/her/it - ${prefix}к1ох
    list.addVerb({
        word:`${prefix}${root}х`,
        meaningInEnglish: `They are ${(wordInEn.ing)} ${meaning} him/her/it`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Plural3rdPerson,
        benefactivePerson: isBenefactive ? Person.Singular3rdPerson : undefined,
        malefactivePerson: isMalefactive ? Person.Singular3rdPerson : undefined,
        comitativePerson: isComitative ? Person.Singular3rdPerson : undefined,
    });
    list.addVerb({
        word:`къы${prefix}${root}х`,
        meaningInEnglish: `They are ${(wordInEn.ing)} ${meaning} him/her/it`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Plural3rdPerson,
        benefactivePerson: isBenefactive ? Person.Singular3rdPerson : undefined,
        malefactivePerson: isMalefactive ? Person.Singular3rdPerson : undefined,
        comitativePerson: isComitative ? Person.Singular3rdPerson : undefined,
    });
    // They are looking ${meaning} us - къыт${prefix}к1ох
    list.addVerb({
        word:`къыт${prefix}${root}х`,
        meaningInEnglish: `They are ${(wordInEn.ing)} ${meaning} us`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Plural3rdPerson,
        benefactivePerson: isBenefactive ? Person.Plural1stPerson : undefined,
        malefactivePerson: isMalefactive ? Person.Plural1stPerson : undefined,
        comitativePerson: isComitative ? Person.Plural1stPerson : undefined,
    });
    // They are looking ${meaning} you all - къышъу${prefix}к1ох
    list.addVerb({
        word:`къышъу${prefix}${root}х`,
        meaningInEnglish: `They are ${(wordInEn.ing)} ${meaning} you all`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Plural3rdPerson,
        benefactivePerson: isBenefactive ? Person.Plural2stPerson : undefined,
        malefactivePerson: isMalefactive ? Person.Plural2stPerson : undefined,
        comitativePerson: isComitative ? Person.Plural2stPerson : undefined,
    });
    // They are looking ${meaning} them - а${prefix}к1ох
    list.addVerb({
        word:`а${prefix}${root}х`,
        meaningInEnglish: `They are ${(wordInEn.ing)} ${meaning} them`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Plural3rdPerson,
        benefactivePerson: isBenefactive ? Person.Plural3rdPerson : undefined,
        malefactivePerson: isMalefactive ? Person.Plural3rdPerson : undefined,
        comitativePerson: isComitative ? Person.Plural3rdPerson : undefined,
    });
    list.addVerb({
        word:`къа${prefix}${root}х`,
        meaningInEnglish: `They are ${(wordInEn.ing)} ${meaning} them`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Plural3rdPerson,
        benefactivePerson: isBenefactive ? Person.Plural3rdPerson : undefined,
        malefactivePerson: isMalefactive ? Person.Plural3rdPerson : undefined,
        comitativePerson: isComitative ? Person.Plural3rdPerson : undefined,
    });
    // They are looking ${meaning} themselves - къыз${prefix}к1ожьы
    list.addVerb({
        word:`з${prefix}${root}хжьы`,
        meaningInEnglish: `They are ${(wordInEn.ing)} ${meaning} themselves`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Plural3rdPerson,
        benefactivePerson: isBenefactive ? Person.Reflexive : undefined,
        malefactivePerson: isMalefactive ? Person.Reflexive : undefined,
        comitativePerson: isComitative ? Person.Reflexive : undefined,
    });
    list.addVerb({
        word:`къыз${prefix}${root}хжьы`,
        meaningInEnglish: `They are ${(wordInEn.ing)} ${meaning} themselves`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Plural3rdPerson,
        benefactivePerson: isBenefactive ? Person.Reflexive : undefined,
        malefactivePerson: isMalefactive ? Person.Reflexive : undefined,
        comitativePerson: isComitative ? Person.Reflexive : undefined,
    });

    return list.getVerbs();
}
