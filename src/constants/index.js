// index.js

export const servicesData = [
  {
    title: "Security Operations & Incident Response",
    description:
      "Your infrastructure deserves a resilient defense. I provide 24x7 SOC monitoring, alert triage, and incident response—analyzing logs and traffic patterns to identify threats and accelerate remediation.",
    items: [
      {
        title: "SIEM & Alert Triage",
        description: "(Splunk, Microsoft Sentinel, QRadar, Event Correlation)",
      },
      {
        title: "Threat Hunting",
        description: "(Log Analysis, MITRE ATT&CK Mapping, Root Cause Analysis)",
      },
      {
        title: "Endpoint Defense",
        description: "(EDR/XDR Concepts, Malware Investigation, Windows/Linux Logs)",
      },
    ],
  },
  {
    title: "Identity & Access Management (IAM)",
    description:
      "Securing the perimeter starts with identity. I manage Microsoft Entra ID and Active Directory environments, enforcing least privilege and modern authentication to ensure operational security.",
    items: [
      {
        title: "Identity Lifecycle",
        description: "(SSO, SAML, OIDC, Access Reviews, User Provisioning)",
      },
      {
        title: "Access Governance",
        description: "(RBAC Validation, Least Privilege, PIM)",
      },
      {
        title: "Modern Authentication",
        description: "(MFA Enforcement, Conditional Access, Zero Trust)",
      },
    ],
  },
  {
    title: "Cloud & Network Security",
    description:
      "I harden cloud environments and network infrastructure, remediating secure configuration gaps and applying Defense-in-Depth methodologies to reduce risk.",
    items: [
      {
        title: "Vulnerability Management",
        description: "(Nessus, Secure Configuration Reviews, Remediation)",
      },
      {
        title: "Network Defense",
        description: "(Wireshark, IDS/IPS, Firewall & Proxy Logs, Packet Analysis)",
      },
      {
        title: "Cloud Fundamentals",
        description: "(AWS/Azure Security, Key Vaults, Service Principals)",
      },
    ],
  },
  {
    title: "Automation & GRC",
    description:
      "Streamlining security operations through automation while maintaining audit-ready compliance aligned with industry-standard frameworks like ISO 27001 and NIST.",
    items: [
      {
        title: "Security Automation",
        description: "(Python, PowerShell, Bash, SOAR Playbooks)",
      },
      {
        title: "Documentation",
        description: "(SOPs, Runbooks, Incident Reports, Dashboards)",
      },
      {
        title: "Compliance Readiness",
        description: "(ISO 27001, NIST Frameworks, PCI DSS, Risk Assessments)",
      },
    ],
  },
];

export const projects = [
  {
    id: 1,
    name: "SOC Threat Detection Lab",
    description:
      "Configured a SIEM-based monitoring lab to analyze Windows, Linux, firewall, and endpoint logs for suspicious activity and alert patterns.",
    href: "",
    image: "/assets/projects/mobile-accessories-store.jpg", // Kept original path to prevent UI breaks
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "Splunk" },
      { id: 2, name: "Sentinel" },
      { id: 3, name: "Windows/Linux Logs" },
      { id: 4, name: "MITRE ATT&CK" },
      { id: 5, name: "Python" },
    ],
  },
  {
    id: 2,
    name: "IAM & Cloud Security Lab",
    description:
      "Designed an operations lab using Entra ID/Azure AD to simulate user lifecycle management, MFA enforcement, and Conditional Access.",
    href: "",
    image: "/assets/projects/plant-shop.jpg",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "Entra ID" },
      { id: 2, name: "Active Directory" },
      { id: 3, name: "RBAC" },
      { id: 4, name: "PowerShell" },
    ],
  },
  {
    id: 3,
    name: "Linux Server Hardening",
    description:
      "Monitored 800+ Linux servers, triaging system alerts and remediating kernel-level vulnerabilities to improve uptime by 25%.",
    href: "",
    image: "/assets/projects/apple-tech-store.jpg",
    bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "Linux" },
      { id: 2, name: "Bash" },
      { id: 3, name: "GDB" },
      { id: 4, name: "Jira" },
    ],
  },
  {
    id: 4,
    name: "Automated SOAR Playbooks",
    description:
      "Created detection use cases and automated response workflows for brute-force attempts, privilege escalation, and phishing alerts.",
    href: "",
    image: "/assets/projects/electronics-store.jpg",
    bgImage: "/assets/backgrounds/poster.jpg",
    frameworks: [
      { id: 1, name: "SOAR" },
      { id: 2, name: "Python" },
      { id: 3, name: "API Integration" },
      { id: 4, name: "Incident Response" },
    ],
  },
  {
    id: 5,
    name: "GRC & Audit Compliance Initiative",
    description:
      "Assisted with risk assessments by reviewing control gaps and documenting remediation plans aligned with ISO 27001 and NIST practices.",
    href: "",
    image: "/assets/projects/home-decor-store.jpg",
    bgImage: "/assets/backgrounds/table.jpg",
    frameworks: [
      { id: 1, name: "ISO 27001" },
      { id: 2, name: "NIST" },
      { id: 3, name: "PCI DSS" },
      { id: 4, name: "ServiceNow" },
    ],
  },
  {
    id: 6,
    name: "Network Traffic Analysis",
    description:
      "Analyzed packet captures, IDS/IPS alerts, and proxy logs to identify threat signatures and support timely remediation.",
    href: "",
    image: "/assets/projects/game-store.jpg",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "Wireshark" },
      { id: 2, name: "Snort" },
      { id: 3, name: "Network Security" },
      { id: 4, name: "Log Parsing" },
    ],
  },
];

export const socials = [
  { name: "Email", href: "mailto:sb0281886@gmail.com" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/sai-bhargav-raavi" },
  { name: "GitHub", href: "https://github.com/" }, 
  { name: "Phone", href: "tel:+15135085217" },
];