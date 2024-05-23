import { dbRequest } from "../../../utils/dbRequest";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {

  const { searchParams } = new URL(request.url)
  const map = searchParams.get('map');
  const date = searchParams.get('date');

  const { documents } = await dbRequest("listing", "find", {
    filter: {
      // region: map
    }
  });
  // const { documents } = await dbRequest("listing", "find");
  return Response.json(documents);
}

export async function POST(request: Request) {
  const listData = await request.json();

  const createList = await dbRequest("listing", "insertOne", {
    document: {
      ...listData,
    },
  });

  return Response.json(createList);
}

// export async function PUT(request: Request) {
//   const data = await dbRequest("listing", "updateOne", {
//     filter: { id: {} },
//     update: {
//       set: {
//         id: "",
//         userId: "",
//         title: "",
//         description: "",
//         imageSrc: "",
//         createdAt: "",
//         category: "",
//         roomCount: "",
//         bathroom: "",
//         guestCount: "",
//         childrenCount: "",
//         locationValue: "",
//         price: "",
//       },
//     },
//   });

//   return Response.json(data);
// }
