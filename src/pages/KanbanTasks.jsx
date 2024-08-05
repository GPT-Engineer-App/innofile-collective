import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckSquare, Plus, List } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";

const KanbanTasks = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Design mockups', status: 'In Progress' },
    { id: 2, title: 'Implement login functionality', status: 'To Do' },
    { id: 3, title: 'Write API documentation', status: 'Done' },
  ]);

  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskStatus, setNewTaskStatus] = useState('To Do');

  const addTask = () => {
    if (newTaskTitle.trim()) {
      setTasks([...tasks, { id: Date.now(), title: newTaskTitle, status: newTaskStatus }]);
      setNewTaskTitle('');
      setNewTaskStatus('To Do');
    }
  };

  const columns = ['To Do', 'In Progress', 'Done'];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Kanban Tasks</h1>
        <Link to="/tasks">
          <Button variant="outline">
            <List className="mr-2 h-4 w-4" />
            List View
          </Button>
        </Link>
      </div>
      <div className="mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Add New Task</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-2">
              <Input 
                placeholder="New task title" 
                value={newTaskTitle}
                onChange={(e) => setNewTaskTitle(e.target.value)}
                className="flex-grow"
              />
              <Select value={newTaskStatus} onValueChange={setNewTaskStatus}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  {columns.map((status) => (
                    <SelectItem key={status} value={status}>{status}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button onClick={addTask}>
                <Plus className="mr-2 h-4 w-4" /> Add
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {columns.map((column) => (
          <div key={column} className="bg-white rounded-lg shadow p-4">
            <h2 className="text-xl font-semibold mb-4">{column}</h2>
            <div className="space-y-2">
              {tasks.filter(task => task.status === column).map(task => (
                <Card key={task.id}>
                  <CardHeader>
                    <CardTitle className="text-sm flex items-center">
                      <CheckSquare className="mr-2 h-4 w-4 text-green-500" />
                      {task.title}
                    </CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KanbanTasks;
