import React, { useContext } from "react";
import routes from "./routes";
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import ModalContext from "./context/ModalContext";
import Modal from "./components/Modal/Modal";

function App() {
  const modalContext = useContext(ModalContext);
  let router = createBrowserRouter(routes, {
    basename: "/",
  });

  if (import.meta.env.MODE === "desktop") {
    router = createHashRouter(routes);
  }

  return (
    <React.Fragment>
      <RouterProvider router={router} />
      {modalContext.open && (
        <Modal
          title={modalContext.title}
          body={modalContext.body}
          meta={modalContext.meta}
          onClose={modalContext.onClose}
        />
      )}
    </React.Fragment>
  );
}

export default App;
