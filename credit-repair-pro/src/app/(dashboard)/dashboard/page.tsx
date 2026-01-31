import { prisma } from "@/lib/db";
import Link from "next/link";

export const dynamic = "force-dynamic";
import {
  Users,
  FileText,
  MessageSquare,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

async function getStats() {
  const [
    totalClients,
    pendingClients,
    inProgressClients,
    completedClients,
    totalLetters,
    draftLetters,
    newContacts,
  ] = await Promise.all([
    prisma.client.count(),
    prisma.client.count({ where: { status: "PENDING" } }),
    prisma.client.count({ where: { status: "IN_PROGRESS" } }),
    prisma.client.count({ where: { status: "COMPLETED" } }),
    prisma.disputeLetter.count(),
    prisma.disputeLetter.count({ where: { status: "DRAFT" } }),
    prisma.contactSubmission.count({ where: { status: "NEW" } }),
  ]);

  return {
    totalClients,
    pendingClients,
    inProgressClients,
    completedClients,
    totalLetters,
    draftLetters,
    newContacts,
  };
}

async function getRecentClients() {
  return prisma.client.findMany({
    take: 5,
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      status: true,
      createdAt: true,
    },
  });
}

async function getRecentContacts() {
  return prisma.contactSubmission.findMany({
    where: { status: "NEW" },
    take: 5,
    orderBy: { createdAt: "desc" },
  });
}

export default async function DashboardPage() {
  const stats = await getStats();
  const recentClients = await getRecentClients();
  const recentContacts = await getRecentContacts();

  const statCards = [
    {
      name: "Total Clients",
      value: stats.totalClients,
      icon: Users,
      color: "blue",
    },
    {
      name: "In Progress",
      value: stats.inProgressClients,
      icon: TrendingUp,
      color: "yellow",
    },
    {
      name: "Completed",
      value: stats.completedClients,
      icon: CheckCircle,
      color: "green",
    },
    {
      name: "New Contacts",
      value: stats.newContacts,
      icon: MessageSquare,
      color: "purple",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here&apos;s your overview.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat) => (
          <div
            key={stat.name}
            className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{stat.name}</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">
                  {stat.value}
                </p>
              </div>
              <div
                className={`p-3 rounded-lg ${
                  stat.color === "blue"
                    ? "bg-blue-100"
                    : stat.color === "yellow"
                    ? "bg-yellow-100"
                    : stat.color === "green"
                    ? "bg-green-100"
                    : "bg-purple-100"
                }`}
              >
                <stat.icon
                  className={`h-6 w-6 ${
                    stat.color === "blue"
                      ? "text-blue-600"
                      : stat.color === "yellow"
                      ? "text-yellow-600"
                      : stat.color === "green"
                      ? "text-green-600"
                      : "text-purple-600"
                  }`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Clients */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">
                Recent Clients
              </h2>
              <Link
                href="/dashboard/clients"
                className="text-sm text-blue-600 hover:text-blue-700"
              >
                View all →
              </Link>
            </div>
          </div>
          <div className="divide-y divide-gray-100">
            {recentClients.length === 0 ? (
              <div className="p-6 text-center text-gray-500">
                No clients yet
              </div>
            ) : (
              recentClients.map((client) => (
                <Link
                  key={client.id}
                  href={`/dashboard/clients/${client.id}`}
                  className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-medium">
                        {client.firstName[0]}
                        {client.lastName[0]}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        {client.firstName} {client.lastName}
                      </p>
                      <p className="text-sm text-gray-500">
                        {new Date(client.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${
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
                </Link>
              ))
            )}
          </div>
        </div>

        {/* New Contact Submissions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900">
              New Contact Submissions
            </h2>
          </div>
          <div className="divide-y divide-gray-100">
            {recentContacts.length === 0 ? (
              <div className="p-6 text-center text-gray-500">
                No new contacts
              </div>
            ) : (
              recentContacts.map((contact) => (
                <div key={contact.id} className="p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-medium text-gray-900">{contact.name}</p>
                      <p className="text-sm text-gray-500">{contact.email}</p>
                      {contact.phone && (
                        <p className="text-sm text-gray-500">{contact.phone}</p>
                      )}
                    </div>
                    <span className="text-xs text-gray-400">
                      {new Date(contact.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                    {contact.message}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Quick Actions
        </h2>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/dashboard/clients?new=true"
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Users className="h-4 w-4" />
            Add New Client
          </Link>
          <Link
            href="/dashboard/letters"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors"
          >
            <FileText className="h-4 w-4" />
            View Letters
          </Link>
          <Link
            href="/dashboard/templates"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors"
          >
            <Clock className="h-4 w-4" />
            Letter Templates
          </Link>
        </div>
      </div>
    </div>
  );
}
