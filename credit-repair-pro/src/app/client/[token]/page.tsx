"use client";

import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  Upload,
  FileText,
  ExternalLink,
  CheckCircle,
  AlertCircle,
  X,
  Loader2,
} from "lucide-react";

interface ClientData {
  id: string;
  firstName: string;
  lastName: string;
  creditAnalysis: string | null;
  improvements: string | null;
  status: string;
  uploadedReports: {
    id: string;
    fileName: string;
    bureau: string | null;
    uploadedAt: string;
  }[];
}

export default function ClientPortalPage() {
  const params = useParams();
  const token = params.token as string;

  const [client, setClient] = useState<ClientData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [uploadNotes, setUploadNotes] = useState("");
  const [selectedBureau, setSelectedBureau] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  useEffect(() => {
    const fetchClient = async () => {
      try {
        const response = await fetch(`/api/client/${token}`);
        if (response.ok) {
          const data = await response.json();
          setClient(data);
        } else if (response.status === 404) {
          setError("Invalid access link. Please check your link and try again.");
        } else {
          setError("Something went wrong. Please try again later.");
        }
      } catch {
        setError("Unable to connect. Please check your internet connection.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchClient();
  }, [token]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles(Array.from(e.target.files));
    }
  };

  const handleRemoveFile = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleUpload = async (e: FormEvent) => {
    e.preventDefault();
    if (selectedFiles.length === 0 && !uploadNotes.trim()) {
      return;
    }

    setIsUploading(true);

    try {
      const formData = new FormData();
      formData.append("token", token);
      formData.append("bureau", selectedBureau);
      formData.append("notes", uploadNotes);
      selectedFiles.forEach((file) => {
        formData.append("files", file);
      });

      const response = await fetch("/api/client/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setUploadSuccess(true);
        setSelectedFiles([]);
        setUploadNotes("");
        setSelectedBureau("");
        // Refresh client data
        const clientResponse = await fetch(`/api/client/${token}`);
        if (clientResponse.ok) {
          const data = await clientResponse.json();
          setClient(data);
        }
      }
    } catch {
      setError("Upload failed. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md text-center">
          <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Access Error</h1>
          <p className="text-gray-600 mb-6">{error}</p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Support
          </Link>
        </div>
      </div>
    );
  }

  if (!client) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Welcome, {client.firstName}
              </h1>
              <p className="text-gray-600">Your Credit Repair Portal</p>
            </div>
            <div className="text-right">
              <span
                className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                  client.status === "COMPLETED"
                    ? "bg-green-100 text-green-700"
                    : client.status === "IN_PROGRESS"
                    ? "bg-blue-100 text-blue-700"
                    : client.status === "IN_REVIEW"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {client.status.replace("_", " ")}
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        {/* Credit Analysis Section */}
        {client.creditAnalysis && (
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <FileText className="h-5 w-5 text-blue-600" />
              Your Credit Analysis
            </h2>
            <div className="prose prose-blue max-w-none">
              <div className="whitespace-pre-wrap text-gray-700">
                {client.creditAnalysis}
              </div>
            </div>
          </section>
        )}

        {/* Recommendations Section */}
        {client.improvements && (
          <section className="bg-green-50 border border-green-200 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              Recommended Improvements
            </h2>
            <div className="whitespace-pre-wrap text-gray-700">
              {client.improvements}
            </div>
          </section>
        )}

        {/* Upload Section */}
        <section className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Upload className="h-5 w-5 text-blue-600" />
            Submit Your Credit Reports
          </h2>

          {uploadSuccess && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
              <CheckCircle className="h-5 w-5 inline mr-2" />
              Upload successful! I&apos;ll review your reports and update your
              analysis.
            </div>
          )}

          <form onSubmit={handleUpload} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Bureau (optional)
              </label>
              <select
                value={selectedBureau}
                onChange={(e) => setSelectedBureau(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select a bureau...</option>
                <option value="EQUIFAX">Equifax</option>
                <option value="EXPERIAN">Experian</option>
                <option value="TRANSUNION">TransUnion</option>
                <option value="OTHER">Other / Multiple</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload Credit Report Files
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 transition-colors">
                <input
                  type="file"
                  multiple
                  accept=".pdf,.png,.jpg,.jpeg"
                  onChange={handleFileChange}
                  className="hidden"
                  id="file-upload"
                />
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer flex flex-col items-center"
                >
                  <Upload className="h-10 w-10 text-gray-400 mb-3" />
                  <span className="text-gray-600">
                    Click to upload PDF or images
                  </span>
                  <span className="text-sm text-gray-400 mt-1">
                    Max 10MB per file
                  </span>
                </label>
              </div>

              {selectedFiles.length > 0 && (
                <div className="mt-4 space-y-2">
                  {selectedFiles.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between bg-gray-50 rounded-lg p-3"
                    >
                      <div className="flex items-center gap-2">
                        <FileText className="h-5 w-5 text-blue-600" />
                        <span className="text-gray-700">{file.name}</span>
                        <span className="text-gray-400 text-sm">
                          ({(file.size / 1024 / 1024).toFixed(2)} MB)
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleRemoveFile(index)}
                        className="text-gray-400 hover:text-red-500"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Notes or Additional Information
              </label>
              <textarea
                value={uploadNotes}
                onChange={(e) => setUploadNotes(e.target.value)}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="Share any details about specific items you want disputed, login credentials for report access, or anything else that might help..."
              />
            </div>

            <button
              type="submit"
              disabled={isUploading || (selectedFiles.length === 0 && !uploadNotes.trim())}
              className="w-full flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isUploading ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin mr-2" />
                  Uploading...
                </>
              ) : (
                <>
                  <Upload className="h-5 w-5 mr-2" />
                  Submit Information
                </>
              )}
            </button>
          </form>
        </section>

        {/* Previous Uploads */}
        {client.uploadedReports.length > 0 && (
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Your Submitted Reports
            </h2>
            <div className="space-y-3">
              {client.uploadedReports.map((report) => (
                <div
                  key={report.id}
                  className="flex items-center justify-between bg-gray-50 rounded-lg p-4"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">
                        {report.fileName}
                      </p>
                      <p className="text-sm text-gray-500">
                        {report.bureau && `${report.bureau} • `}
                        {new Date(report.uploadedAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <CheckCircle className="h-5 w-5 text-green-500" />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Resources */}
        <section className="bg-blue-50 border border-blue-200 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Need to Get Your Credit Reports?
          </h2>
          <p className="text-gray-600 mb-6">
            If you haven&apos;t already, get your credit reports from these sources:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <a
              href="https://www.annualcreditreport.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-white rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div>
                <p className="font-medium text-gray-900">
                  AnnualCreditReport.com
                </p>
                <p className="text-sm text-gray-500">Free annual reports</p>
              </div>
              <ExternalLink className="h-5 w-5 text-blue-600" />
            </a>
            <a
              href="https://www.identityiq.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-white rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div>
                <p className="font-medium text-gray-900">IdentityIQ</p>
                <p className="text-sm text-gray-500">$1 for all 3 reports</p>
              </div>
              <ExternalLink className="h-5 w-5 text-blue-600" />
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-8 py-6">
        <div className="max-w-4xl mx-auto px-4 text-center text-gray-500 text-sm">
          <p>Questions? Contact us at credit@example.com</p>
        </div>
      </footer>
    </div>
  );
}
