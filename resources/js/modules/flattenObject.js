import flatten from 'flat'

export default function(object) {
    return Object.values(flatten(object));
}
