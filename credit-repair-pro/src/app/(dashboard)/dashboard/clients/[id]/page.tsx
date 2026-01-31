"use client";

import { useState, useEffect, FormEvent } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Copy,
  Check,
  FileText,
  Upload,
  Save,
  Loader2,
  Plus,
  ExternalLink,
  Trash2,
} from "lucide-react";

interface Client {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string | null;
  notes: string | null;
  accessToken: string;
  creditAnalysis: string | null;
  improvements: string | null;
  status: string;
  createdAt: string;
  uploadedReports: {
    id: string;
    fileName: string;
    fileUrl: string;
    fileType: string;
    bureau: string | null;
    notes: string | null;
    uploadedAt: string;
  }[];
  disputeLetters: {
    id: string;
    bureau: string;
    accountName: string | null;
    status: string;
    createdAt: string;
  }[];
}

interface Template {
  id: string;
  name: string;
  category: string;
}

export default function ClientDetailPage() {
  const params = useParams();
  const router = useRouter();
  const clientId = params.id as string;

  const [client, setClient] = useState<Client | null>(null);
  const [templates, setTemplates] = useState<Template[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [copied, setCopied] = useState(false);

  const [creditAnalysis, setCreditAnalysis] = useState("");
  const [improvements, setImprovements] = useState("");
  const [status, setStatus] = useState("");

  // Letter generation
  const [showLetterForm, setShowLetterForm] = useState(false);
  const [letterData, setLetterData] = useState({
    templateId: "",
    bureau: "EQUIFAX",
    accountName: "",
    accountNumber: "",
    disputeReason: "",
  });
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    fetchClient();
    fetchTemplates();
  }, [clientId]);

  const fetchClient = async () => {
    try {
      const response = await fetch(`/api/admin/clients/${clientId}`);
      if (response.ok) {
        const data = await response.json();
        setClient(data);
        setCreditAnalysis(data.creditAnalysis || "");
        setImprovements(data.improvements || "");
        setStatus(data.status);
      }
    } catch (error) {
      console.error("Failed to fetch client:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchTemplates = async () => {
    try {
      const response = await fetch("/api/admin/templates");
      if (response.ok) {
        const data = await response.json();
        setTemplates(data);
      }
    } catch (error) {
      console.error("Failed to fetch templates:", error);
    }
  };

  const handleSave = async (e: FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      const response = await fetch(`/api/admin/clients/${clientId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ creditAnalysis, improvements, status }),
      });

      if (response.ok) {
        const data = await response.json();
        setClient(data);
      }
    } catch (error) {
      console.error("Failed to save:", error);
    } finally {
      setIsSaving(false);
    }
  };

  const generateLetter = async (e: FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);

    try {
      const response = await fetch("/api/admin/letters", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          clientId,
          ...letterData,
        }),
      });

      if (response.ok) {
        setShowLetterForm(false);
        setLetterData({
          templateId: "",
          bureau: "EQUIFAX",
          accountName: "",
          accountNumber: "",
          disputeReason: "",
        });
        fetchClient();
      }
    } catch (error) {
      console.error("Failed to generate letter:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  const copyPortalLink = async () => {
    if (!client) return;
    const url = `${window.location.origin}/client/${client.accessToken}`;
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
      </div>
    );
  }

  if (!client) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Client not found</p>
        <Link href="/dashboard/clients" className="text-blue-600 hover:text-blue-700">
          ← Back to Clients
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/dashboard/clients"
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="h-5 w-5 text-gray-600" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {client.firstName} {client.lastName}
            </h1>
            <p className="text-gray-600">{client.email}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={copyPortalLink}
            className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                Copy Portal Link
              </>
            )}
          </button>
          <a
            href={`/client/${client.accessToken}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
            View Portal
          </a>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Analysis Form */}
          <form onSubmit={handleSave} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Credit Analysis & Recommendations
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Status
                </label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="PENDING">Pending</option>
                  <option value="IN_REVIEW">In Review</option>
                  <option value="IN_PROGRESS">In Progress</option>
                  <option value="COMPLETED">Completed</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Credit Analysis
                </label>
                <textarea
                  value={creditAnalysis}
                  onChange={(e) => setCreditAnalysis(e.target.value)}
                  rows={8}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Enter your analysis of the client's credit report..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Recommended Improvements
                </label>
                <textarea
                  value={improvements}
                  onChange={(e) => setImprovements(e.target.value)}
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Enter recommended improvements and next steps..."
                />
              </div>

              <button
                type="submit"
                disabled={isSaving}
                className="inline-flex items-center gap-2 px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
              >
                {isSaving ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Save className="h-4 w-4" />
                )}
                Save Changes
              </button>
            </div>
          </form>

          {/* Dispute Letters */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">
                Dispute Letters
              </h2>
              <button
                onClick={() => setShowLetterForm(true)}
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Plus className="h-4 w-4" />
                Generate Letter
              </button>
            </div>

            {client.disputeLetters.length === 0 ? (
              <p className="text-gray-500 text-center py-8">
                No dispute letters generated yet
              </p>
            ) : (
              <div className="space-y-3">
                {client.disputeLetters.map((letter) => (
                  <Link
                    key={letter.id}
                    href={`/dashboard/letters?id=${letter.id}`}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-blue-600" />
                      <div>
                        <p className="font-medium text-gray-900">
                          {letter.bureau} - {letter.accountName || "General Dispute"}
                        </p>
                        <p className="text-sm text-gray-500">
                          {new Date(letter.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        letter.status === "SENT"
                          ? "bg-blue-100 text-blue-700"
                          : letter.status === "RESPONDED"
                          ? "bg-yellow-100 text-yellow-700"
                          : letter.status === "RESOLVED"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {letter.status}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Client Info */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Client Information
            </h2>
            <dl className="space-y-3">
              <div>
                <dt className="text-sm text-gray-500">Phone</dt>
                <dd className="text-gray-900">{client.phone || "Not provided"}</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-500">Created</dt>
                <dd className="text-gray-900">
                  {new Date(client.createdAt).toLocaleDateString()}
                </dd>
              </div>
              <div>
                <dt className="text-sm text-gray-500">Internal Notes</dt>
                <dd className="text-gray-900">{client.notes || "None"}</dd>
              </div>
            </dl>
          </div>

          {/* Uploaded Reports */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Uploaded Reports
            </h2>
            {client.uploadedReports.length === 0 ? (
              <p className="text-gray-500 text-center py-4">
                No reports uploaded yet
              </p>
            ) : (
              <div className="space-y-3">
                {client.uploadedReports.map((report) => (
                  <div
                    key={report.id}
                    className="p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-start gap-3">
                      <Upload className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-900 truncate">
                          {report.fileName}
                        </p>
                        <p className="text-sm text-gray-500">
                          {report.bureau && `${report.bureau} • `}
                          {new Date(report.uploadedAt).toLocaleDateString()}
                        </p>
                        {report.notes && (
                          <p className="text-sm text-gray-600 mt-1">
                            {report.notes}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Generate Letter Modal */}
      {showLetterForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Generate Dispute Letter
            </h2>

            <form onSubmit={generateLetter} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Template *
                </label>
                <select
                  required
                  value={letterData.templateId}
                  onChange={(e) =>
                    setLetterData({ ...letterData, templateId: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a template...</option>
                  {templates.map((template) => (
                    <option key={template.id} value={template.id}>
                      {template.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Credit Bureau *
                </label>
                <select
                  required
                  value={letterData.bureau}
                  onChange={(e) =>
                    setLetterData({ ...letterData, bureau: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="EQUIFAX">Equifax</option>
                  <option value="EXPERIAN">Experian</option>
                  <option value="TRANSUNION">TransUnion</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Account/Creditor Name
                </label>
                <input
                  type="text"
                  value={letterData.accountName}
                  onChange={(e) =>
                    setLetterData({ ...letterData, accountName: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., Capital One, Collection Agency"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Account Number
                </label>
                <input
                  type="text"
                  value={letterData.accountNumber}
                  onChange={(e) =>
                    setLetterData({ ...letterData, accountNumber: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Optional"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Dispute Reason *
                </label>
                <textarea
                  required
                  value={letterData.disputeReason}
                  onChange={(e) =>
                    setLetterData({ ...letterData, disputeReason: e.target.value })
                  }
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Describe why this item is being disputed..."
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowLetterForm(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isGenerating}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
                >
                  {isGenerating ? (
                    <Loader2 className="h-5 w-5 animate-spin mx-auto" />
                  ) : (
                    "Generate Letter"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
