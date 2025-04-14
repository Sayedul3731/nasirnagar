import { clsx } from "clsx";
import dayjs from "dayjs";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: (string | undefined | null | boolean)[]): string {
  return twMerge(clsx(inputs));
}

export const qString = (obj: Record<string, unknown>): string => {
  const params = new URLSearchParams();

  for (const [key, value] of Object.entries(obj)) {
    if (
      typeof value === "object" &&
      value !== null &&
      Object.keys(value).length === 0
    ) {
      continue;
    }

    if (typeof value === "object" && value !== null) {
      params.set(key, JSON.stringify(value));
    } else if (value !== "") {
      params.set(key, String(value));
    }
  }

  const queryString = params.toString();

  return queryString ? queryString : "";
};

export const boolString = (data: boolean | unknown): string => {
  return typeof data === "boolean" ? (data ? "YES" : "NO") : "";
};

export const dateFormatter = (dateString: string): string => {
  return dayjs(dateString).format("YYYY-MM-DD");
};

export const selftDashboardPath = (
  pathname: string,
  id: string | number
): string => `${pathname.replace("/new", "/view")}/${id}`;

export function isValidUrl(string: string): boolean {
  try {
    new URL(string);
    return true;
  } catch {
    return false;
  }
}

export const replaceZeroOrEmptyWithNull = (
  obj: Record<string, string | number | null | boolean | undefined>
): Record<string, string | number | null | boolean | undefined> => {
  return Object.keys(obj).reduce((acc, key) => {
    acc[key] = obj[key] === 0 || obj[key] === "" ? null : obj[key];
    return acc;
  }, {} as Record<string, string | number | null | boolean | undefined>);
};

import React from "react";

export const requiredLabel = (label: string): React.ReactElement => (
  <span>
    {label} <span className="text-red-500">*</span>
  </span>
);
