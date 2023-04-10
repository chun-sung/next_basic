import Link from 'next/link';
import Animation from './Animation'

export default function Hero() {
    return (
        <>
         <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
         <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
         안녕하세요 빡빡이입니다!
         <br className="hidden lg:inline-block" />
         오늘도 빡코딩?
         </h1>
         <p className="mb-8 leading-relaxed">아름답고 사랑의 얼마나 속잎나고, 커다란 물방아 들어 철환하였는가? 이 같이, 청춘의 눈에 주며, 귀는 황금시대다. 사는가 동력은 가치를 사랑의 것이 희망의 것은 그들의 있다. 것은 우리 투명하되 피어나기 주며, 인생의 이것이다. 위하여서, 피가 것이다.보라, 것이다. 용기가 이상을 소리다.이것은 할지라도 사랑의 사막이다. 우리 하는 미묘한 밝은 황금시대를 구하지 품에 그러므로 이것이다. 끓는 끝까지 있음으로써 수 하였으며, 찾아 산야에 몸이 것이다. 설레는 같지 때까지 같이, 뭇 이상의 방황하였으며, 타오르고 부패뿐이다. 부패를 무엇을 청춘의 것이다.</p>
         <div className="flex justify-center">
         <Link href='/projects' className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
             프로젝트 보러가기
         </Link>              
         </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">                       
            <Animation />  
        </div>
     </>
    );
}