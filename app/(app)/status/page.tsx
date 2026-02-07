import { ArrowRight, CheckCircle, AlertTriangle, XCircle, Clock, Activity, Bell, History, Server, MonitorSmartphone, Cpu, Globe, Shield, Database, RefreshCw } from "lucide-react";
import Link from "next/link";

type ServiceStatus = "operational" | "degraded" | "outage" | "maintenance";

interface Service {
    name: string;
    description: string;
    status: ServiceStatus;
    uptime: string;
    icon: React.ElementType;
}

interface Incident {
    date: string;
    title: string;
    status: ServiceStatus;
    description: string;
    resolved: boolean;
    duration?: string;
}

const statusConfig: Record<ServiceStatus, { label: string; color: string; bg: string; icon: React.ElementType }> = {
    operational: { label: "Operational", color: "text-green-600", bg: "bg-green-100", icon: CheckCircle },
    degraded: { label: "Degraded Performance", color: "text-yellow-600", bg: "bg-yellow-100", icon: AlertTriangle },
    outage: { label: "Major Outage", color: "text-red-600", bg: "bg-red-100", icon: XCircle },
    maintenance: { label: "Under Maintenance", color: "text-blue-600", bg: "bg-blue-100", icon: Clock },
};

export default function StatusPage() {
    const overallStatus: ServiceStatus = "operational";

    const services: Service[] = [
        { name: "Menu Builder", description: "Menu creation and management platform", status: "operational", uptime: "99.98%", icon: MonitorSmartphone },
        { name: "POS System", description: "Point-of-sale processing and transactions", status: "operational", uptime: "99.99%", icon: Cpu },
        { name: "KDS System", description: "Kitchen display and order routing", status: "operational", uptime: "99.97%", icon: Server },
        { name: "Online Ordering", description: "Customer-facing ordering platform", status: "operational", uptime: "99.95%", icon: Globe },
        { name: "Payment Processing", description: "Payment gateway and transaction handling", status: "operational", uptime: "99.99%", icon: Shield },
        { name: "API Gateway", description: "REST API and third-party integrations", status: "operational", uptime: "99.96%", icon: Database },
        { name: "Real-Time Sync", description: "Cross-device data synchronization", status: "operational", uptime: "99.94%", icon: RefreshCw },
        { name: "Analytics Dashboard", description: "Reporting and business intelligence", status: "operational", uptime: "99.93%", icon: Activity },
    ];

    const incidents: Incident[] = [
        {
            date: "June 15, 2025",
            title: "Scheduled Maintenance — Database Migration",
            status: "maintenance",
            description: "Planned database migration to improve performance. Expected 15-minute downtime for Analytics Dashboard between 03:00–03:15 UTC.",
            resolved: true,
            duration: "12 minutes",
        },
        {
            date: "June 8, 2025",
            title: "Degraded Performance — Online Ordering",
            status: "degraded",
            description: "Some users experienced slow load times on the Online Ordering platform. Root cause identified as a CDN caching issue. Resolved with CDN configuration update.",
            resolved: true,
            duration: "34 minutes",
        },
        {
            date: "May 28, 2025",
            title: "API Gateway — Elevated Error Rates",
            status: "degraded",
            description: "Elevated 5xx error rates on the API Gateway affecting approximately 2% of requests. Issue traced to a misconfigured load balancer rule deployed during a routine update.",
            resolved: true,
            duration: "18 minutes",
        },
        {
            date: "May 12, 2025",
            title: "Scheduled Maintenance — Infrastructure Upgrade",
            status: "maintenance",
            description: "Planned infrastructure upgrade to support new regions. Brief service interruptions for Real-Time Sync during the migration window.",
            resolved: true,
            duration: "25 minutes",
        },
        {
            date: "April 30, 2025",
            title: "Payment Processing — Intermittent Failures",
            status: "outage",
            description: "A subset of payment transactions experienced failures due to a third-party payment provider outage. Failover to backup provider activated automatically.",
            resolved: true,
            duration: "47 minutes",
        },
    ];

    const uptimeHistory = [
        { month: "Jun", uptime: 99.98 },
        { month: "May", uptime: 99.95 },
        { month: "Apr", uptime: 99.97 },
        { month: "Mar", uptime: 99.99 },
        { month: "Feb", uptime: 99.96 },
        { month: "Jan", uptime: 99.98 },
    ];

    const StatusIcon = statusConfig[overallStatus].icon;

    return (
        <div>
            {/* Hero */}
            <div className={`p-8 md:p-16 ${overallStatus === "operational" ? "bg-green-600" : overallStatus === "outage" ? "bg-red-600" : "bg-yellow-600"} text-white`} id="status-hero">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-xl font-mono border-b border-white/30 w-max mx-auto">System Status</h1>
                    <h2 className="text-5xl md:text-6xl font-heading py-6">
                        {overallStatus === "operational" ? "All Systems Operational" : overallStatus === "outage" ? "Service Disruption" : "Degraded Performance"}
                    </h2>
                    <div className="flex items-center justify-center gap-3 text-xl text-white/90">
                        <StatusIcon size={24} />
                        <span>Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} at {new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })}</span>
                    </div>
                </div>
            </div>

            {/* Uptime Summary */}
            <div className="bg-secondary p-8" id="uptime">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl font-heading">99.97% Average Uptime</h3>
                            <p className="text-black/60">Over the past 6 months across all services</p>
                        </div>
                        <div className="flex gap-4">
                            {uptimeHistory.map((m, i) => (
                                <div key={i} className="text-center">
                                    <div className="h-16 w-8 bg-white rounded-full overflow-hidden flex flex-col justify-end">
                                        <div
                                            className="bg-green-500 rounded-full"
                                            style={{ height: `${(m.uptime - 99.9) * 1000}%` }}
                                        />
                                    </div>
                                    <p className="text-xs text-black/50 mt-1">{m.month}</p>
                                    <p className="text-xs font-mono text-black/70">{m.uptime}%</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Services */}
            <div className="p-8 md:p-16" id="services">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-primary text-xl font-mono border-b w-max">Services</h1>
                    <h2 className="text-5xl font-heading py-6">
                        Current status
                    </h2>

                    <div className="space-y-3 mt-4">
                        {services.map((service, i) => {
                            const config = statusConfig[service.status];
                            const Icon = config.icon;
                            return (
                                <div key={i} className="border-2 border-gray-200 rounded-lg p-5 flex items-center justify-between hover:border-gray-300 transition-all">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-gray-100 rounded-full p-2.5">
                                            <service.icon size={20} className="text-black/60" />
                                        </div>
                                        <div>
                                            <h3 className="font-heading text-lg">{service.name}</h3>
                                            <p className="text-black/50 text-sm">{service.description}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <span className="text-sm text-black/40 hidden md:block">
                                            {service.uptime} uptime
                                        </span>
                                        <div className={`flex items-center gap-2 ${config.bg} ${config.color} px-3 py-1.5 rounded-full text-sm font-medium`}>
                                            <Icon size={14} />
                                            {config.label}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Incidents */}
            <div className="p-8 md:p-16 bg-gray-50" id="incidents">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-primary text-xl font-mono border-b w-max">Incident History</h1>
                    <h2 className="text-5xl font-heading py-6">
                        Past incidents
                    </h2>

                    <div className="space-y-6 mt-4">
                        {incidents.map((incident, i) => {
                            const config = statusConfig[incident.status];
                            const Icon = config.icon;
                            return (
                                <div key={i} className="bg-white border-2 border-gray-200 rounded-lg p-6">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-3">
                                        <div className="flex items-center gap-3">
                                            <div className={`${config.bg} ${config.color} p-1.5 rounded-full`}>
                                                <Icon size={16} />
                                            </div>
                                            <h3 className="font-heading text-lg">{incident.title}</h3>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            {incident.duration && (
                                                <span className="text-sm text-black/40 flex items-center gap-1">
                                                    <Clock size={14} /> Duration: {incident.duration}
                                                </span>
                                            )}
                                            {incident.resolved && (
                                                <span className="text-green-600 bg-green-100 flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium">
                                                    <CheckCircle size={12} /> Resolved
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <p className="text-black/60 text-sm leading-relaxed">{incident.description}</p>
                                    <p className="text-black/30 text-sm mt-3 flex items-center gap-1">
                                        <History size={14} /> {incident.date}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Subscribe */}
            <div className="p-8 md:p-16" id="subscribe">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-primary text-xl font-mono border-b w-max">Stay Informed</h1>
                    <h2 className="text-5xl font-heading py-6">
                        Get notified
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                        <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-primary/30 hover:shadow-lg transition-all">
                            <div className="bg-primary/10 rounded-full p-3 w-max mb-4">
                                <Bell size={24} className="text-primary" />
                            </div>
                            <h3 className="text-xl font-heading mb-2">Email Alerts</h3>
                            <p className="text-black/60 mb-4">
                                Get email notifications for service disruptions and scheduled maintenance windows.
                            </p>
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="w-full border-2 border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-all rounded-lg"
                                />
                                <button className="bg-primary text-white px-4 py-2.5 font-medium text-sm hover:bg-primary/90 transition-all rounded-lg whitespace-nowrap">
                                    Subscribe
                                </button>
                            </div>
                        </div>

                        <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-primary/30 hover:shadow-lg transition-all">
                            <div className="bg-primary/10 rounded-full p-3 w-max mb-4">
                                <Activity size={24} className="text-primary" />
                            </div>
                            <h3 className="text-xl font-heading mb-2">RSS Feed</h3>
                            <p className="text-black/60 mb-4">
                                Subscribe to our RSS feed for real-time updates on system status changes and incidents.
                            </p>
                            <a
                                href="/status/rss"
                                className="text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all"
                            >
                                Copy RSS URL <ArrowRight size={16} />
                            </a>
                        </div>

                        <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-primary/30 hover:shadow-lg transition-all">
                            <div className="bg-primary/10 rounded-full p-3 w-max mb-4">
                                <Globe size={24} className="text-primary" />
                            </div>
                            <h3 className="text-xl font-heading mb-2">API Webhook</h3>
                            <p className="text-black/60 mb-4">
                                Integrate status updates into your own monitoring dashboard via our webhook API.
                            </p>
                            <Link
                                href="/docs"
                                className="text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all"
                            >
                                View API Docs <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="bg-primary p-8 md:p-16" id="status-cta">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-5xl font-heading text-white py-4">
                        Need help right now?
                    </h2>
                    <p className="text-xl text-white/80 mb-8">
                        If you're experiencing issues not reflected on this page, reach out to our support team.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link
                            className="inline-flex items-center justify-center gap-2 hover:gap-4 bg-white text-primary font-semibold py-4 px-12 text-xl hover:bg-gray-100 transition-all"
                            href="/help"
                        >
                            <span>Contact Support</span>
                            <ArrowRight size={24} />
                        </Link>
                        <Link
                            className="inline-flex items-center justify-center gap-2 hover:gap-4 border-2 border-white text-white font-semibold py-4 px-12 text-xl hover:bg-white/10 transition-all"
                            href="/community"
                        >
                            <span>Community Forum</span>
                            <ArrowRight size={24} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
