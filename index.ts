
enum Tense {
    Past,
    Present,
    Future,
}

enum VerbType {
    MonovalentIntransitive,
    Transitive,
}

enum Person {
    Singular1stPerson,
    Singular2stPerson,
    Singular3rdPerson,
    Plural1stPerson,
    Plural2stPerson,
    Plural3rdPerson,
    None,
}

type Verb = {
    root: string;
    verbType: VerbType;
    absolutiveMarker: Person;
    ergativeMarker?: Person;
    obliqueMarker?: Person;
    tense?: Tense;
    negative?: boolean;
}

class VerbObject {
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

class VerbObjectList {
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
}


function generateVerbTable(infinitiveForm: string, verbType: VerbType): Verb[] {
    const list = new VerbObjectList();
    const root = infinitiveForm.slice(0, -1); // remove last letter -н

    switch (verbType) {
        case VerbType.MonovalentIntransitive:
            const res = getMonovalentIntransitiveVerbConjucation(root);
            break;
    }

    return list.getVerbs();
}

function getMonovalentIntransitiveVerbConjucation(root: string): Verb[] {
    const list = new VerbObjectList();
    // сэплъэ
    list.addVerb({
        root:`сэ${root}`,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Singular1stPerson,
    });

    return list.getVerbs();
}