import type {MetadataRoute} from "next";

const base="https://engineerlab-e1572.vercel.app";

export default function robots():MetadataRoute.Robots{
 return{rules:{userAgent:"*",allow:"/"},sitemap:`${base}/sitemap.xml`,host:base};
}
