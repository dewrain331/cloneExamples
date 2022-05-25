import '../kim_styles/css/Skills.css'

const Skills = () => {
    return (
        <>
            <div className='mainBody'>
                <p className='title'>SKILLS</p>
                <h2>저는 지금 아래와 같은 기술들을 배우고 있습니다.</h2>
                <div className='articles'>
                    <p>22년 1월 10일부터 엘리스의 교육과정을 통해 현재 프론트엔드와 백엔드에 관련된 기술을 배우고 있습니다.</p>
                    <p>수업이 끝난 후에도 스터디를 통해 프론트엔드를 더욱 숙달하기 위해 수 차례의 클론코딩을 팀원들과 함께 하였고,</p>
                    <p>또 다른 스터디에서는 여러 프로그래밍 언어를 배움과 동시에 코딩테스트를 통한 역량 향상을 도모하고 있습니다. 저는 파이썬으로 준비 중입니다!</p>
                    <p>그 외에도 혼자서 인터넷 강의 등을 통해 게임 엔진 중 하나인 유니티 엔진에 대한 공부를 하고 있습니다.</p>
                </div>
                <div className='visual'>
                    <div className='skills'>
                        <div className='items'>
                            <h4><u>Front-end Skills</u></h4>
                            <p><b>Confidence</b> : 60%</p>
                            HTML, CSS, JS를 이용하여 수 차례의 클론코딩을 하였습니다. 현재는 React를 배우고 실습 중에 있습니다.
                        </div>
                        <div className='items'>
                            <h4><u>Back-end Skills</u></h4>
                            <p><b>Confidence</b> : 10%</p>
                            Node.js와 Express를 배우고 MongoDB를 이용한 DB 연결까지 할 수 있으나 실습을 진행하지는 않았습니다.
                        </div>
                        <div className='items'>
                            <h4><u>Unity Engine</u></h4>
                            <p><b>Confidence</b> : 5%</p>
                            유튜브에 올려진 강의를 통해 하나하나 알아가는 중입니다. 간단한 플랫포머 게임 개발을 시도하고 있습니다.
                        </div>
                        <div className='items'>
                            <h4><u>Python</u></h4>
                            <p><b>Confidence</b> : 25%</p>
                            백준의 여러 문제들을 풀며 Python 활용에 자신감을 붙여나가고 있습니다.
                        </div>
                    </div>
                    <div className='chart'></div>
                </div>
            </div>
        </>
    )
}

export default Skills