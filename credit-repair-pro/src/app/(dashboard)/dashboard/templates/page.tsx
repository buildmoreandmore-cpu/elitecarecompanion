"use client";

import { useState, useEffect } from "react";
import { FileStack, Eye, Loader2, X, Copy, Check } from "lucide-react";

interface Template {
  id: string;
  name: string;
  description: string | null;
  category: string;
  content: string;
  createdAt: string;
}

const categoryLabels: Record<string, string> = {
  GENERAL_DISPUTE: "General Dispute",
  DEBT_VALIDATION: "Debt Validation",
  GOODWILL: "Goodwill Request",
  PAY_FOR_DELETE: "Pay for Delete",
  IDENTITY_THEFT: "Identity Theft",
  INQUIRY_REMOVAL: "Inquiry Removal",
};

const categoryColors: Record<string, string> = {
  GENERAL_DISPUTE: "bg-blue-100 text-blue-700",
  DEBT_VALIDATION: "bg-purple-100 text-purple-700",
  GOODWILL: "bg-green-100 text-green-700",
  PAY_FOR_DELETE: "bg-yellow-100 text-yellow-700",
  IDENTITY_THEFT: "bg-red-100 text-red-700",
  INQUIRY_REMOVAL: "bg-orange-100 text-orange-700",
};

export default function TemplatesPage() {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fetchTemplates();
  }, []);

  const fetchTemplates = async () => {
    try {
      const response = await fetch("/api/admin/templates");
      if (response.ok) {
        const data = await response.json();
        setTemplates(data);
      }
    } catch (error) {
      console.error("Failed to fetch templates:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const copyContent = async () => {
    if (!selectedTemplate) return;
    await navigator.clipboard.writeText(selectedTemplate.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Letter Templates</h1>
        <p className="text-gray-600">
          Pre-built dispute letter templates for common situations
        </p>
      </div>

      {/* Templates Grid */}
      {isLoading ? (
        <div className="p-8 text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto text-blue-600" />
        </div>
      ) : templates.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center">
          <FileStack className="h-12 w-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">No templates available</p>
          <p className="text-sm text-gray-400 mt-1">
            Run the database seed to add templates
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => (
            <div
              key={template.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <span
                  className={`px-2 py-1 text-xs font-medium rounded-full ${
                    categoryColors[template.category] || "bg-gray-100 text-gray-700"
                  }`}
                >
                  {categoryLabels[template.category] || template.category}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {template.name}
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {template.description}
              </p>
              <button
                onClick={() => setSelectedTemplate(template)}
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                <Eye className="h-4 w-4" />
                View Template
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Template Preview Modal */}
      {selectedTemplate && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-3xl w-full max-h-[90vh] flex flex-col">
            <div className="flex items-center justify-between p-6 border-b">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                      categoryColors[selectedTemplate.category] ||
                      "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {categoryLabels[selectedTemplate.category] ||
                      selectedTemplate.category}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-gray-900">
                  {selectedTemplate.name}
                </h2>
                {selectedTemplate.description && (
                  <p className="text-gray-500 text-sm mt-1">
                    {selectedTemplate.description}
                  </p>
                )}
              </div>
              <button
                onClick={() => setSelectedTemplate(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="flex-1 overflow-auto p-6">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                <p className="text-sm text-yellow-800">
                  <strong>Placeholders:</strong> Replace text in [BRACKETS] with
                  actual client information when generating letters.
                </p>
              </div>
              <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800 bg-gray-50 p-6 rounded-lg">
                {selectedTemplate.content}
              </pre>
            </div>

            <div className="flex items-center justify-end gap-3 p-6 border-t bg-gray-50">
              <button
                onClick={copyContent}
                className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-100 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    Copy Template
                  </>
                )}
              </button>
              <button
                onClick={() => setSelectedTemplate(null)}
                className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
