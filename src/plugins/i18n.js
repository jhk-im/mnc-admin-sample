import i18n from "@/i18n";

/**
 * Date format
 */
["en", "kr"].forEach((locale) => {
  i18n.setDateTimeFormat(locale, {
    short: {
      year: "numeric",
      month: "short",
      day: "numeric",
    },
    long: {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "long",
    },
  });
});

/**
 * Number format
 */
i18n.setNumberFormat("en", {
  currency: {
    style: "currency",
    currency: "USD",
  },
});
i18n.setNumberFormat("kr", {
  currency: {
    style: "currency",
    currency: "WON",
  },
});
