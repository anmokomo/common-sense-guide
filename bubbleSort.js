function bubbleSort(list) {
  let lastIndexToSort = list.length-1
  while (lastIndexToSort > 0) {
    for (let i = 0; i <= lastIndexToSort; i++) {
      const a = list[i]
      const b = list[i+1]
      if (a > b) {
        list[i] = b
        list[i+1] = a
      }
    }
    lastIndexToSort -= 1
  }
  console.log(list)
  return list
}
const listExample = [3,6,1,2,9,14,8,7]
bubbleSort(listExample)
