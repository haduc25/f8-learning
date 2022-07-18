//case 4 - Sử dụng trong thực tế
import { TYPE_LOG } from '../constants.js';

function logger(log, type = TYPE_LOG){
    console[type](log);
}

export default logger;