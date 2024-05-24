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
import { Row, Col } from "reactstrap";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { Highlight } from "@mui/icons-material";
import Image from "next/image";

export default function Profile() {
  const { user, isLoading } = useUser();
  console.log(user)

  if(user){
    return (
      <>
        {user && (
          <>
            <Row
              className="align-items-center profile-header mb-5 text-center text-md-left"
              data-testid="profile"
            >
              <Col md={2}>
                {user.picture && (
                  <img
                    src={user.picture}
                    alt="Profile"
                    height={30}
                    width={30}
                    className="rounded-full w-5 h-5 "
                    // decode="async"
                    data-testid="profile-picture"
                  />
                )}
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
  }else{
    return (
          <Image
             alt="Avatar"
             className="rounded-full "
             height={30}
             width={30}
             src="/images/placeholder.jpg"
           />
         );
       };
  }