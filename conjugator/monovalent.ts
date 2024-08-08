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

    // -- I am --

    // I am looking for myself - сызфэк1ожьы
    list.addVerb({
        word:`сызфэ${root}жьы`,
        meaningInEnglish: `I am ${(wordInEn.ing)} for myself`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Singular1stPerson,
        benefactivePerson: Person.Reflexive,
    });
    // I am looking for you - скъыпфэк1о
    list.addVerb({
        word:`сыпфэ${root}`,
        meaningInEnglish: `I am ${(wordInEn.ing)} for you`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Singular1stPerson,
        benefactivePerson: Person.Singular2stPerson,
    });
    list.addVerb({
        word:`сыкъыпфэ${root}`,
        meaningInEnglish: `I am ${(wordInEn.ing)} for you`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Singular1stPerson,
        benefactivePerson: Person.Singular2stPerson,
    });
    // I am looking for him/her/it - сыфэк1о
    list.addVerb({
        word:`сыфэ${root}`,
        meaningInEnglish: `I am ${(wordInEn.ing)} for him/her/it`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Singular1stPerson,
        benefactivePerson: Person.Singular3rdPerson,
    });
    list.addVerb({
        word:`скъыфэ${root}`,
        meaningInEnglish: `I am ${(wordInEn.ing)} for him/her/it`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Singular1stPerson,
        benefactivePerson: Person.Singular3rdPerson,
    });
    // I am looking for us - скъытфэк1о
    list.addVerb({
        word:`-`,
        meaningInEnglish: `-`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Singular1stPerson,
        benefactivePerson: Person.Plural1stPerson,
    });
    // I am looking for you all - скъышъуфэк1о
    list.addVerb({
        word:`сышъуфэ${root}`,
        meaningInEnglish: `I am ${(wordInEn.ing)} for you all`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Singular1stPerson,
        benefactivePerson: Person.Plural2stPerson,
    });
    list.addVerb({
        word:`сыкъышъуфэ${root}`,
        meaningInEnglish: `I am ${(wordInEn.ing)} for you all`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Singular1stPerson,
        benefactivePerson: Person.Plural2stPerson,
    });
    // I am looking for them - сафэк1о
    list.addVerb({
        word:`сафэ${root}`,
        meaningInEnglish: `I am ${(wordInEn.ing)} for them`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Singular1stPerson,
        benefactivePerson: Person.Plural3rdPerson,
    });

    // -- You are --

    // You are looking for me - укъысфэк1о
    list.addVerb({
        word:`укъысфэ${root}`,
        meaningInEnglish: `You are ${(wordInEn.ing)} for me`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Singular2stPerson,
        benefactivePerson: Person.Singular1stPerson,
    });
    // You are looking for yourself - укъызфэк1ожьы
    list.addVerb({
        word:`узфэ${root}жьы`,
        meaningInEnglish: `You are ${(wordInEn.ing)} for yourself`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Singular2stPerson,
        benefactivePerson: Person.Reflexive,
    });
    // You are looking for him/her/it - уфэк1о
    list.addVerb({
        word:`уфэ${root}`,
        meaningInEnglish: `You are ${(wordInEn.ing)} for him/her/it`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Singular2stPerson,
        benefactivePerson: Person.Singular3rdPerson,
    });
    list.addVerb({
        word:`укъыфэ${root}`,
        meaningInEnglish: `You are ${(wordInEn.ing)} for him/her/it`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Singular2stPerson,
        benefactivePerson: Person.Singular3rdPerson,
    });
    // You are looking for us - укъытфэк1о
    list.addVerb({
        word:`укъытфэ${root}`,
        meaningInEnglish: `You are ${(wordInEn.ing)} for us`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Singular2stPerson,
        benefactivePerson: Person.Plural1stPerson,
    });
    // You are looking for you all - укъышъуфэк1о
    list.addVerb({
        word:`-`,
        meaningInEnglish: `-`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Singular2stPerson,
        benefactivePerson: Person.Plural2stPerson,
    });
    // You are looking for them - уафэк1о
    list.addVerb({
        word:`уафэ${root}`,
        meaningInEnglish: `You are ${(wordInEn.ing)} for them`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Singular2stPerson,
        benefactivePerson: Person.Plural3rdPerson,
    });
    list.addVerb({
        word:`укъафэ${root}`,
        meaningInEnglish: `You are ${(wordInEn.ing)} for them`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Singular2stPerson,
        benefactivePerson: Person.Plural3rdPerson,
    });
    // -- He/She/It is --
    // He/She/It is looking for me - къысфэк1о
    list.addVerb({
        word:`къысфэ${root}`,
        meaningInEnglish: `He/She/It is ${(wordInEn.ing)} for me`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Singular3rdPerson,
        benefactivePerson: Person.Singular1stPerson,
    });
    // He/She/It is looking for you - къыпфэк1о
    list.addVerb({
        word:`къыпфэ${root}`,
        meaningInEnglish: `He/She/It is ${(wordInEn.ing)} for you`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Singular3rdPerson,
        benefactivePerson: Person.Singular2stPerson,
    });
    // He/She/It is looking for him/her/it - фэк1о
    list.addVerb({
        word:`фэ${root}`,
        meaningInEnglish: `He/She/It is ${(wordInEn.ing)} for him/her/it`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Singular3rdPerson,
        benefactivePerson: Person.Singular3rdPerson,
    });
    list.addVerb({
        word:`къыфэ${root}`,
        meaningInEnglish: `He/She/It is ${(wordInEn.ing)} for him/her/it`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Singular3rdPerson,
        benefactivePerson: Person.Singular3rdPerson,
    });
    // He/She/It is looking for us - къытфэк1о
    list.addVerb({
        word:`къытфэ${root}`,
        meaningInEnglish: `He/She/It is ${(wordInEn.ing)} for us`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Singular3rdPerson,
        benefactivePerson: Person.Plural1stPerson,
    });
    // He/She/It is looking for you all - къышъуфэк1о
    list.addVerb({
        word:`къышъуфэ${root}`,
        meaningInEnglish: `He/She/It is ${(wordInEn.ing)} for you all`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Singular3rdPerson,
        benefactivePerson: Person.Plural2stPerson,
    });
    // He/She/It is looking for them - афэк1о
    list.addVerb({
        word:`афэ${root}`,
        meaningInEnglish: `He/She/It is ${(wordInEn.ing)} for them`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Singular3rdPerson,
        benefactivePerson: Person.Plural3rdPerson,
    });
    list.addVerb({
        word:`къафэ${root}`,
        meaningInEnglish: `He/She/It is ${(wordInEn.ing)} for them`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Singular3rdPerson,
        benefactivePerson: Person.Plural3rdPerson,
    });
    // He/She/It is looking for himself/herself/itself - къызфэк1ожьы
    list.addVerb({
        word:`зфэ${root}жьы`,
        meaningInEnglish: `He/She/It is ${(wordInEn.ing)} for himself/herself/itself`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Singular3rdPerson,
        benefactivePerson: Person.Reflexive,
    });
    list.addVerb({
        word:`къызфэ${root}жьы`,
        meaningInEnglish: `He/She/It is ${(wordInEn.ing)} for himself/herself/itself`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Singular3rdPerson,
        benefactivePerson: Person.Reflexive,
    });

    // -- We are --
    // We are looking for me - тысфэк1о
    list.addVerb({
        word:`-`,
        meaningInEnglish: `-`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Plural1stPerson,
        benefactivePerson: Person.Singular1stPerson,
    });
    // We are looking for you - тыпфэк1о
    list.addVerb({
        word:`тыпфэ${root}`,
        meaningInEnglish: `We are ${(wordInEn.ing)} for you`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Plural1stPerson,
        benefactivePerson: Person.Singular2stPerson,
    });
    list.addVerb({
        word:`ткъыыпфэ${root}`,
        meaningInEnglish: `We are ${(wordInEn.ing)} for you`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Plural1stPerson,
        benefactivePerson: Person.Singular2stPerson,
    });
    // We are looking for him/her/it - тфэк1о
    list.addVerb({
        word:`тфэ${root}`,
        meaningInEnglish: `We are ${(wordInEn.ing)} for him/her/it`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Plural1stPerson,
        benefactivePerson: Person.Singular3rdPerson,
    });
    list.addVerb({
        word:`ткъыфэ${root}`,
        meaningInEnglish: `We are ${(wordInEn.ing)} for him/her/it`,
        tense: Tense.Present,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Plural1stPerson,
        benefactivePerson: Person.Singular3rdPerson,
    });

    // -- You all are --

    return list.getVerbs();
}
