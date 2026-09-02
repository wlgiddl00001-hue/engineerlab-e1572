import Image from "next/image";
import Coupon from "./Coupon";
import pages from "../data/pages.json";
import {articleContent} from "../data/articleContent";

export type Page={slug:string,title:string,h1:string,description:string,category:string,keywords:string[],hero:string};

const imagePool=["lecture-1.jpg","lecture-2.jpg","lecture-3.jpg","lecture-4.jpg","lecture-5.jpg","lecture-6.jpg","lecture-7.jpg","lecture-8.jpg","cbt-screen.jpg"];

const faqByCategory:Record<string,[string,string][]>={
 "자격증":[
  ["인강은 필기와 실기를 모두 들어야 하나요?","현재 준비 단계와 보유한 기초에 따라 다릅니다. 필기 합격 전이라면 필기 범위를 우선하고, 실기 준비 단계라면 답안 작성과 기출문제 풀이가 충분한 강좌인지 확인하세요."],
  ["강좌를 고를 때 가장 먼저 볼 기준은 무엇인가요?","교수의 설명 방식, 강좌 범위, 수강기간을 먼저 확인하고 본인의 시험일까지 실제로 복습할 시간이 확보되는지 계산하는 것이 좋습니다."],
  ["할인코드는 언제 확인하면 되나요?","강좌를 결정한 뒤 결제 직전에 e1572 적용 여부와 최종 금액을 확인하세요. 상품과 이벤트 시점에 따라 조건이 달라질 수 있습니다."]
 ],
 "교수":[
  ["교수 선택은 후기만 보고 결정해도 되나요?","후기는 참고 자료로 활용하고 실제 강의 화면이나 샘플에서 설명 속도, 판서, 문제풀이 순서를 직접 확인하는 편이 좋습니다."],
  ["같은 교수의 강좌는 모두 내용이 같은가요?","필기·실기·기출특강처럼 강좌 목적과 범위가 다를 수 있으므로 강좌명과 커리큘럼을 별도로 확인해야 합니다."],
  ["교수 선택 뒤에는 무엇을 비교해야 하나요?","수강기간, 교재, 복습 가능 기간과 현재 시험 단계가 맞는지 확인한 뒤 최종 결제 조건을 비교하세요."]
 ],
 "후기":[
  ["수강후기는 무엇을 중심으로 보면 좋나요?","합격 여부만 보기보다 비전공 여부, 직장 병행, 준비 기간 등 본인과 비슷한 조건의 수험생이 강의를 어떻게 활용했는지 확인하세요."],
  ["후기와 실제 강의 화면을 같이 봐야 하나요?","후기에서 알기 어려운 설명 속도와 판서량은 실제 강의 화면을 함께 보면 판단하기 쉽습니다."],
  ["후기만으로 수강을 결정해도 되나요?","후기는 참고 자료이며 강좌 구성과 가격, 수강기간, 최종 할인 조건까지 직접 확인한 뒤 결정하는 것이 좋습니다."]
 ],
 "할인혜택":[
  ["이 사이트에서 안내하는 할인코드는 무엇인가요?","할인코드는 e1572입니다. 영문 소문자 e와 숫자 1572를 붙여 입력하세요."],
  ["모든 상품에 같은 할인이 적용되나요?","상품과 이벤트 시점에 따라 적용 조건이 달라질 수 있습니다. 결제 전 공식 판매 페이지에서 최종 금액을 확인하세요."],
  ["코드는 언제 입력하는 것이 좋나요?","강좌를 먼저 선택한 뒤 회원가입 또는 결제 과정에서 코드 입력란이 있을 때 e1572를 입력하고 적용 결과를 확인하세요."]
 ],
 "학습가이드":[
  ["하루에 강의를 많이 들으면 진도가 빨라질까요?","영상 시청량보다 문제풀이와 복습까지 끝내는 것이 중요합니다. 하루 분량은 실제 복습 시간을 포함해 정하는 편이 좋습니다."],
  ["기출문제는 언제부터 풀어야 하나요?","기초 개념을 어느 정도 이해한 뒤 가능한 한 일찍 병행하면 출제 방식과 취약 영역을 빠르게 확인할 수 있습니다."],
  ["인강을 고를 때 할인도 중요한가요?","가격은 중요한 비교 요소지만 강좌 범위와 수강기간이 본인의 계획에 맞는지 먼저 확인한 뒤 할인 조건을 비교하는 것이 좋습니다."]
 ]
};

export default function Article({p}:{p:Page}){
 const unique=articleContent[p.slug];
 const idx=[...p.slug].reduce((a,c)=>a+c.charCodeAt(0),0)%imagePool.length;
 const images=[imagePool[idx],imagePool[(idx+3)%imagePool.length]];
 const related=(pages as Page[]).filter(x=>x.slug!==p.slug&&(x.category===p.category||x.keywords.some(k=>p.keywords.includes(k)))).slice(0,3);
 const faqs=faqByCategory[p.category]||faqByCategory["학습가이드"];
 const jsonLd={"@context":"https://schema.org","@type":"Article",headline:p.h1,description:p.description,mainEntityOfPage:`https://engineerlab-e1572.vercel.app/${p.slug}`,keywords:p.keywords.join(", ")};
 return <main>
  <section className="articleHero"><div><span className="eyebrow">{p.category}</span><h1>{p.h1}</h1><p>{p.description}</p><Coupon compact/></div><div className="heroImage"><Image src={`/images/${p.hero}`} alt={`${p.keywords[0]} 관련 강의 자료`} fill priority sizes="(max-width:800px) 100vw, 42vw"/></div></section>
  <article className="content">
   <div className="toc"><b>이 글에서 확인할 내용</b>{unique?.sections.map(([h],i)=><a key={h} href={`#point${i+1}`}>{h}</a>)}<a href="#apply">할인코드 e1572 적용 확인</a></div>
   <p className="articleLead">{unique?.lead||p.description}</p>
   {unique?.sections.map(([heading,text],i)=><section id={`point${i+1}`} key={heading}><h2>{heading}</h2><p>{text}</p>{i===1&&<div className="imageGrid"><Image src={`/images/${images[0]}`} width={800} height={430} alt={`${p.keywords[0]} 강의 화면 자료`}/><Image src={`/images/${images[1]}`} width={800} height={430} alt={`${p.keywords[Math.min(1,p.keywords.length-1)]} 학습 자료`}/></div>}</section>)}
   <section className="keywordContext"><h2>{p.keywords[0]} 검색에서 함께 확인할 내용</h2><p>{p.keywords.slice(0,4).join(" · ")}처럼 비슷한 검색어라도 원하는 정보는 조금씩 다를 수 있습니다. 시험 단계, 현재 수준, 남은 준비 기간을 먼저 정하고 필요한 강좌와 학습 자료를 좁혀보세요. 페이지의 강의 자료와 후기 이미지는 수강 판단을 돕는 참고 자료로 활용할 수 있습니다.</p></section>
   <section id="apply" className="apply"><h2>수강을 결정했다면 할인코드 e1572 확인</h2><p>강좌와 수강 조건을 모두 확인했다면 결제 전에 <b>e1572</b>를 복사해 두세요. 코드 입력란이 있는 경우 정확히 입력하고, 적용 대상·할인 금액·이벤트 기간은 공식 결제 화면의 최종 조건을 기준으로 확인하는 것이 안전합니다.</p><Coupon/></section>
   {related.length>0&&<section><h2>함께 보면 좋은 엔지니어랩 수강 가이드</h2><div className="relatedLinks">{related.map(r=><a key={r.slug} href={`/${r.slug}`}><b>{r.h1}</b><span>{r.description}</span></a>)}</div></section>}
   <section><h2>자주 묻는 질문</h2>{faqs.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</section>
  </article>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}}/>
  <div className="mobileBar"><span>할인코드 e1572</span><a href="/engineerlab-discount-code">적용방법 보기</a></div>
 </main>
}
