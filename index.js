function findMinAndRemoveSorted(array) {
  return array.shift()
}

function merge(array1, array2) {
  let merged = [];
  while (array1.length > 0 && array2.length > 0) {
    if (array1[0] < array2[0]) {
      merged.push(findMinAndRemoveSorted(array1))
    }
    else {
      merged.push(findMinAndRemoveSorted(array2))
    }
  }
  return merged.concat(array1).concat(array2)
}

function mergeSort(array) {
  let midway = array.length/2;
  let firstHalf = array.slice(0, midway);
  let secondHalf = array.slice(midway, array.length);
  if (array.length < 2) {
    return array
  } else {
    return merge(mergeSort(firstHalf), mergeSort(secondHalf))
  }
}
