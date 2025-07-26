import { defineRouting } from "next-intl/routing";

const routing = defineRouting({
    // A list of all locales that are supported
    locales: ['en', 'bn'],
    localePrefix: "always",
    // Used when no locale matches
    defaultLocale: 'en'
});

export default routing;