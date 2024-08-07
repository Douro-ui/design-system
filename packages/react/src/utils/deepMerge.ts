export const deepMerge = <T>(target: T, source?: T): T => {
  if (!source) return target;

  const isObject = (obj: unknown) => obj && typeof obj === 'object';

  for (const key of Object.keys(source) as Array<keyof T>) {
    const targetValue = target[key];
    const sourceValue = source[key];

    if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
      target[key] = targetValue.concat(sourceValue) as T[keyof T];
    } else if (isObject(targetValue) && isObject(sourceValue)) {
      target[key] = deepMerge({ ...targetValue }, sourceValue);
    } else {
      target[key] = sourceValue;
    }
  }

  return target;
};
