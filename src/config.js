const dev = {
  STRIPE_KEY: "pk_test_mBaV29UgDaI1QMEFGYKaakz0",
  s3: {
    REGION: 'us-east-2',
    BUCKET: 'notes-app-2-api-dev-attachmentsbucket-7ingllzpskxy'
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://9behpih2y4.execute-api.us-east-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_YWd35ZPq4",
    APP_CLIENT_ID: "ut2njj46iecj2jd9smpu0bh27",
    IDENTITY_POOL_ID: "us-east-2:4e3d0abf-5073-46df-bb73-13e86a9846bc"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_mBaV29UgDaI1QMEFGYKaakz0",
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-niooka8apusc"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://5f5ok18as9.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_SblfFk7jg",
    APP_CLIENT_ID: "670259506ccnlg3vc9mfdr7nso",
    IDENTITY_POOL_ID: "us-east-2:17dd5085-3f48-4dd4-9c47-df89a789a9af"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};