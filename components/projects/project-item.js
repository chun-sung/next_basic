import Link from "next/link";
import Image from "next/image";

export default function ProjectItem({data}) {

    const title = data.properties.이름.title[0]?.plain_text;
    const github = data.properties.Github.url;
    const youtube = data.properties.YouTube.url;
    const desc = data.properties.설명.rich_text[0].plain_text;
    const img = data.cover.external.url;
    const tags = data.properties.태그.multi_select;
    const start = data.properties.WorkPeriod.date.start;
    const end = data.properties.WorkPeriod.date.end;
    // console.log(youtube)

    // 작업기간 계산함수 (남은 일수)
    const calculatedPeriod = (start, end) => {
        const startDateStringArray = start.split('-');
        const endDateStringArray = end.split('-');

        var startDate = new Date(startDateStringArray[0], startDateStringArray[1], startDateStringArray[2]);
        var endDate = new Date(endDateStringArray[0], endDateStringArray[1], endDateStringArray[2]);

        console.log(`startDate: ${startDate}`)
        console.log(`endDate: ${endDate}`)

        const diffInMs = Math.abs(endDate - startDate);
        const result = diffInMs / (1000 * 60 * 60 * 24);

        console.log(`기간 : ${result}`)
        return result;
    };

    return (
        <div className="project-card flex flex-col p-2 m-3 bg-slate-600 rounded-xl">   
            <Image className="rounded-t-xl" src={img} width="350" height="300" />
            <div className="p-4 flex flex-col">
                <h1 className="text-2xl font-bold">{title}</h1>
                <h3 className="mt-4 text-xl">{desc}</h3>
                <Link href={github}>깃허브 바로가기</Link>
                <Link href={youtube}>유튜브 시연영상 바로가기</Link> 
                <h3 className="mt-4 text-xl">
                    작업기간 : {start} ~ <br />{end} ({calculatedPeriod(start, end)}일)
                </h3>
                <div className="flex items-start mt-2">
                    {tags.map((aTag) => (
                        <h1 className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30" key={aTag.id}>{aTag.name}</h1>
                        
                    ))}
                </div>
            </div>                   
        </div>
    )
}