import { DynamoDBClient, ListTablesCommand } from "@aws-sdk/client-dynamodb";

export const getUsers = async () => {
  (async () => {
    const client = new DynamoDBClient({ region: "us-west-2" });
    const command = new ListTablesCommand({});
    try {
      const results = await client.send(command);
      console.log(results?.TableNames?.join("\n"));
    } catch (err) {
      console.error(err);
    }
  })();
};
