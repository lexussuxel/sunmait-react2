import { StaticImageData } from "next/image";
import img from "./img.png";

export interface IHeaderItem {
  title: string;
  inner: Array<string>;
}

export interface ICard {
  icon: StaticImageData;
  title: string;
  text: string;
}

export const LOGIN_MOCK ={
  username: "admin",
  password: "1234"
}

export const CARDS = [
  {
    icon: img,
    title: "Spring boot",
    text: `Takes an opinionated view of building 
                  Spring applications and gets you up and 
                  running as quickly as possible.`,
  },
  {
    icon: img,
    title: "Spring Framework",
    text: `Provides core support for dependency injection, 
                  transaction management, web apps, data access, 
                  messaging, and more.`,
  },
  {
    icon: img,
    title: "Spring Data",
    text: `Provides a consistent approach to data access – 
                  relational, non-relational, map-reduce, 
                  and beyond.`,
  },
  {
    icon: img,
    title: "Spring Cloud",
    text: `Provides a set of tools for common patterns in distributed systems. 
                  Useful for building and deploying microservices.`,
  },
  {
    icon: img,
    title: "Spring Cloud Data Flow",
    text: `Provides an orchestration service for composable
                   data microservice applications on modern runtimes.`,
  },
  {
    icon: img,
    title: "Spring Security",
    text: `Protects your application with comprehensive and 
                  extensible authentication and authorization support.`,
  },
];

export const HEADER_ITEMS = [
  {
    title: "Why Spring",
    inner: [
      "Overview",
      "Microservices",
      "Reactive",
      "Event Driven",
      "Cloud",
      "Web Applications",
      "Serverless",
      "Batch",
    ],
  },
  {
    title: "Learn",
    inner: [
      "Overview",
      "Microservices",
      "Reactive",
      "Event Driven",
      "Cloud",
      "Web Applications",
      "Serverless",
      "Batch",
    ],
  },
  {
    title: "Projects",
    inner: [
      "Overview",
      "Microservices",
      "Reactive",
      "Event Driven",
      "Cloud",
      "Web Applications",
      "Serverless",
      "Batch",
    ],
  },
  {
    title: "Academy",
    inner: [
      "Overview",
      "Microservices",
      "Reactive",
      "Event Driven",
      "Cloud",
      "Web Applications",
      "Serverless",
      "Batch",
    ],
  },
  {
    title: "Support",
    inner: [
      "Overview",
      "Microservices",
      "Reactive",
      "Event Driven",
      "Cloud",
      "Web Applications",
      "Serverless",
      "Batch",
    ],
  },
  {
    title: "Community",
    inner: [
      "Overview",
      "Microservices",
      "Reactive",
      "Event Driven",
      "Cloud",
      "Web Applications",
      "Serverless",
      "Batch",
    ],
  },
];

export const TITLE = "Projects";

export const DESCRIPTION = `
  From configuration to security, web apps to big data—whatever the
  infrastructure needs of your application may be, there is a Spring
  Project to help you build it. Start small and use just what you
  need—Spring is modular by design.
`;
