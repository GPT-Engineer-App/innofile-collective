import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, CheckSquare, BarChart2 } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">InnoFile Manager Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <Link to="/documents">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="mr-2 h-6 w-6 text-blue-500" />
                Documents
              </CardTitle>
              <CardDescription>Manage your team's documents</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">15</p>
              <p className="text-sm text-gray-500">Total documents</p>
            </CardContent>
          </Card>
        </Link>
        <Link to="/tasks">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckSquare className="mr-2 h-6 w-6 text-green-500" />
                Tasks
              </CardTitle>
              <CardDescription>Track and manage tasks</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">8</p>
              <p className="text-sm text-gray-500">Active tasks</p>
            </CardContent>
          </Card>
        </Link>
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart2 className="mr-2 h-6 w-6 text-purple-500" />
              Analytics
            </CardTitle>
            <CardDescription>Project performance</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">85%</p>
            <p className="text-sm text-gray-500">Overall progress</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
