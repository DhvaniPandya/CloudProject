/* Amplify Params - DO NOT EDIT
	API_CLOUDPROJECTAPI_GRAPHQLAPIENDPOINTOUTPUT
	API_CLOUDPROJECTAPI_GRAPHQLAPIIDOUTPUT
	API_CLOUDPROJECTAPI_GRAPHQLAPIKEYOUTPUT
	AUTH_CLOUDPROJECT_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const aws = require('aws-sdk');
const s3 = new aws.S3({ apiVersion: '2006-03-01' });
const dynamo = new aws.DynamoDB.DocumentClient();

exports.handler = async (event, context) => {
  const bucket = event.Records[0].s3.bucket.name;
  const key = decodeURIComponent(event.Records[0].s3.object.key.replace(/\+/g, ' '));
  const params = {
    Bucket: bucket,
    Key: key,
  };
  try {
    // Get the object from the event and parse its data
    var data = await s3.getObject(params).promise();
    var fileContents = data.Body.toString();
    const pat = /(,[0-9]+)/g;
    var vals = fileContents.slice(19);
    vals = vals.trim().replace(pat, "$1,");
    data = vals.split(',');
    data.pop();
    for (var i = 0; i < data.length - 2; i += 3) {
      //Insert the objects in the DynamoDB table
      try {
        await dynamo.put({
          TableName: "Product-md22nic2obcyjpyatyuo5ks7vq-dev",
          Item: {
            id: (Math.floor(Math.random() * 1000) + 1).toString(),
            store: data[i].trim(),
            name: data[i + 1].trim(),
            count: data[i + 2].trim(),
            __typename: "Product",
            _lastChangedAt: 1649829956056,
            _version: 1,
            updatedAt: "2022-04-09T06:05:56.035Z",
            createdAt: "2022-04-09T06:05:56.035Z"
          }
        }).promise();
      } catch (err) {
        console.log('ERROR:', err.message);
      }
      console.log("SUCCESS: Inserted item: ", data[i + 1].trim());
    }
  } catch (err) {
    console.log(err);
    const message = `Error getting object ${key} from bucket ${bucket}. Make sure they exist and your bucket is in the same region as this function.`;
    console.log(message);
    throw new Error(message);
  }
};
