const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

const PORT = 3001;

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    try {
        const r = await axios.put(
            'https://api.chatengine.io/users',
            {username: username, secret: username, first_name: username},
            {headers: {"private-key": "fc9c9bae-310e-45e2-8d7e-afee0a918de6"}}
        )
        return res.status(r.status).json(r.data)
    } catch (e) {
        return res.status(e.response.status).json(e.response.data);
    };
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));