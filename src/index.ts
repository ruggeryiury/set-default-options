/**
 * Utility function to merge default options with user-defined ones.
 * - - - -
 * @param {Required<NonNullable<T>>} defaultOptions - The default options of the function.
 * @param {Partial<T> | undefined} userOptions - `OPTIONAL`: User-provided options with properties to override any default option property. If `undefined` or an empty object, no default properties will be replaced.
 * @returns {Required<NonNullable<T>>} - The default options merged with given user options.
 */
const setDefaultOptions = <T>(defaultOptions: Required<NonNullable<T>>, userOptions?: Partial<T>): Required<NonNullable<T>> => {
  if (!userOptions) return defaultOptions
  return { ...defaultOptions, ...userOptions }
}

export default setDefaultOptions