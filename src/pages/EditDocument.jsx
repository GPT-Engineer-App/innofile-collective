import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Save, ArrowLeft } from "lucide-react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { toast } from 'sonner';

const EditDocument = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data: document, isLoading, isError } = useQuery({
    queryKey: ['document', id],
    queryFn: async () => {
      if (id === 'new') return { title: '', content: '' };
      // Replace with actual API call
      return {
        id: id,
        title: 'Sample Document',
        content: '<p>This is a sample document content.</p>'
      };
    },
  });

  const [title, setTitle] = useState(document?.title || '');
  const [content, setContent] = useState(document?.content || '');

  const saveMutation = useMutation({
    mutationFn: async (updatedDoc) => {
      // Replace with actual API call
      console.log('Saving document:', updatedDoc);
      return updatedDoc;
    },
    onSuccess: (savedDoc) => {
      queryClient.setQueryData(['document', savedDoc.id], savedDoc);
      toast.success('Document saved successfully');
      navigate('/documents');
    },
    onError: () => {
      toast.error('Failed to save document');
    },
  });

  const handleSave = () => {
    saveMutation.mutate({ id, title, content });
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
