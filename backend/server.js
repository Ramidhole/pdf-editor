import app from "./src/app.js"
import "dotenv/config"

/**
 * Starts the backend server and listens for incoming HTTP requests.
 * Uses the PORT environment variable when available, otherwise defaults to 3000.
 */


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
})
