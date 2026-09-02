const videos=[
 {id:"K_k3DtFYZfk",title:"엔지니어랩 합격생 인터뷰 1"},
 {id:"GDnxsMiopdc",title:"엔지니어랩 합격생 인터뷰 2"},
 {id:"zUDPk_fop1A",title:"엔지니어랩 합격생 인터뷰 3"}
];

export default function SuccessVideos({compact=false}:{compact?:boolean}){
 return <div className={compact?"videoGrid compactVideos":"videoGrid"}>
  {videos.map(v=><div className="videoCard" key={v.id}>
   <div className="videoFrame"><iframe src={`https://www.youtube-nocookie.com/embed/${v.id}`} title={v.title} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen/></div>
   <p>{v.title}</p>
  </div>)}
 </div>
}
