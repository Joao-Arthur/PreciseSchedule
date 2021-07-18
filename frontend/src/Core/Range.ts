function CreateRange(start: number, end: number) {
    return new Array(end - start + 1)
        .fill(undefined)
        .map((_, num) => num + start)
        .map(String);
}

export default function Range(point: number, range: number) {
    return CreateRange(point - range, point + range);
}
