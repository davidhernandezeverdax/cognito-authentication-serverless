const AWS = require('aws-sdk');
const jwt = require('jsonwebtoken');

AWS.config.update({ region: 'us-east-1' });

const cognitoClient = new AWS.CognitoIdentityServiceProvider({
  apiVersion: '2016-04-18',
});

const cognitoGateway = {
  async registerUser(email, password) {
    const params = {
      ClientId: `${process.env.COGNITO_CLIENT_ID}`,
      Username: email,
      Password: password,
      UserAttributes: [
        {
          Name: 'email',
          Value: email,
        },
      ],
    };

    return cognitoClient.signUp(params).promise();
  },

  async confirmUser(username, code) {
    const params = {
      ClientId: `${process.env.COGNITO_CLIENT_ID}`,
      Username: username,
      ConfirmationCode: code,
    };

    return cognitoClient.confirmSignUp(params).promise();
  },

  async loginUser(email, password) {
    const params = {
      AuthFlow: 'USER_PASSWORD_AUTH',
      ClientId: `${process.env.COGNITO_CLIENT_ID}`,
      AuthParameters: {
        USERNAME: email,
        PASSWORD: password,
      },
    };

    const authResult = await cognitoClient.initiateAuth(params).promise();
    const idToken = authResult.AuthenticationResult.IdToken;
    const decodedToken = jwt.decode(idToken);

    return { idToken, decodedToken };
  },

  validateToken(token) {
    try {
      return jwt.verify(token, `${process.env.COGNITO_USER_POOL_ID}`);
    } catch (error) {
      return null;
    }
  },
};

module.exports = cognitoGateway;
