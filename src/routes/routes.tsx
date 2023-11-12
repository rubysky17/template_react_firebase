import { HomePage, ProjectPage, ContactPage, ExplorePage, ProjectDetailPage, ExploreDetailPage } from "../pages";

import MasterLayout from "../HOC/MasterLayout";
import ExploreDetailLayout from "../HOC/ExploreDetailLayout";

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
    path: "/project/:id",
    element:
      <MasterLayout>
        <ProjectDetailPage />
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
    path: "/explore/:id",
    element:
      <ExploreDetailLayout>
        <ExploreDetailPage />
      </ExploreDetailLayout>

  },
  {
    path: "/contact",
    element: <ContactPage />
  }
];