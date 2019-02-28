async function dbDisconnect(client) {
  await client.end()
}

module.exports = dbDisconnect