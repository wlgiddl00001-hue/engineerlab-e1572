import type {MetadataRoute} from "next";
import pages from "../data/pages.json";
export default function sitemap():MetadataRoute.Sitemap{const base=process.env.NEXT_PUBLIC_SITE_URL||"https://example.com";return [{url:base,lastModified:new Date(),changeFrequency:"weekly",priority:1},...(pages as any[]).map(p=>({url:`${base}/${p.slug}`,lastModified:new Date(),changeFrequency:"monthly" as const,priority:p.category==="자격증" ? 0.9 : 0.7}))]}
