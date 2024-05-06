import axios from "axios";
import { dbRequest } from "../../../utils/dbRequest";

export async function GET(request: Request) {
  const data = await dbRequest("reservation", "find");

  return Response.json(data);
}

export async function POST(request: Request) {
  const data = await dbRequest("reservation", "insertOne", {
    document: {
      id: "",
      userId: "",
      listingId: "",
      startDate: "",
      endDate: "",
      createdAt: "",
      totalPrice: "",
    },
  });

  return Response.json(data);
}

export async function PUT(request: Request) {
  const data = await dbRequest("reservation", "updateOne", {
    filter: { id: {} },
    update: {
      set: {
        id: "",
        userId: "",
        listingId: "",
        startDate: "",
        endDate: "",
        createdAt: "",
        totalPrice: "",
      },
    },
  });

  return Response.json(data);
}

export async function DELETE(request: Request) {
  const data = await dbRequest("reservation", "deleteOne", {
    filter: {
      id: {},
    },
  });

  return Response.json(data);
}

// model User {
//   id             String
//   name           String?
//   email          String?   @unique
//   image          String?
//   hashedPassword String?
//   createdAt      Date
//   updatedAt      Date
//   favoriteIds    String[]

//   accounts     Account[]
//   listings     Listing[]
//   reservations Reservation[]
// }

// model Listing {
//   id            String
//   userId        String @relation
//   title         String
//   description   String
//   imageSrc      String
//   createdAt     Date
//   category      String
//   roomCount     Number
//   bathroomCount Number
//   guestCount    Number
//   locationValue String
//   price         Number
//   pet           String
//   children      Number

//   reservations Reservation[]
// }

// model Reservation {
//   id         String
//   userId     String @relation
//   listingId  String @relation
//   startDate  DateTime
//   endDate    DateTime
//   totalPrice Number
//   createdAt  Date
// }
