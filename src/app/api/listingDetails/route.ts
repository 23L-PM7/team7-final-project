import { dbRequest } from "../../../utils/dbRequest";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  const { documents } = await dbRequest("listing", "find");
  return Response.json(documents);
}