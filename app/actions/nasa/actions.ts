"use server";

const API_KEY = "eNgfqz0aAQ3qITTceAZPeh5yieycbYbCknKG8J0b";

export const getNasaImage = async () => {
  try {
    const count = Math.floor(Math.random() * 10) + 1;
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?count=${count}&api_key=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch NASA image");
    }
    const data = await response.json();

    return {
      ok: true,
      data,
    };
  } catch (e) {
    throw new Error("Failed to fetch NASA image");
  }
};
