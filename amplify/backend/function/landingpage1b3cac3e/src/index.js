/* Amplify Params - DO NOT EDIT
	ANALYTICS_LANDINGPAGEKINESIS_KINESISSTREAMARN
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = event => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  let res = '';
  if ('Records' in event) {
    for (const record of event.Records) {
      console.log(record.eventID);
      console.log(record.eventName);
      console.log('Kinesis Record: %j', record.kinesis);
    }
    res += 'Successfully processed DynamoDB record';
  } else {
    res += 'Kinesis records not present in event';
  }

  return Promise.resolve(res);
};
