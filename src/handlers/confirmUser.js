const cognitoGateway = require('../gateway/cognito.gateway');

exports.handler = async (event) => {
  const { email, code } = JSON.parse(event.body);

  try {
    await cognitoGateway.confirmUser(email, code);
    return { statusCode: 200, body: JSON.stringify({message: 'User confirmed successfully'})};
  } catch (error) {
    console.log("ERROR", {erroInfo: error})
    return { statusCode: 500, body: JSON.stringify(error) };
  }
};
