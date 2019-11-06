
const logger = require('simple-node-logger').createSimpleFileLogger('./logs/errors.log');


function create_info_log(){

  logger.info('LOG SUCCESFULLY DONE ', new Date().toJSON());
}

function create_warn_log(body){
  logger.warn('LOG WARNING', body);
}

function create_error_log(body){
  logger.error('AN ERROR OCURRED', body);
}


create_info_log();

var error_body = {
  name: "generic error",
  description: "something is wrong"
}

create_warn_log(error_body);
create_error_log(error_body);
