getPostsHandlers = (req, res) => {
    res.status(200).send("Posteo")
}

createPostsHandlers = (req, res) => {
    res.status(200).send("Posteo creado ")
}

module.exports = {
    getPostsHandlers,
    createPostsHandlers
}