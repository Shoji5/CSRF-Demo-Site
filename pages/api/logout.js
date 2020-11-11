const cookie = require("cookie");

export default function (req, res) {
    res.setHeader(
        "Set-Cookie",
        cookie.serialize("id", "", { expires: new Date(2000, 1, 1) })
    );
    res.json({ message: "Logout successfully" });
}