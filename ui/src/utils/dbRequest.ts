import axios from "axios";

export async function dbRequest(
  collection: string,
  action: string,
  params?: {}
) {
  const data = JSON.stringify({
    collection: collection,
    database: "Airbnb",
    dataSource: "Cluster0",
    ...params,
  });

  const config = {
    method: "post",
    url: `https://ap-south-1.aws.data.mongodb-api.com/app/data-rdvlxvs/endpoint/data/v1/action/${action}`,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Request-Headers": "*",
      "api-key": `${process.env.MONGO_DB_SECRET}`,
    },
    data: data,
  };

  const response = await axios(config);
  return response.data;
}
