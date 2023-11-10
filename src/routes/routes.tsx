import { HomePage, ProjectPage, ContactPage, ExplorePage } from "../pages";

import MasterLayout from "../HOC/MasterLayout";

export const routes: any = [
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/project",
    element:
      <MasterLayout>
        <ProjectPage />
      </MasterLayout>

  },
  {
    path: "/explore",
    element:
      <MasterLayout>
        <ExplorePage />
      </MasterLayout>

  },
  {
    path: "/contact",
    element: <ContactPage />
  }
];