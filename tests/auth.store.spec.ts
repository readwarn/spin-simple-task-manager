import { beforeEach, describe, expect, it } from "vitest";
import type { Task } from "~/types/task";

describe("TaskStore", () => {
  beforeEach(() => {
    const store = authStore();
    store.$reset();
  });

  it("user is logged out/null by default", () => {
    const store = authStore();
    expect(store.user).toBe(null);
  });

  it("can login and save new user", () => {
    const store = authStore();
    const user = {
      username: "Rilwan",
    };
    const userInitials = "Ri";
    store.saveAuthuser(user);
    const storeUser = store.user;
    const storeUserInitials = store.initials;
    const storeIsLoggedIn = store.loggedIn;
    expect(storeUser).toEqual(user);
    expect(storeUserInitials).toEqual(userInitials);
    expect(storeIsLoggedIn).toBe(true);
    store.clearUser();
    expect(store.user).toBe(null);
  });
});
