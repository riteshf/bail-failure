const config = {
  verbose: true,
  bail: true,
  watchAll: false,
}

module.exports = config

// Or async function
module.exports = async () => {
  return config
}
