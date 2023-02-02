import flatten from 'flat'

export default {
    flattenObjectWithoutKeys(object) {
        let flattenedObject = flatten(object);
        let flattenedObjectWithoutKeys = Object.values(flattenedObject);
        return flattenedObjectWithoutKeys;
    }
}
