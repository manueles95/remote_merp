


const product_not_found ={
  error_code: "proderr001",
  httpCode: 204,
  info: {
    name: "No product found",
    description: "No product found matching your search",
    advice: "Make sure your data is correct",

  }
}

const product_not_inserted ={
  error_code: "proderr002",
  httpCode: 500,
  info: {
    name: "No product found",
    description: "No product found matching your search",
    advice: "Make sure your data is correct",

  }
}

module.exports = {
  product_not_found,
  product_not_inserted
}
