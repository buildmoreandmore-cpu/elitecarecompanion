"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  FileText,
  Search,
  Download,
  Eye,
  Loader2,
  X,
  Copy,
  Check,
} from "lucide-react";

interface Letter {
  id: string;
  bureau: string;
  accountName: string | null;
  accountNumber: string | null;
  disputeReason: string;
  content: string;
  status: string;
  createdAt: string;
  client: {
    id: string;
    firstName: string;
    lastName: string;
  };
  template: {
    name: string;
  } | null;
}

function LettersContent() {
  const searchParams = useSearchParams();
  const letterId = searchParams.get("id");

  const [letters, setLetters] = useState<Letter[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLetter, setSelectedLetter] = useState<Letter | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fetchLetters();
  }, []);

  useEffect(() => {
    if (letterId && letters.length > 0) {
      const letter = letters.find((l) => l.id === letterId);
      if (letter) setSelectedLetter(letter);
    }
  }, [letterId, letters]);

  const fetchLetters = async () => {
    try {
      const response = await fetch("/api/admin/letters");
      if (response.ok) {
        const data = await response.json();
        setLetters(data);
      }
    } catch (error) {
      console.error("Failed to fetch letters:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const copyContent = async () => {
    if (!selectedLetter) return;
    await navigator.clipboard.writeText(selectedLetter.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const filteredLetters = letters.filter(
    (letter) =>
      letter.client.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      letter.client.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      letter.bureau.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (letter.accountName?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false)
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dispute Letters</h1>
        <p className="text-gray-600">View and manage generated dispute letters</p>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search letters..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Letters List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {isLoading ? (
          <div className="p-8 text-center">
            <Loader2 className="h-8 w-8 animate-spin mx-auto text-blue-600" />
          </div>
        ) : filteredLetters.length === 0 ? (
          <div className="p-8 text-center">
            <FileText className="h-12 w-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500">
              {searchTerm ? "No letters found" : "No letters generated yet"}
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">
                    Client
                  </th>
                  <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">
                    Bureau
                  </th>
                  <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">
                    Account
                  </th>
                  <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">
                    Template
                  </th>
                  <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">
                    Status
                  </th>
                  <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">
                    Date
                  </th>
                  <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredLetters.map((letter) => (
                  <tr key={letter.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <Link
                        href={`/dashboard/clients/${letter.client.id}`}
                        className="font-medium text-blue-600 hover:text-blue-700"
                      >
                        {letter.client.firstName} {letter.client.lastName}
                      </Link>
                    </td>
                    <td className="px-6 py-4 text-gray-900">{letter.bureau}</td>
                    <td className="px-6 py-4 text-gray-900">
                      {letter.accountName || "-"}
                    </td>
                    <td className="px-6 py-4 text-gray-600 text-sm">
                      {letter.template?.name || "Custom"}
                    </td>
                    <td className="px-6 py-4">
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
                    </td>
                    <td className="px-6 py-4 text-gray-500 text-sm">
                      {new Date(letter.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => setSelectedLetter(letter)}
                        className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700"
                      >
                        <Eye className="h-4 w-4" />
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Letter Preview Modal */}
      {selectedLetter && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-3xl w-full max-h-[90vh] flex flex-col">
            <div className="flex items-center justify-between p-6 border-b">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  {selectedLetter.template?.name || "Dispute Letter"}
                </h2>
                <p className="text-gray-500">
                  {selectedLetter.client.firstName} {selectedLetter.client.lastName} •{" "}
                  {selectedLetter.bureau}
                </p>
              </div>
              <button
                onClick={() => setSelectedLetter(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="flex-1 overflow-auto p-6">
              <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800 bg-gray-50 p-6 rounded-lg">
                {selectedLetter.content}
              </pre>
            </div>

            <div className="flex items-center justify-between p-6 border-t bg-gray-50">
              <div className="text-sm text-gray-500">
                Created {new Date(selectedLetter.createdAt).toLocaleString()}
              </div>
              <div className="flex gap-3">
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
                      Copy Text
                    </>
                  )}
                </button>
                <button
                  onClick={() => setSelectedLetter(null)}
                  className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function LettersPage() {
  return (
    <Suspense fallback={
      <div className="p-8 text-center">
        <Loader2 className="h-8 w-8 animate-spin mx-auto text-blue-600" />
      </div>
    }>
      <LettersContent />
    </Suspense>
  );
}
