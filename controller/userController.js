


class User {
    get(req, res) {
        res.send("hello API");
    }

}
module.exports = new User;