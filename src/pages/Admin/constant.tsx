import DesginWrapper from "./Detail/components/design";
import ExploreWrapper from "./Detail/components/explore";
import ProjectWrapper from "./Detail/components/project";

export const configScreen = [
    {
        path: "project",
        screen: <ProjectWrapper />
    },
    {
        path: "explore",
        screen: <ExploreWrapper />
    },
    {
        path: "design",
        screen: <DesginWrapper />
    }
]

export const sidebarWidth = 256;
