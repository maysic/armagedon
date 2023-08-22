export function sliceName(string: string) {
  
  let one = string.split('(');
  let two = one[1].split(')')
  let result = two
  return result
}