import {OrderedMap, Map} from 'immutable'

export function convertArrayToMap(arr, Record = Map) {
  return arr.reduce((acc, item) => {
      return acc.set(item.id, new Record(item))
    },
    new OrderedMap({}))
}