import { Bell, CreditCard, PieChart, Receipt, Users } from "lucide-react";

export const FEATURES = [
  {
    title: "Group Expenses",
    Icon: Users,
    bg: "bg-blue-100",
    color: "text-blue-600",
    description:
      "Create groups for roommates, trips, or events to keep expenses organized.",
  },
  {
    title: "Smart Settlements",
    Icon: CreditCard,
    bg: "bg-sky-100",
    color: "text-sky-600",

    description:
      "Our algorithm minimises the number of payments when settling up.",
  },
  {
    title: "Expense Analytics",
    Icon: PieChart,
    bg: "bg-blue-100",
    color: "text-blue-600",
    description:
      "Track spending patterns and discover insights about your shared costs.",
  },
  {
    title: "Payment Reminders",
    Icon: Bell,
    bg: "bg-amber-100",
    color: "text-amber-600",
    description:
      "Automated reminders for pending debts and insights on spending patterns.",
  },
  {
    title: "Multiple Split Types",
    Icon: Receipt,
    bg: "bg-blue-100",
    color: "text-blue-600",
    description:
      "Split equally, by percentage, or by exact amounts to fit any scenario.",
  },
  {
    title: "Real‑time Updates",
    Icon: () => (
      /* custom inline icon (no Lucide equivalent) */
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#3B82F6
"
        strokeWidth="2"
      >
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M9 14v8M15 14v8M9 2v6M15 2v6" />
      </svg>
    ),
        bg: "bg-sky-100",
        color: "text-sky-600",

    description:
      "See new expenses and repayments the moment your friends add them.",
  },
];

export const STEPS = [
  {
    label: "1",
    title: "Create or Join a Group",
    description:
      "Start a group for your roommates, trip, or event and invite friends.",
  },
  {
    label: "2",
    title: "Add Expenses",
    description:
      "Record who paid and how the bill should be split amongst members.",
  },
  {
    label: "3",
    title: "Settle Up",
    description: "View who owes what and log payments when debts are cleared.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Splitr has made managing shared expenses incredibly easy. It saves time, reduces confusion, and keeps everything transparent.",
    name: "Anita Desai",
    image: "/testimonials/anita.png",
    role: "Operations Manager",
  },
  {
    quote:
      "As someone who frequently travels in groups, Splitr is a game changer. It's accurate, reliable, and user-friendly.",
    name: "Karan Mehta",
    image: "/testimonials/karan.png",
    role: "Travel Blogger",
  },
  {
    quote:
      "We use Splitr for team projects, and it works flawlessly. Everyone always knows what they owe—no awkward follow-ups.",
    name: "Priya Sharma",
    image: "/testimonials/priya.png",
    role: "Product Designer",
  },
];
