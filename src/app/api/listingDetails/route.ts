import { dbRequest } from "../../../utils/dbRequest";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {

  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
  const _id = { $oid: id };

  const { documents } = await dbRequest("listing", "find", {
    filter: { _id },
  });

  return Response.json(documents);
}


