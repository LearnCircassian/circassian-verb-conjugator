import {generateAllVerbConjugations, VerbType} from "./conjugator.ts";
import {getIngForm} from "./englishUtils.ts";

function main() {
    const allVerbs = generateAllVerbConjugations("плъэн", VerbType.MonovalentIntransitive, {v1: "look", v2: "looked", ing: getIngForm("look")});

    console.log(`Generated ${allVerbs.length} verbs:`);
    for (const v of allVerbs) {
        console.log(v);
    }

    console.log("Done!");
}

main();