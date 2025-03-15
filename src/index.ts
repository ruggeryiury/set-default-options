import type { RequiredDeep } from 'type-fest'

/**
 * Iterates the provided `object` to append the values from this key, and return the files appended.
 * - - - -
 * @param {Record<string, any>} object The object with values to be iterable and appended to the return object.
 * @param {Record<string, any>} defaultValues The default values of the object.
 * @returns {Record<string, any>}
 */
export const iterateObjKeysAndAppendValues = (object: Record<string, any>, defaultValues: Record<string, any>): Record<string, any> => {
  const newO: Record<string, any> = { ...defaultValues }

  for (const key of Object.keys(object)) {
    if (typeof object[key] === 'object') newO[key] = iterateObjKeysAndAppendValues(object[key], defaultValues[key])
    else newO[key] = object[key]
  }

  return newO
}

/**
 * Utility function to merge default options with user-defined ones.
 * - - - -
 * @param {RequiredDeep<T>} defaultOptions The default options of the function.
 * @param {Partial<T> | undefined} userOptions `OPTIONAL` User-provided options with properties to override any default option property. If `undefined` or an empty object, no default properties will be merged.
 * @returns {RequiredDeep<T>} The default options merged with given user options.
 */
export const setDefaultOptions = <T>(defaultOptions: RequiredDeep<T>, userOptions?: Partial<T>): RequiredDeep<T> => {
  if (!userOptions) return defaultOptions
  return iterateObjKeysAndAppendValues(userOptions, defaultOptions as Record<string, any>) as RequiredDeep<T>
}
