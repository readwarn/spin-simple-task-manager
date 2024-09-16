import type { Task } from "~/types/task";

export const INITIAL_TASKS: Task[] = [
  {
    title: "Design Landing Page",
    description:
      "Create a responsive layout for the new product's landing page using Figma.",
    done: false,
    id: "INITIAL_ID_1",
  },
  {
    title: "Refactor Authentication Flow",
    description:
      "Update the authentication system to use OAuth 2.0, replacing the legacy method.",
    done: true,
    id: "INITIAL_ID_2",
  },
  {
    title: "Optimize Image Loading",
    description:
      "Implement lazy loading for images to improve page performance on mobile devices.",
    done: false,
    id: "INITIAL_ID_3",
  },
  {
    title: "Set Up Unit Testing",
    description:
      "Configure Jest and write unit tests for the user registration components.",
    done: true,
    id: "INITIAL_ID_4",
  },
];
