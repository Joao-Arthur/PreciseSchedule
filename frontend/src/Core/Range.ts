export default function Range(start: number, end: number) {
    return new Array(end - start + 1)
        .fill(undefined)
        .map((_, num) => num + start);
}
