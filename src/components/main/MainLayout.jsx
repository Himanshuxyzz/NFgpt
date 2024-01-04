import React, { useEffect } from "react";
import { Home, SignIn, Browse } from "../../pages";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useDispatch } from "react-redux";
import { RemoveUser, addUser } from "../../utils/userSlice";

const Main = () => {
  const dispatch = useDispatch();
  // to navigate user after successfull sign in

  const appRouter = createBrowserRouter([
    {
      path: `${ROUTES.HOME}`,
      element: <Home />,
    },
    {
      path: `${ROUTES.SIGN_IN}`,
      element: <SignIn />,
    },
    {
      path: `${ROUTES.BROWSE}`,
      element: <Browse />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // const uid = user.uid;
        const { uid, displayName, email, photoURL } = user;
        // ...
        // console.log(uid);
        dispatch(
          addUser({
            uid,
            email,
            displayName,
            photoURL,
          })
        );
        // navigate("/browse"); because the navigate should be insdie the router component there are multiple ways you can solve this issue
        // * we can either navigate from inside the router child components
      } else {
        // User is signed out
        // ...
        dispatch(RemoveUser());
        // navigate("/");
      }
    });
  }, []);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default Main;
