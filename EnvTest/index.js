import "dotenv/config"

const info = process.env.API_KEY

console.log(info)

/**
 * NODE_ENV=prod VIDEO_URL="https://www.youtube.com/watch?v=X2CYWg9-2N0" node index.js
 * export NODE_ENV=prod VIDEO_URL="https://www.youtube.com/watch?v=X2CYWg9-2N0"
 */
