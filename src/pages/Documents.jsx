import { useState, useCallback } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Plus, Edit, Upload } from "lucide-react";
import { Link } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';

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

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        const fileContent = reader.result;
        setDocuments((prevDocuments) => [
          ...prevDocuments,
          { id: Date.now(), title: file.name, content: fileContent }
        ]);
      };
      reader.readAsText(file);
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Documents</h1>
      <div className="max-w-4xl mx-auto">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Add New Document</CardTitle>
            <CardDescription>Create a new document for your team or upload a file</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-4">
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
              <div {...getRootProps()} className={`border-2 border-dashed rounded-md p-4 text-center cursor-pointer ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}>
                <input {...getInputProps()} />
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-2 text-sm text-gray-600">Drag 'n' drop some files here, or click to select files</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="space-y-4">
          {documents.map(doc => (
            <Card key={doc.id}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FileText className="mr-2 h-5 w-5 text-blue-500" />
                    {doc.title}
                  </div>
                  <Link to={`/edit-document/${doc.id}`}>
                    <Button variant="outline" size="sm">
                      <Edit className="mr-2 h-4 w-4" /> Edit
                    </Button>
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{doc.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-6">
          <Link to="/edit-document/new">
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Create New Document
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Documents;
