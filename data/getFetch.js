/** @format */

const c = require('./constants')

module.exports = async function (url) {
  //   console.log(url)
  const request = await fetch(c.server_url + url, {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
  })

  let data = await request.json()
  return data
}
