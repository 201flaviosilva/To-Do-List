type HTTPCodesMessageReturn = {
  title: string;
  type: "success" | "error";
  message?: string;
};
export function HTTPCodesMessage(
  code: string
): HTTPCodesMessageReturn | undefined {
  switch (code) {
    case "200":
      return {
        type: "success",
        title: "OK",
        message: "Successfully Logged In",
      };

    case "201":
      return {
        type: "success",
        title: "Created",
        message: "User created",
      };

    case "401":
      return {
        type: "error",
        title: "Unauthorized",
        message: "User not found or incorrect password",
      };

    case "409":
      return {
        type: "error",
        title: "Conflict",
        message: "User already exists",
      };

    default:
      break;
  }
}
