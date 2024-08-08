import {getMonovalentIntransitiveVerbs} from "./conjugator/monovalent.ts";

export interface BaseFormInEnglish {
    v1: string;
    v2: string;
    ing: string;
}

export enum Tense {
    Past = "Past",
    Present = "Present",
    Future = "Future",
    None = "None",
}

export enum VerbType {
    MonovalentIntransitive = "MonovalentIntransitive",
    Transitive = "Transitive",
}

export enum Person {
    Singular1stPerson = "Single1stPerson",
    Singular2stPerson = "Single2stPerson",
    Singular3rdPerson = "Single3rdPerson",
    Plural1stPerson = "Plural1stPerson",
    Plural2stPerson = "Plural2stPerson",
    Plural3rdPerson = "Plural3rdPerson",
    None = "None",
}

export type Verb = {
    word: string;
    verbType: VerbType;
    meaningInEnglish: string;
    absolutiveMarker: Person;
    ergativeMarker?: Person;
    obliqueMarker?: Person;
    tense: Tense;
    negative?: boolean;
}

export class VerbObject {
    private readonly verb: Verb;

    public constructor(verb: Verb) {
        this.verb = {
            ergativeMarker: Person.None,
            obliqueMarker: Person.None,
            negative: false,
            ...verb,
        }
    }

    public getVerb(): Verb {
        return this.verb;
    }
}

export class VerbObjectList {
    private readonly verbObjs: VerbObject[];

    public constructor() {
        this.verbObjs = [];
    }

    public getVerbs(): Verb[] {
        return this.verbObjs.map(v => v.getVerb());
    }

    public addVerb(verb: Verb) {
        this.verbObjs.push(new VerbObject(verb));
    }

    public addVerbs(verbs: Verb[]) {
        verbs.forEach(v => this.addVerb(v));
    }
}


export function generateAllVerbConjugations(infinitiveForm: string, verbType: VerbType, wordInEn: BaseFormInEnglish): Verb[] {
    const root = infinitiveForm.slice(0, -1); // remove last letter -н

    switch (verbType) {
        case VerbType.MonovalentIntransitive:
            return getMonovalentIntransitiveVerbs(root, wordInEn);
        default:
            throw new Error(`Unsupported verb type: ${verbType}`);
    }
}
