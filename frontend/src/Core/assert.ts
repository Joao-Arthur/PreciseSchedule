export default function assert(assertion: boolean, message: string) {
    if (!assertion) throw new Error(message);
}
