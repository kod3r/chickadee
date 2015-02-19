/**
 * Copyright reelyActive 2015
 * We believe in an open Internet of Things
 */


var MESSAGE_OK = "ok";
var MESSAGE_CREATED = "created";
var MESSAGE_NOTFOUND = "notFound";
var MESSAGE_BADREQUEST = "badRequest";
var MESSAGE_NOTIMPLEMENTED = "notImplemented";
var CODE_OK = 200;
var CODE_CREATED = 201;
var CODE_NOTFOUND = 404;
var CODE_BADREQUEST = 400;
var CODE_NOTIMPLEMENTED = 501;


/**
 * Prepares the JSON for an API query response which is successful
 * @param {Number} status Integer status code
 */
function prepareResponse(status) {
  var response = {};
  prepareMeta(response, status);
  return response;
};


/**
 * Prepares and adds the _meta to the given API query response
 * @param {Object} response JSON representation of the response
 * @param {String} status String representing the status message
 */
function prepareMeta(response, status) {
  switch(status) {
    case CODE_OK:
      response._meta = { "message": MESSAGE_OK,
                         "statusCode": CODE_OK };
      break;
    case CODE_CREATED:
      response._meta = { "message": MESSAGE_CREATED,
                         "statusCode": CODE_CREATED };
      break;
    case CODE_NOTFOUND:
      response._meta = { "message": MESSAGE_NOTFOUND,
                         "statusCode": CODE_NOTFOUND };
      break; 
    case CODE_NOTIMPLEMENTED:
      response._meta = { "message": MESSAGE_NOTIMPLEMENTED,
                         "statusCode": CODE_NOTIMPLEMENTED };
      break;  
    default:
      response._meta = { "message": MESSAGE_BADREQUEST,
                         "statusCode": CODE_BADREQUEST }; 
  }
};


module.exports.OK = CODE_OK;
module.exports.CREATED = CODE_CREATED;
module.exports.NOTFOUND = CODE_NOTFOUND;
module.exports.BADREQUEST = CODE_BADREQUEST;
module.exports.NOTIMPLEMENTED = CODE_NOTIMPLEMENTED;
module.exports.prepareResponse = prepareResponse;