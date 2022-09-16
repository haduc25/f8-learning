// case 2
// export const TYPE_LOG = 'log';
// export const TYPE_WARN = 'warn';
// export const TYPE_ERROR = 'error';


// case 3
import { TYPE_LOG } from '../constants.js';

function logger (log, type = TYPE_LOG){
    console[type](log);
}

export default logger;