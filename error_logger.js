
const logger = require('simple-node-logger').createSimpleFileLogger('./logs/errors.log');


function create_info_log(error_body){

  logger.info('LOG SUCCESFULLY DONE ', error_body);
}

function create_warn_log(error_body){
  logger.warn('LOG WARNING', error_body);
}

function create_error_log(error_body){
  logger.error('AN ERROR OCURRED', error_body);
}

// 
// create_info_log();
//
// var error_body = {
//   name: "generic error",
//   description: "something is wrong"
// }
//
// create_warn_log(error_body);
// create_error_log(error_body);

module.exports = {
  create_info_log,
  create_warn_log,
  create_error_log
}
