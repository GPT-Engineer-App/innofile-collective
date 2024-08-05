import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navItems } from "../nav-items";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const SidebarContent = ({ toggleSidebar }) => (
    <ScrollArea className="h-full py-6 pl-6 pr-6">
      <h2 className="text-lg font-semibold mb-4">Menu</h2>
      <nav className="space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 py-2"
            onClick={toggleSidebar}
          >
            {item.icon}
            <span>{item.title}</span>
          </Link>
        ))}
      </nav>
    </ScrollArea>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:block w-64 bg-white border-r">
        <SidebarContent toggleSidebar={toggleSidebar} />
      </aside>

      {/* Mobile Sidebar */}
      <Sheet open={isOpen} onOpenChange={toggleSidebar}>
        <SheetContent side="left" className="w-[300px] sm:w-[400px]">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4"
            onClick={toggleSidebar}
          >
            <X className="h-6 w-6" />
          </Button>
          <SidebarContent toggleSidebar={toggleSidebar} />
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Sidebar;
