
function filterik(arr, num) {
  return arr.filter((a) => a > num).length > 0 ? arr.filter((a) => a > num) : "Such values do not exist.";

}