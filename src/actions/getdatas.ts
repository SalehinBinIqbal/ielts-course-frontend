// actions/getdatas.ts
"use server";

import { getLocale } from "next-intl/server";

export async function fetchCourseData() {  // Renamed from useGetDatas
    const base_url = process.env.API_BASE_URL;
    const local = await getLocale();

    try {
        const response = await fetch(`${base_url}/products/ielts-course?lang=${local}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept-Language": local,
                "X-TENMS-SOURCE-PLATFORM": "web",
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}