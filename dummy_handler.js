const error_list = require('./error_list.js');
const product_errors = require('./product_handler_errors.js');
const error_logger = require('./error_logger.js');


function some_function(){

  console.log('entering function');
  console.log("Logging the error");
  console.log(product_errors.product_not_found.httpCode);
  console.log(product_errors.product_not_found.info);

  error_logger.create_error_log(product_errors.product_not_found.info);
}


some_function();
