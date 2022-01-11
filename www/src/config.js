// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "16v7omt4uinuq5bq35nr6l5en9",     // CognitoClientID
  "api_base_url": "https://f597yzuaw4.execute-api.us-east-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-graystumstack.auth.us-east-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d3rbisvjiu9qfz.amplifyapp.com"                                      // AmplifyURL
};

export default config;
