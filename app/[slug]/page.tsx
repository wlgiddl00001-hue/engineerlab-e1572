import {notFound} from "next/navigation";
import type {Metadata} from "next";
import pages from "../../data/pages.json";
import Article,{Page} from "../../components/Article";
import {cleanSeoText} from "../../lib/seoText";

export function generateStaticParams(){return (pages as Page[]).map(p=>({slug:p.slug}))}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
 const {slug}=await params;
 const p=(pages as Page[]).find(x=>x.slug===slug);
 if(!p)return{};
 let title=p.title;
 let description=cleanSeoText(p.description);
 let keywords=p.keywords;
 if(slug==="engineerlab-discount-code"){
  title="엔지니어랩 할인코드 e1572 | 6만원 할인·시크릿코드 적용방법";
  description="엔지니어랩 할인코드 e1572로 총 6만원 할인 혜택을 확인하세요. 코드 복사, 회원가입·수강신청 입력 위치, 적용 순서와 결제 전 확인사항을 한 번에 정리했습니다.";
  keywords=[...p.keywords,"엔지니어랩 6만원 할인","엔지니어랩 시크릿코드","엔지니어랩 할인쿠폰"];
 }
 if(slug==="engineerlab-price"){
  title="엔지니어랩 수강료·가격 비교 | e1572 6만원 할인";
  description="엔지니어랩 수강료와 강좌 구성을 비교하고 할인코드 e1572로 총 6만원 할인 적용 여부를 확인하는 방법을 정리했습니다.";
 }
 return{
  title,
  description,
  keywords,
  alternates:{canonical:`/${p.slug}`},
  openGraph:{title,description,type:"article",url:`/${p.slug}`},
  twitter:{card:"summary_large_image",title,description}
 };
}

export default async function PageView({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;
 const p=(pages as Page[]).find(x=>x.slug===slug);
 if(!p)notFound();
 return <Article p={{...p,description:cleanSeoText(p.description)}}/>;
}
