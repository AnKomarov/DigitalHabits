export async function getInitialState () {
    const request = await fetch('http://164.90.161.80:3000/api/content')
    const data = await request.json()
  return data
}

// export async function getFolderData (dirId) {
//   const request = await fetch(`http://164.90.161.80:3000/api/content?dirId=${dirId}`)
//   const data = await request.json()
// return data
// }