/**
 * Utility function to merge default options with user-defined ones.
 * - - - -
 * @param {Required<NonNullable<T>>} defaultOptions - The default options of the function.
 * @param {Partial<T> | undefined} userOptions - `OPTIONAL` User-provided options with properties to override any default option property. If `undefined` or an empty object, no default properties will be merged.
 * @returns {Required<NonNullable<T>>} - The default options merged with given user options.
 */
const setDefaultOptions = <T>(defaultOptions: Required<NonNullable<T>>, userOptions?: Partial<T>): Required<NonNullable<T>> => {
  if (!userOptions) return defaultOptions

  const loopObjVariables = (o: Record<string, any>): Record<string, any> => {
    const newO: Record<string, any> = {}
    for (const key of Object.keys(o)) {
      if (typeof o[key] === 'object') newO[key] = loopObjVariables(o[key])
      else newO[key] = o[key]
    }

    return newO
  }

  return { ...defaultOptions, ...loopObjVariables(userOptions) }
}

export default setDefaultOptions
