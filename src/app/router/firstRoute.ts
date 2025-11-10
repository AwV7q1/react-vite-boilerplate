import { roles } from "@shared/constants/role";

export const firstRoute = {
  [roles.superAdmin]: "/",
  [roles.hr]: "/",
  [roles.accountant]: "/",
  [roles.employee]: "/",
};