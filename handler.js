'use strict';

module.exports.happyHackingBro = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Happy Hacking Bro!',
      input: event,
    }),
  };

  callback(null, response);
};
