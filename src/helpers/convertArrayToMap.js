import {OrderedMap, Map} from 'immutable'

export function convertArrayToMap(arr, DataRecord = Map) {
  return arr.reduce((acc, item) =>
      acc.set(item.id, new DataRecord(item)),
    new OrderedMap({}))
}