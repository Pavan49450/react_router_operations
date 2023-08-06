// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventPage, { loaderFunction as EventLoader } from "./pages/EventPage";
import EventDetailsPage, { loaderFunction as EventDetailsLoader, actionFunction as eventDetailDeleteAction } from "./pages/EventDetailPage"
import ErrorPage from "./pages/Error";
import Root from "./pages/Root";
import NewEventPage from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import EventRoot from "./pages/EventRoot"
import { actionFunction as manipulativeEventFunction } from "./components/EventForm";
import NewsletterPage,{action as newsletterAction} from "./pages/Newsletter";
const Router = createBrowserRouter([
  {
    path: '/', element: <Root />, errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'events',
        element: <EventRoot />,
        children: [
          {
            index: true,
            element: <EventPage />,
            loader: EventLoader,
          },
          {
            path: ':eventId',
            id: 'event-detail',
            loader: EventDetailsLoader,
            children: [
              {
                index: true,
                element: <EventDetailsPage />,
                action:eventDetailDeleteAction
              },
              {
                path: 'edit',
                element: <EditEventPage />,
                action:manipulativeEventFunction,
              }
            ]
          },
          {
            path: 'new',
            element: <NewEventPage />,
            action:manipulativeEventFunction
          },
        ]
      },
      {
        path: 'newsletter',
        element: <NewsletterPage />,
        action: newsletterAction,
      }
    ]
  },

]);
function App() {
  return <RouterProvider router={Router} />;
}

export default App;
