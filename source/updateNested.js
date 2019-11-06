import _curry3 from './internal/_curry3';
import update from './update';

const updateNested = _curry3(function (newValue, indexes, arr){
  if (indexes.length === 1){
    if (!Array.isArray(arr)){
      return arr;
    }
    return update(indexes[0], newValue, arr);
  }

  const [index, ...rest] = indexes;
  const start = index < 0 ? arr.length : 0;
  const _idx = start + index;

  return update(index, updateNested(newValue, rest, arr[_idx]), arr);
});

export default updateNested;
