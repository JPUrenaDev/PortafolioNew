//import { MainCardPresentation } from "./features/MainCardPresentation";

import { MyResumeContent } from "./features/MyResumeContent";
import { AppLayout } from "./ui/AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ProfessionalSkills } from "./features/ProfessionalSkills";
import { Experience } from "./features/Experience";
import { Education } from "./features/Education";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,

    children: [
      {
        path: "/home",
        element: <MyResumeContent />,
      },
      {
        path: "/skills",
        element: <ProfessionalSkills marginLeft="ml-[350px]" />,
      },
      {
        path: "/experience",
        element: <Experience />,
      },
      {
        path: "/education",
        element: <Education />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
