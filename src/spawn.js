'use strict'

const spawn = require('cross-spawn-promise')

module.exports = function (cmd, args, logger) {
  if (logger) logger(`Executing command: ${cmd} ${args.join(' ')}`)

  return spawn(cmd, args)
    .then(stdout => stdout.toString())
    .catch(err => {
      const stderr = err.stderr ? err.stderr.toString() : ''
      throw new Error(`Error executing command (${err.message || err}):\n${cmd} ${args.join(' ')}\n${stderr}`)
    })
}
