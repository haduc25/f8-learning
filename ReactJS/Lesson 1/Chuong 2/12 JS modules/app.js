//12 - JS modules

// //// case 1
// import logger from './logger/logger.js';

// // case 2
// import { 
//     TYPE_LOG,
//     TYPE_WARN,
//     TYPE_ERROR
//  } from './logger.js'

 // case 3
 import { 
    TYPE_LOG,
    TYPE_WARN,
    TYPE_ERROR
 } from './constants.js'

 import * as _logger from './logger/logger.js';
 //alias
 import * as constants from './constants.js'


//// case 4
// import logger from './logger/index.js';

// export voi new alias
import {logger2} from './logger/index.js';



// console.log(logger);
// console.log(typeof logger); //function


//// text msg 
// logger('I calling msg', 'warn')
// logger('I calling msg 2', TYPE_ERROR)
console.log(_logger); //return Module {Symbol(Symbol.toStringTag): 'Module'} & TYPE_ERROR: "error", TYPE_LOG: "log", TYPE_WARN: "warn", default: ƒ logger(log, type = TYPE_LOG)


logger2('I calling msg 2', TYPE_ERROR)
//alias
logger2('I calling msg 2', constants.TYPE_ERROR)


