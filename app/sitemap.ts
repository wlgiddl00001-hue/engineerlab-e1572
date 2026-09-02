import type {MetadataRoute} from "next";
import pages from "../data/pages.json";

const base="https://engineerlab-e1572.vercel.app";

export default function sitemap():MetadataRoute.Sitemap{
 return [
  {url:base,lastModified:new Date(),changeFrequency:"weekly",priority:1},
  ...(pages as any[]).map(p=>({url:`${base}/${p.slug}`,lastModified:new Date(),changeFrequency:p.category==="학습가이드"?"monthly" as const:"weekly" as const,priority:p.category==="자격증"?0.9:p.category==="할인혜택"?0.9:0.75}))
 ];
}
