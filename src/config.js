export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: 'us-east-2',
    BUCKET: 'notes-app-uploads-jv'
  },
  apiGateway: {
    REGION: 'us-east-2',
    URL: 'https://piimwcxts9.execute-api.us-east-2.amazonaws.com/prod'
  },
  cognito: {
    REGION: 'us-east-2',
    USER_POOL_ID: 'us-east-2_ZgMa3S9W9',
    APP_CLIENT_ID: '64crjthh83kk94bisv5g5l8h0k',
    IDENTITY_POOL_ID: 'us-east-2:a926c721-ef6f-4816-b62f-04d01c216499'
  },
  STRIPE_KEY: 'pk_test_mBaV29UgDaI1QMEFGYKaakz0'
};
