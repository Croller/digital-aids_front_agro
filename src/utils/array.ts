export const arrRemoveExist = (arrNew: string[], arrCurr: string[]): string[] => {
  arrNew.forEach((str) => {
    if (!arrCurr.includes(str)) {
      arrCurr.push(str)
    } else {
      arrCurr.splice(arrCurr.indexOf(str), 1)
    }
  })
  return arrCurr
}
