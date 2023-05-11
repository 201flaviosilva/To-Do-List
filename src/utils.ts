export function generateUniqueId() {
  return Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, "");
}

export function removeDuplicates<T>(array: T[], property: keyof T): T[] {
  const uniqueValues = new Set<T[keyof T]>();
  return array.filter((obj) => {
    const value = obj[property];
    if (!uniqueValues.has(value)) {
      uniqueValues.add(value);
      return true;
    }
    return false;
  });
}
