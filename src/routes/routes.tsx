import { HomePage, ProjectPage, ContactPage } from "../pages"

export const routes: any = [
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/project",
    element: <ProjectPage />
  },
  {
    path: "/contact",
    element: <ContactPage />
  }
];