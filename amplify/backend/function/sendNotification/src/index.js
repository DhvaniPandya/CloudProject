
/* Amplify Params - DO NOT EDIT
  API_CLOUDPROJECTAPI_GRAPHQLAPIENDPOINTOUTPUT
  API_CLOUDPROJECTAPI_GRAPHQLAPIIDOUTPUT
  API_CLOUDPROJECTAPI_GRAPHQLAPIKEYOUTPUT
  AUTH_CLOUDPROJECT_USERPOOLID
  ENV
  FUNCTION_S3TRIGGER965F0F49_NAME
  REGION
Amplify Params - DO NOT EDIT */

// /**
//  * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
//  */
// exports.handler = event => {
//   console.log(`EVENT: ${JSON.stringify(event)}`);
//   event.Records.forEach(record => {
//     console.log(record.eventID);
//     console.log(record.eventName);
//     console.log('DynamoDB Record: %j', record.dynamodb);
//   });
//   return Promise.resolve('Successfully processed DynamoDB record');
// };

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();
var ses = new AWS.SES({ region: "us-east-1" });

const params = {
  TableName: 'Product-md22nic2obcyjpyatyuo5ks7vq-dev'
}

async function listItems() {
  try {
    const data = await docClient.scan(params).promise()
    return data
  } catch (err) {
    return err
  }
}

exports.handler = async (event, context) => {
  try {
    const data = await listItems();
    const empty_items = data.Items.filter(item => item.count == '0');
    let message_string = `<html><head><title>Inventory Items</title></head><body><h1>Following items are running low in the inventory:</h1>`
    empty_items.forEach((element) => {
      message_string += `<div><h4>${element.store}: ${element.name}</h4></div>`
    });
    message_string += `</body></html>`
    // console.log("message: ", message_string);
    var params = {
      Destination: {
        ToAddresses: ["dnp1194@gmail.com"],
      },
      Message: {
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data: message_string
          }
        },
        Subject: { Data: "Reminder: Items running low in the Inventory" },
      },
      Source: "dnp1194@gmail.com",
    };

    return ses.sendEmail(params).promise()
  } catch (err) {
    return { error: err }
  }
}
