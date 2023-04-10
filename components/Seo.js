import Head from "next/head";

export default function Seo({title, keyword, contents}){

    return <Head>        
        <title>{title} | 빡코딩</title>
        <meta name="description" content="오늘도 빡코딩!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
}

Seo.defaultProps = {
    title: 'My Blog',
    keyword: 'Blog powerd by NextJS',
    contents: 'practice nextJS'
}