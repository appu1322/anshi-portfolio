export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://portfolio-d737.vercel.app/sitemap.xml",
  };
} 
