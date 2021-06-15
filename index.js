import dayjs from 'dayjs';
import Text1 from './text.vue'
const add = function(a, b) {
  return a + b + 9;
}
const minus = function(a, b) {
  return a  - b - 1;
}
const day = function () {
  return dayjs()
}
export {
  add, minus, day, Text1
}
