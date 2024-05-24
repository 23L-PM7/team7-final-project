// "use client";

// import Image from "next/image";
// import { useUser } from "@auth0/nextjs-auth0/client";
// import { ImgHTMLAttributes } from "react";

// export default function Avatar() {
//   const { user, error, isLoading } = useUser();

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>{error.message}</div>;

//   return (
//     user && (
//       <div className="w-5">
//         <img className="" src={user.picture} />
//         {/* <h2>{user.name}</h2> */}
//         {/* <p>{user.email}</p> */}
//       </div>
//     )
//   );
// }

// //   return (
// //     <Image
// //       alt="Avatar"
// //       className="rounded-full "
// //       height={30}
// //       width={30}
// //       src="/images/placeholder.jpg"
// //     />
// //   );
// // };

// // export default Avatar;
"use client";

import { Row, Col } from "reactstrap";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { Highlight } from "@mui/icons-material";

export default function Profile() {
  const { user, isLoading } = useUser();

  return (
    <>
      {user && (
        <>
          <Row
            className="align-items-center profile-header mb-5 text-center text-md-left"
            data-testid="profile"
          >
            <Col md={2}>
              <img
                src={user.picture}
                alt="Profile"
                className="rounded-circle w-5 img-fluid profile-picture mb-3 mb-md-0"
                decode="async"
                data-testid="profile-picture"
              />
            </Col>
            {/* <Col md>
              <h2 data-testid="profile-name">{user.name}</h2>
              <p className="lead text-muted" data-testid="profile-email">
                {user.email}
              </p>
            </Col> */}
          </Row>
          {/* <Row data-testid="profile-json">
            <Highlight>{JSON.stringify(user, null, 2)}</Highlight>
          </Row> */}
        </>
      )}
    </>
  );
}
