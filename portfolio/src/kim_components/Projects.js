import '../kim_styles/css/Projects.css'
import photo1 from '../kim_Projects1.jpg'
import photo2 from '../kim_Projects2.jpg'
import photo3 from '../kim_Projects3.jpg'

const Projects = () => {
    return (
        <>
            <div className='mainBody'>
                <p className='title'>PROJECTS</p>
                <h2>아래와 같은 활동들로 실력을 기르고 있습니다.</h2>
                <div className='articles'>
                    <p>클론 코딩을 통해 간단한 프론트엔드의 기능을 구현하여 코딩과 친해지려 노력하였습니다.</p>
                    <p>그 외에도 코딩테스트를 백준의 문제들로 풀고, 스터디원들과 함께 여러 문제들의 코드를 공유하여,</p>
                    <p><b>"더 나은"</b> 코드가 무엇을 의미하는 건지에 대해 깨닫게 되었습니다.</p>
                    <p>나머지는 여러 사이드 프로젝트를 통해 배운 것들을 다시 한 번 사용해보고, 나의 것으로 만들기 위해 노력하고 있습니다.</p>
                </div>
                <div className='photos'>
                    <img src={photo1} alt='photo1' width='500px' height='500px' />
                    <img src={photo2} alt='photo2' width='500px' height='500px' />
                    <img src={photo3} alt='photo3' width='500px' height='500px' />
                </div>
            </div>
        </>
    )
}

export default Projects