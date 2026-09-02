import {notFound} from "next/navigation";
import type {Metadata} from "next";
import pages from "../../data/pages.json";
import Article,{Page} from "../../components/Article";
export function generateStaticParams(){return (pages as Page[]).map(p=>({slug:p.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const p=(pages as Page[]).find(x=>x.slug===slug);if(!p)return{};return{title:p.title,description:p.description,keywords:p.keywords,alternates:{canonical:`/${p.slug}`},openGraph:{title:p.title,description:p.description,type:"article"}}}
export default async function PageView({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=(pages as Page[]).find(x=>x.slug===slug);if(!p)notFound();return <Article p={p}/>}
