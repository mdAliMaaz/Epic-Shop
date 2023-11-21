import app from "./app";
import connectDb from "./database/dbConfig";


const port = process.env.PORT || 8080


connectDb().then(() => {
    app.listen(port, () => console.log(`Server running at ${port}`))
})


