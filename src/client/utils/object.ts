import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import { Title } from '@client/types'

export function isEmptyObject(object) {
  if (object === null) return true
  if (object === undefined) return true
  if (object.length > 0) return false
  if (object.length === 0) return true
  if (typeof object !== 'object') return true
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) return false
  }
  return true
}

export function getPropertyKeyByType(object, type) {
  return Object.keys(object).find(key => object[key].type === type)
}

export function getTitlePlaintext(page: PageObjectResponse): string {
  const properties = page?.properties
  return (properties?.[getPropertyKeyByType(properties, 'title')] as Title).title[0].plain_text ?? ''
}
