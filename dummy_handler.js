const error_list = require('./error_list.js');

const product_not_found_error ={
  error_code: "err001",
  httpCode: 204,
  info: {
    name: "No product found",
    description: "No product found matching your search",
    advice: "Make sure your data is correct",

  }
}


function some_function(){

  console.log('entering function');
  console.log("Logging the error");
  console.log(product_not_found_error.httpCode);
  console.log(product_not_found_error.info);
}


some_function();
