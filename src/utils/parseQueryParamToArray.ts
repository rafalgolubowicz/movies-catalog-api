const parseQueryParamToArray = <T>(
  value: T | T[] | undefined | null
): T[] => (Array.isArray(value) ? value : value ? [value] : []);

export default parseQueryParamToArray;
