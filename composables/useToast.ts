export const TOAST_KEY = "TOAST_KEY";

export type ToastType = "success" | "warning" | "error";

export type Toast = {
  message: string;
  type: ToastType;
  showToast: boolean;
  setToast: (alert: string, toastType?: ToastType, delay?: number) => void;
  closeToast: () => void;
};

export const provideToast = () => {
  const message = ref("");
  const showToast = ref(false);
  const type = ref<ToastType>("success");

  const closeToast = () => {
    showToast.value = false;
    // message.value = "";
    // type.value = "success";
  };

  const setToast = (
    alert: string,
    toastType: ToastType = "success",
    delay = 3000
  ) => {
    showToast.value = true;
    message.value = alert;
    type.value = toastType;

    setTimeout(() => {
      closeToast();
    }, delay);
  };

  provide(TOAST_KEY, {
    setToast,
    closeToast,
    message: message,
    type: type,
    showToast: showToast,
  });

  return {
    setToast,
    closeToast,
    message,
    type,
    showToast,
  };
};

export const useToast = () => {
  const toastState = inject<Toast>(TOAST_KEY, {
    message: "",
    type: "success",
    showToast: false,
    setToast(alert: string, toastType: ToastType = "success", delay = 3000) {
      console.log("YOU SHOULD PROVIDE TOAST FIRST", alert);
    },
    closeToast() {
      console.log("YOU SHOULD PROVIDE TOAST FIRST");
    },
  });

  return toastState;
};
