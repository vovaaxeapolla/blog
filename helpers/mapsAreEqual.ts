export function mapsAreEqual<Key, Value>(m1: Map<Key, Value>, m2: Map<Key, Value>): boolean {
    return m1.size === m2.size && Array.from(m1.keys()).every((key) => m1.get(key) === m2.get(key));
}