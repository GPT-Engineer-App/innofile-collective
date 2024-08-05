import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Plus } from "lucide-react";

const Documents = () => {
  const [documents, setDocuments] = useState([
    { id: 1, title: 'Project Overview', content: 'This document outlines the main goals and objectives of our project.' },
    { id: 2, title: 'Meeting Notes', content: 'Notes from our last team meeting, including action items and decisions.' },
    { id: 3, title: 'Technical Specifications', content: 'Detailed technical specifications for the new feature implementation.' },
  ]);

  const [newDocTitle, setNewDocTitle] = useState('');

  const addDocument = () => {
    if (newDocTitle.trim()) {
      setDocuments([...documents, { id: Date.now(), title: newDocTitle, content: 'New document content...' }]);
      setNewDocTitle('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Documents</h1>
      <div className="max-w-4xl mx-auto">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Add New Document</CardTitle>
            <CardDescription>Create a new document for your team</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-2">
              <Input 
                placeholder="New document title" 
                value={newDocTitle}
                onChange={(e) => setNewDocTitle(e.target.value)}
              />
              <Button onClick={addDocument}>
                <Plus className="mr-2 h-4 w-4" /> Add
              </Button>
            </div>
          </CardContent>
        </Card>
        <div className="space-y-4">
          {documents.map(doc => (
            <Card key={doc.id}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="mr-2 h-5 w-5 text-blue-500" />
                  {doc.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{doc.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Documents;
