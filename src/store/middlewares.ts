import { isRejectedWithValue } from "@reduxjs/toolkit";
import type { Middleware, MiddlewareAPI } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const rtkQueryErrorLogger: Middleware =
  (api: MiddlewareAPI) => (next) => (action) => {
    if (isRejectedWithValue(action)) {
      toast.error(
        action.payload.data.message || "Во время запроса произошла ошибка"
      );
    }

    return next(action);
  };
