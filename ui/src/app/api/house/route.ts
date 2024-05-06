import axios from "axios";
import { dbRequest } from "../../../utils/dbRequest";

export async function GET(request: Request) {
  const data = await dbRequest("house", "find");

  return Response.json(data);
}

export async function POST(request: Request) {
  // request.body
  const data = await dbRequest("house", "insertOne", {
    document: {
      ...request.body,
      //   id: "",
      //   userId: "",
      //   title: "",
      //   description: "",bol
      //   imageSrc: "",
      //   createdAt: "",
      //   category: "",
      //   roomCount: "",
      //   bathroom: "",
      //   guestCount: "",
      //   childrenCount: "",
      //   locationValue: "",
      //   price: "",
    },
  });

  return Response.json(data);
}

export async function PUT(request: Request) {
  const data = await dbRequest("house", "updateOne", {
    filter: { id: {} },
    update: {
      set: {
        id: "",
        userId: "",
        title: "",
        description: "",
        imageSrc: "",
        createdAt: "",
        category: "",
        roomCount: "",
        bathroom: "",
        guestCount: "",
        childrenCount: "",
        locationValue: "",
        price: "",
      },
    },
  });

  return Response.json(data);
}
export async function DELETE(request: Request) {
  const data = await dbRequest("house", "deleteOne", {
    filter: {
      id: {},
    },
  });

  return Response.json(data);
}
