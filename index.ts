
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
    private readonly verbConfigs: Verb;

    public constructor(verb: Verb) {
        this.verbConfigs = {
            ergativeMarker: Person.None,
            obliqueMarker: Person.None,
            negative: false,
            ...verb,
        }
    }

    public getVerb(): Verb {
        return this.verbConfigs;
    }
}



function generateVerbTable(infinitiveForm: string, verbType: VerbType): Verb[] {
    const list = [] as Verb[];
    const root = infinitiveForm.slice(0, -1); // remove last letter -н

    switch (verbType) {
        case VerbType.MonovalentIntransitive:
            const res = getMonovalentIntransitiveVerbConjucation(root);
            break;
    }

    return list;
}

function getMonovalentIntransitiveVerbConjucation(root: string): Verb[] {
    const list = [] as Verb[];
    // сэплъэ
    let v = new VerbObject({
        root:`сэ${root}`,
        verbType: VerbType.MonovalentIntransitive,
        absolutiveMarker: Person.Singular1stPerson,
    });
    list.push(v.getVerb());

    return list;
}