import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Bell, User, Menu } from "lucide-react";
import { useState } from "react";

const Header = ({ toggleSidebar }) => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="md:hidden mr-2" onClick={toggleSidebar}>
              <Menu className="h-6 w-6" />
            </Button>
            <h1 className="text-2xl font-bold text-gray-900">InnoFile Manager</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:block relative">
              <Input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 rounded-full"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsSearchVisible(!isSearchVisible)}>
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
        {isSearchVisible && (
          <div className="md:hidden pb-4">
            <Input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 rounded-full"
            />
            <Search className="absolute left-7 top-[62px] transform -translate-y-1/2 text-gray-400" />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
