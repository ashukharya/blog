
exports.getAll = function () {
    const options = { day: 'numeric', month: 'long',year:'numeric',hour:'numeric',minute:'numeric',second:'numeric' };
    const today = new Date();
    const day = today.toLocaleDateString("en-US", options);
    return day;
}
