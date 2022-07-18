// // 'export' k giới hạn (ex - case2)
// export const TYPE_LOG = 'log';
// export const TYPE_WARN = 'warn';
// export const TYPE_ERROR = 'error';

// //case 1: mỗi export default logger;
// function logger(log, type = 'log'){
//     console[type](log);
// }


// //case 2: có nhiều export
// function logger(log, type = TYPE_LOG){
//     console[type](log);
// }



//case 3: có nhưng file k cần 'export default
import { TYPE_LOG } from './constants.js';

function logger(log, type = TYPE_LOG){
    console[type](log);
}

// export default: 1 module chỉ có thể 'export default' 1 value
export default logger;