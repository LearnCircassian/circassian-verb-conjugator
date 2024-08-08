
export function getIngForm(v1: string): string {
    if (v1.endsWith("e")) {
        return v1.slice(0, -1) + "ing";
    }
    if (v1.endsWith("ie")) {
        return v1.slice(0, -2) + "ying";
    }
    if (v1.endsWith("ee")) {
        return v1 + "ing";
    }
    if (v1.endsWith("ye")) {
        return v1.slice(0, -1) + "ying";
    }
    if (v1.endsWith("oe")) {
        return v1 + "ing";
    }
    if (v1.endsWith("ue")) {
        return v1 + "ing";
    }
    if (v1.endsWith("nge")) {
        return v1 + "ing";
    }
    if (v1.endsWith("nse")) {
        return v1 + "ing";
    }
    if (v1.endsWith("lse")) {
        return v1 + "ing";
    }
    if (v1.endsWith("rse")) {
        return v1 + "ing";
    }
    if (v1.endsWith("sse")) {
        return v1 + "ing";
    }
    if (v1.endsWith("tse")) {
        return v1 + "ing";
    }
    if (v1.endsWith("zse")) {
        return v1 + "ing";
    }
    return v1 + "ing";
}