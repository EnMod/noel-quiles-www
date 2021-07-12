export function genWorks(desiredLength) {
  const results = []
  let key = 1

  const template = {
    title: 'Item',
    description: 'This is the description for Item',
    client: 'SuperClient',
    showcase: [
      {
        files: [
          { mimeType: 'image/jpeg', alt: 'Alt for Item', url: 'https://placekitten.com/200/200' },
          { mimeType: 'image/png', alt: 'Alt for Item', url: 'https://placekitten.com/200/200' }
        ]
      }
    ]
  }

  while (results.length < desiredLength) {
    const newEntry = { ...template }
    newEntry.key = key

    // Mod the data on each pass for readability
    newEntry.title += ` ${key}`
    newEntry.client += ` ${key}`
    newEntry.description += ` ${key}, made for ${newEntry.client}`
    newEntry.showcase = newEntry.showcase.map((showcase) => {
      const newFiles = showcase.files.map((file) => {
        return {
          ...file,
          alt: file.alt + ' ' + key
        }
      })

      return {
        ...showcase,
        files: newFiles
      }
    })

    results.push(newEntry)
    key++
  }

  return results
}
