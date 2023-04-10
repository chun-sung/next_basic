import Layout from "@/components/Layout";
import ProjectItem from "@/components/projects/project-item";
import Seo from "@/components/Seo";

export default function Projects({projects}) {

    console.log(projects)

    return (
        <Layout>
            <div  className="flex flex-col items-center justify-center min-h-screen mb-10 px-6">
                <Seo title='프로젝트'/>
                <h1 className="text-2xl font-bold sm:text-4xl">총 프로젝트 :  
                    <span className="pl-4 text-blue-500">{projects.results.length}</span> 개 
                </h1>
                <div className="grid grid-cols-1 py-10 m-6 md:grid-cols-2 gap-8">
                    {projects.results.map((aProject) => (
                        <ProjectItem key={aProject.id} data={aProject} />
                    ))}
                </div>
            </div>
        </Layout>
    )
}


// 빌드 타임에 호출
export async function getStaticProps(context) {

    const options = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'Notion-Version': '2022-06-28',
          'content-type': 'application/json',
          Authorization: `Bearer ${process.env.NOTION_TOKEN}`
        },
        body: JSON.stringify({
            sorts: [             // 정렬 옵션
                {
                    "property": "이름",
                    "direction": "ascending",
                }
            ],
            page_size: 100,     // 100 개 까지
        })
      };
      
    const res = await  fetch(`https://api.notion.com/v1/databases/${process.env.NOTION_DATABASE_ID}/query`, options)
    const projects = await res.json()
    
    return {
      props: {projects}, // will be passed to the page component as props
    }
}