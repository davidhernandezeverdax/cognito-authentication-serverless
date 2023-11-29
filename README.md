# AWS Cognito Authentication Service

## Overview
This project is a serverless Node.js application for user authentication and authorization, leveraging AWS Cognito and JWT (JSON Web Tokens). It provides endpoints for user registration, login, and token validation, suitable for integrating into a broader application requiring user management.

## Features
- User registration and login using AWS Cognito.
- JWT token generation for authenticated users.
- Token validation middleware for protected routes.
- Serverless deployment with AWS Lambda and API Gateway.
- Secure storage of sensitive parameters using AWS SSM.

## Getting Started

### Prerequisites
- Node.js
- npm or yarn
- AWS CLI
- Serverless Framework
- System Manager AWS

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/davidhernandezeverdax/cognito-authentication-serverless

2. Navigate to the project directory:
   ```bash
   cd cognito-authentication-serverless

3. Install dependencies:
   ```bash
   npm install

### Configuration

1. Store your AWS Cognito User Pool ID and Client ID in AWS SSM:
   ```bash
   aws ssm put-parameter --name "COGNITO_USER_POOL_ID" --value "yourUserPoolId" --type String
   aws ssm put-parameter --name "COGNITO_CLIENT_ID" --value "yourClientId" --type String

   You can also create variables manually in your console AWS Sistem Manager > Parameter Store

### Deployment
1. Install serverless globally:
   ```bash
   npm install -g serverless

2. Deploy in AWS:
   ```bash
   serverless deploy

### Usage
The service exposes the following endpoints:

POST /register: Register a new user.
POST /confirm: Confirm a user.
POST /login: Login and receive a JWT token.
Middleware for validating JWT tokens in your protected routes.
  
