export default function (object, property) {
    const views = [];
    function traverse(o) {
        for (let i in o) {
            if (i === property) views.push(o[i]);
            if (!!o[i] && (typeof(o[i]) == "object")) {
                traverse(o[i]);
            }
        }
    }
    traverse(object);
    return views;
}
