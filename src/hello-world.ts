require("dotenv").config();
import { APIGatewayEvent, Context, Callback } from "aws-lambda";

exports.handler = async function (
  event: APIGatewayEvent,
  _context: Context,
  callback: Callback
) {
  callback(null, {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: "Hello World",
      env: process.env.MY_ENV_VAR,
    }),
  });
};
