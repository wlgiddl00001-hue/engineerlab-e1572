export function cleanSeoText(text:string){
 return text
  .replaceAll("공기업를","공기업을")
  .replaceAll("방법를","방법을")
  .replaceAll("기준를","기준을")
  .replaceAll("항목를","항목을")
  .replaceAll("과정를","과정을")
  .replaceAll("계획를","계획을")
  .replaceAll("것를","것을")
  .replaceAll("순서 정리를 중심으로","순서를 중심으로")
  .replaceAll("공부계획를","공부계획을");
}
