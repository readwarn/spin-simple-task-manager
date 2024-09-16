import { z } from "zod";
import type { Task } from "~/types/task";

export const useTaskValidation = () => {
  const taskShema = z.object({
    title: z
      .string()
      .min(8, { message: "Task title should be at least 5 characters long" }),
    description: z.string().min(15, {
      message: "Task description should be at least 15 characters long",
    }),
  });
  const titleError = ref<string | undefined>(undefined);
  const descriptionError = ref<string | undefined>(undefined);
  const valid = ref(false);

  const validateSchema = (task: Task) => {
    const issues = taskShema.safeParse(task)?.error?.issues;
    if (issues?.length) {
      titleError.value = issues?.find((issue) =>
        issue.path.includes("title")
      )?.message;

      descriptionError.value = issues?.find((issue) =>
        issue.path.includes("description")
      )?.message;

      return;
    }
    valid.value = true;
  };

  const clearTitleError = () => {
    titleError.value = "";
  };
  const clearDescriptionError = () => {
    descriptionError.value = "";
  };

  return {
    titleError,
    descriptionError,
    validateSchema,
    valid,
    clearTitleError,
    clearDescriptionError,
  };
};
