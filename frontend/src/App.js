import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventPage, { loaderFunction as EventLoader } from "./pages/EventPage";
import EventDetailsPage, {
  loaderFunction as EventDetailsLoader,
  actionFunction as eventDetailDeleteAction,
} from "./pages/EventDetailPage";
import ErrorPage from "./pages/Error";
import Root from "./pages/Root";
import NewEventPage from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import EventRoot from "./pages/EventRoot";
import { actionFunction as manipulativeEventFunction } from "./components/EventForm";
import NewsletterPage, { action as newsletterAction } from "./pages/Newsletter";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "events",
        element: <EventRoot />,
        children: [
          {
            index: true,
            element: <EventPage />,
            loader: EventLoader,
          },
          {
            path: ":eventId",
            id: "event-detail",
            loader: EventDetailsLoader,
            children: [
              {
                index: true,
                element: <EventDetailsPage />,
                action: eventDetailDeleteAction,
              },
              {
                path: "edit",
                element: <EditEventPage />,
                action: manipulativeEventFunction,
              },
            ],
          },
          {
            path: "new",
            element: <NewEventPage />,
            action: manipulativeEventFunction,
          },
        ],
      },
      {
        path: "newsletter",
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={Router} />;
}

export default App;
