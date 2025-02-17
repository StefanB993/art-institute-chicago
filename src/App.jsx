import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout/AppLayout";
import Artworks from "./features/Artworks/Artworks";
import Exibitions from "./features/Exibitions/Exibitions";
import Bookmarks, {
  loader as bookmarksLoader,
} from "./features/Bookmarks/Bookmarks";
import { Provider } from "react-redux";
import store from "./store";
import ArtworkDetails, {
  loader as artworkDetailsLoader,
} from "./features/Artworks/ArtworkDetails/ArtworkDetails";
import Error from "./components/Error/Error";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          element: <Artworks />,
          path: "/artworks",
        },
        {
          element: <ArtworkDetails />,
          path: "/artworks/:id",
          loader: artworkDetailsLoader,
        },
        {
          element: <Exibitions />,
          path: "/exibitions",
        },
        {
          element: <Bookmarks />,
          path: "/bookmarks",
          loader: bookmarksLoader,
          errorElement: <Error />,
        },
        {
          element: <ArtworkDetails />,
          path: "/bookmarks/:id",
          loader: artworkDetailsLoader,
        },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
