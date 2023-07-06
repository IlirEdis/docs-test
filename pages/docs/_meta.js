module.exports = async () => {
  const res = await fetch(
    'https://glorious-snazzy-hot.strapiapp.com/api/doc-articles?populate[AdditionalDocs]?sort=id%3Aasc&pagination[start]=0&pagination[limit]=50',
  )
  const docs = await res.json()

  const files = docs.data.map(doc => doc.attributes.AdditionalDocs.length === 0 ? { [doc.attributes.Slug]: doc.attributes.Title } : { [doc.attributes.Slug]: { type: "folder", items: Object.fromEntries(doc.attributes.AdditionalDocs.map(subDoc => [subDoc.Slug, subDoc.Title])) } })

  return Object.assign({}, ...files)
}
