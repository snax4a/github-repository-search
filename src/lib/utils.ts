export const numberFormatter = new Intl.NumberFormat("en-US", {
  notation: "compact",
  compactDisplay: "short",
});

export const formatRelativePastTime = (dateToFormat: Date | string) => {
  const now = new Date();
  const diffInMs = now.getTime() - new Date(dateToFormat).getTime();
  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

  if (diffInMs < 0) {
    return "Invalid date: time cannot be in the future";
  } else if (diffInMs < 60 * 1000) {
    return "just now";
  } else if (diffInMs < 60 * 60 * 1000) {
    const diffInMins = Math.round(diffInMs / (60 * 1000));
    return `${rtf.format(-diffInMins, "minute")}`;
  } else if (diffInMs < 24 * 60 * 60 * 1000) {
    const diffInHours = Math.round(diffInMs / (60 * 60 * 1000));
    return `${rtf.format(-diffInHours, "hour")}`;
  } else if (diffInMs < 7 * 24 * 60 * 60 * 1000) {
    const diffInDays = Math.round(diffInMs / (24 * 60 * 60 * 1000));
    return `${rtf.format(-diffInDays, "day")}`;
  } else {
    const diffInWeeks = Math.round(diffInMs / (7 * 24 * 60 * 60 * 1000));
    return `${rtf.format(-diffInWeeks, "week")}`;
  }
};
