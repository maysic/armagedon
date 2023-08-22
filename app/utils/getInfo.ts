let API = 'ENjksTuV0T6nmWxbvRh5Gg4yrKkeyvE2HLREeepq'
// 'ENjksTuV0T6nmWxbvRh5Gg4yrKkeyvE2HLREeepq'
// rvRnYbnzIlo4Plf4IZV0Ibo1dMO8rN2UA7d6dqsR
// NZqtOHR6wLxnK5HVyOwPOJM917QDe0s6VFYfjBO8
export default async function getInfo(day: string) {
  const response = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${day}&end_date=${day}&api_key=${API}`)
  const result = await response.json()
  const aster = result?.near_earth_objects
  const asterArr = Object.values(aster)
  return asterArr

}

