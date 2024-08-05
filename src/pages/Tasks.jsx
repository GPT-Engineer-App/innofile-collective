import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckSquare, Plus, LayoutDashboard } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";
import { toast } from 'sonner';

const Tasks = () => {
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskStatus, setNewTaskStatus] = useState('To Do');
  const queryClient = useQueryClient();

  const { data: tasks, isLoading, isError } = useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      // Replace with actual API call
      return [
        { id: 1, title: 'Design mockups', status: 'In Progress' },
        { id: 2, title: 'Implement login functionality', status: 'To Do' },
        { id: 3, title: 'Write API documentation', status: 'Done' },
      ];
    },
  });

  const addTaskMutation = useMutation({
    mutationFn: async (newTask) => {
      // Replace with actual API call
      return { id: Date.now(), ...newTask };
    },
    onSuccess: (newTask) => {
      queryClient.setQueryData(['tasks'], (oldTasks) => [...oldTasks, newTask]);
      toast.success('Task added successfully');
    },
    onError: () => {
      toast.error('Failed to add task');
    },
  });

  const addTask = () => {
    if (newTaskTitle.trim()) {
      addTaskMutation.mutate({ title: newTaskTitle, status: newTaskStatus });
      setNewTaskTitle('');
      setNewTaskStatus('To Do');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Tasks</h1>
        <Link to="/kanban-tasks">
          <Button variant="outline">
            <LayoutDashboard className="mr-2 h-4 w-4" />
            Kanban View
          </Button>
        </Link>
      </div>
      <div className="max-w-4xl mx-auto">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Add New Task</CardTitle>
            <CardDescription>Create a new task for your team</CardDescription>
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
                  <SelectItem value="To Do">To Do</SelectItem>
                  <SelectItem value="In Progress">In Progress</SelectItem>
                  <SelectItem value="Done">Done</SelectItem>
                </SelectContent>
              </Select>
              <Button onClick={addTask}>
                <Plus className="mr-2 h-4 w-4" /> Add
              </Button>
            </div>
          </CardContent>
        </Card>
        <div className="space-y-4">
          {tasks.map(task => (
            <Card key={task.id}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center">
                    <CheckSquare className="mr-2 h-5 w-5 text-green-500" />
                    {task.title}
                  </div>
                  <span className={`text-sm px-2 py-1 rounded ${
                    task.status === 'To Do' ? 'bg-yellow-200 text-yellow-800' :
                    task.status === 'In Progress' ? 'bg-blue-200 text-blue-800' :
                    'bg-green-200 text-green-800'
                  }`}>
                    {task.status}
                  </span>
                </CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
