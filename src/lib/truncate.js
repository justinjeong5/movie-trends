export default (text = "", length, suffix) => {
    if (text.length > length) {
        return text.substring(0, length) + suffix;
    }
    return text;
};
