import dayjs from "dayjs";

export async function getCarsList(
  page: number | string | null = 1,
  location: string | null = "kutaisi",
  start_date: string | null = dayjs().format("YYYY-MM-DD[T]HH:mm"),
  end_date: string | null = dayjs().add(1, "day").format("YYYY-MM-DD[T]HH:mm"),
  sortValue: string | null = "",
  type: any = ""
) {
  const lowerCaseType = Array.isArray(type)
    ? type.map((i: string) => i.toLowerCase())
    : [];

  const url = `${
    process.env.NEXT_PUBLIC_BASE_URL
  }/api/cars/?location=${location}&start_date=${start_date}&end_date=${end_date}&page=${page}${
    sortValue ? `&ordering=${sortValue}` : ""
  }&${type ? `body_type=${lowerCaseType}` : ""}`;
  const response = await fetch(url, {
    cache: "no-cache",
    headers: {
      Authorization: `Token ${process.env.NEXT_PUBLIC_API_URL}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch cars");
  }

  return response.json();
}

export async function getSingleCar(
  id: number,
  location: string | null = "kutaisi",
  start_date: string | null = dayjs().format("YYYY-MM-DD[T]HH:mm"),
  end_date: string | null = dayjs().add(1, "day").format("YYYY-MM-DD[T]HH:mm")
) {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/cars/${id}/?location=${location}&start_date=${start_date}&end_date=${end_date}`;
  const response = await fetch(`${url}`, {
    cache: "no-store",
    headers: {
      Authorization: `Token ${process.env.NEXT_PUBLIC_API_URL}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch car");
  }

  return response.json();
}

export async function reserveACar(body: any) {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/reservations/`;

  const response = await fetch(`${url}`, {
    method: "POST",
    cache: "no-cache",
    headers: {
      Authorization: `Token ${process.env.NEXT_PUBLIC_API_URL}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch course");
  }

  return response.json();
}

export async function getOptionalServices() {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/services/`;

  const response = await fetch(`${url}`, {
    cache: "no-cache",
    headers: {
      Authorization: `Token ${process.env.NEXT_PUBLIC_API_URL}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch course");
  }

  return response.json();
}

export async function getISO() {
  const response = await fetch(
    "https://country-code-au6g.vercel.app/Country.json"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch course");
  }

  return response.json();
}

export const getUserCountry = async (ISO: any) => {
  if (typeof window !== "undefined" && navigator.geolocation) {
    return new Promise<string | null>((resolve) => {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          try {
            const response = await fetch(
              `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
            );

            if (response.ok) {
              const data = await response.json();
              const countryCode = data.countryCode;

              const country = ISO.find((c: any) => c.value === countryCode);
              if (country) {
                resolve(country.code);
                return;
              }
            }
          } catch (error) {
            console.error("Geolocation API error:", error);
          }

          resolve(null);
        },
        () => resolve(null)
      );
    });
  }

  return null;
};
