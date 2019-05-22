export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-west-2",
    BUCKET: "notes-app-uploads-graham"
  },
  apiGateway: {
    REGION: "us-west-2",
    URL: "https://libiff9xvh.execute-api.us-west-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-west-2",
    USER_POOL_ID: "us-west-2_nVEsuY874",
    APP_CLIENT_ID: "5n2a693hd3uc73koquna5beor4",
    IDENTITY_POOL_ID: "us-west-2:387fcce8-2773-4003-b170-cdccb786e84b"
  }
};
