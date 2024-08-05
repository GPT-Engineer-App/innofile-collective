import { Home, FileText, CheckSquare } from "lucide-react";
import Index from "./pages/Index.jsx";
import Documents from "./pages/Documents.jsx";
import Tasks from "./pages/Tasks.jsx";
import KanbanTasks from "./pages/KanbanTasks.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Dashboard",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Documents",
    to: "/documents",
    icon: <FileText className="h-4 w-4" />,
    page: <Documents />,
  },
  {
    title: "Tasks",
    to: "/tasks",
    icon: <CheckSquare className="h-4 w-4" />,
    page: <Tasks />,
  },
  {
    title: "Kanban Tasks",
    to: "/kanban-tasks",
    icon: <LayoutDashboard className="h-4 w-4" />,
    page: <KanbanTasks />,
  },
];
