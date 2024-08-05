import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Save, ArrowLeft } from "lucide-react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const EditDocument = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (id !== 'new') {
      // Fetch document data if editing an existing document
      // This is a mock fetch, replace with actual API call
      const mockDocument = {
        id: id,
        title: 'Sample Document',
        content: '<p>This is a sample document content.</p>'
      };
      setTitle(mockDocument.title);
      setContent(mockDocument.content);
    }
  }, [id]);

  const handleSave = () => {
    // Save the document (mock implementation)
    console.log('Saving document:', { id, title, content });
    // Navigate back to documents list
    navigate('/documents');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Card className="max-w-4xl mx-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-2xl font-bold">
            {id === 'new' ? 'Create New Document' : 'Edit Document'}
          </CardTitle>
          <div className="flex space-x-2">
            <Button variant="outline" onClick={() => navigate('/documents')}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Back
            </Button>
            <Button onClick={handleSave}>
              <Save className="mr-2 h-4 w-4" /> Save
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Input
            className="mb-4"
            placeholder="Document Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <ReactQuill
            theme="snow"
            value={content}
            onChange={setContent}
            className="bg-white"
            style={{ height: '400px', marginBottom: '50px' }}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default EditDocument;
