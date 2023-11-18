import ContactWrapper from "./Detail/components/contact";
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
        path: "contact",
        screen: <ContactWrapper />
    }
]

export const sidebarWidth = 256;
