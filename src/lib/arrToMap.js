export default (arr) => {
    return arr.reduce((a, k) => {
        a[k] = true;
        return a;
    }, {});
};