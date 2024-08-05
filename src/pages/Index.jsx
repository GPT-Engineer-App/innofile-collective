import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, CheckSquare } from "lucide-react";

const Index = () => {
  const [documents, setDocuments] = useState([
    { id: 1, title: 'Project Overview', content: 'This document outlines the main goals and objectives of our project.' },
    { id: 2, title: 'Meeting Notes', content: 'Notes from our last team meeting, including action items and decisions.' },
  ]);

  const [tasks, setTasks] = useState([
    { id: 1, title: 'Design mockups', status: 'In Progress' },
    { id: 2, title: 'Implement login functionality', status: 'To Do' },
  ]);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">InnoFile Manager</h1>
      <Tabs defaultValue="documents" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
        </TabsList>
        <TabsContent value="documents">
          <Card>
            <CardHeader>
              <CardTitle>Documents</CardTitle>
              <CardDescription>Manage your team's documents and knowledge base.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {documents.map(doc => (
                  <div key={doc.id} className="flex items-center space-x-2">
                    <FileText className="h-5 w-5 text-blue-500" />
                    <div>
                      <h3 className="font-semibold">{doc.title}</h3>
                      <p className="text-sm text-gray-500">{doc.content.substring(0, 50)}...</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex space-x-2">
                <Input placeholder="New document title" />
                <Button>Add Document</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="tasks">
          <Card>
            <CardHeader>
              <CardTitle>Tasks</CardTitle>
              <CardDescription>Track and manage your team's tasks.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {tasks.map(task => (
                  <div key={task.id} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <CheckSquare className="h-5 w-5 text-green-500" />
                      <span>{task.title}</span>
                    </div>
                    <span className="text-sm text-gray-500">{task.status}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex space-x-2">
                <Input placeholder="New task title" />
                <Button>Add Task</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Index;
