import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import routing from './routing';
import { cookies } from 'next/headers';



export default getRequestConfig(async ({ requestLocale }) => {
    // Typically corresponds to the `[locale]` segment
    let requested = await requestLocale;
    if (!requested) {
        // Read from cookie if the user is logged in
        const store = await cookies();
        requested = store.get("lang")?.value;
    }
    const locale = hasLocale(routing.locales, requested)
        ? requested
        : routing.defaultLocale;

    return {
        locale,
        messages: (await import(`./messages/${locale}.json`)).default
    };
});