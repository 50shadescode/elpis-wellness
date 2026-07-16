export const PROGRAMS = {
  igniteYourLife: {
    slug: "ignite-your-life",
    name: "Ignite Your Life",
    fullAmount: 24000,
    installmentAmount: 12000,
  },
  guiltFree: {
    slug: "guilt-free",
    name: "Guilt Free",
    fullAmount: 15000,
    installmentAmount: 7500,
  },
};

export const SERVICES = [
  {
    slug: "individual-therapy",
    name: "Physical Individual Therapy Session",
    amount: 5000,
    duration: "1hr 30 mins",
    category: "mental-health-services",
  },
  {
    slug: "couple-family-therapy",
    name: "Couple & Family Therapy",
    amount: 8000,
    duration: "1hr 30 mins",
    category: "mental-health-services",
  },
  {
    slug: "addiction-therapy",
    name: "Addiction Therapy",
    amount: 5000,
    duration: "1hr 30 mins",
    category: "mental-health-services",
  },
  {
    slug: "child-therapy",
    name: "Child Therapy",
    amount: 4000,
    duration: "45 mins - 1hr",
    category: "mental-health-services",
  },
  {
    slug: "teen-therapy",
    name: "Teen Therapy",
    amount: 4000,
    duration: "45 mins - 1hr",
    category: "mental-health-services",
  },
  {
    slug: "virtual-individual-counseling-psychologist",
    name: "Virtual Individual Therapy with Counseling Psychologist",
    amount: 3500,
    duration: "1hr",
    category: "mental-health-services",
  },
  {
    slug: "virtual-individual-clinical-psychologist",
    name: "Virtual Individual Therapy with Clinical Psychologist",
    amount: 4000,
    duration: "1hr 30 mins",
    category: "mental-health-services",
  },
  {
    slug: "trauma-assessment",
    name: "Trauma Assessment",
    amount: 10000,
    duration: "",
    category: "psychological-assessments",
  },
  {
    slug: "virtual-corporate-wellness-workshop",
    name: "Virtual Corporate Wellness Workshop",
    amount: 18000,
    duration: "1 - 2hrs",
    category: "eap-services",
  },
] as const;

export type ProgramKey = keyof typeof PROGRAMS;
export type ServiceItem = (typeof SERVICES)[number];