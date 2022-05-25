import '../kim_styles/css/About.css'
import { FaGamepad } from "react-icons/fa"
import { BsServer } from "react-icons/bs"
import { GoBrowser } from "react-icons/go"

const About = () => {
    return (
        <>
            <div className='mainBody'>
                <p className='title'>ABOUT</p>
                <h2>"늦게 시작한 만큼, 열심히 배우겠습니다."</h2>
                <div className='articles'>
                    <h3>"개발과는 전혀 다른 공부를 했지만, '다름'이 '다양성'이 될 수 있도록 노력하겠습니다."</h3>
                    <p>철학과 출신은 현실 감각이 없고 고리타분하다는 편견에서 벗어나기 위해 나름의 노력을 했지만, 취업이 잘 되질 않았습니다.</p>
                    <p>하지만 저는 그 편견을 탓하기보다는, 편견에서 벗어날 수 있는 더욱 적극적인 행동을 취하기로 결심했고, 그 결심이 바로 개발이었습니다.</p>
                    <p>지금은 새로운 것을 배우기에 급급한 매일이지만, 언젠가 제가 익힌 실력으로 세상이 필요로 하는 것을 만들고 싶습니다.</p>
                    <h3>"철학에서 배운 관찰력과 사고력, 개발에도 응용할 수 있는 개발자가 되겠습니다."</h3>
                </div>
                <div className='canDo'>
                    <div className='items'>
                        <GoBrowser style={{fontSize: 40, color: 'rgb(0, 110, 255)'}}/>
                        <p>Front-End Skills</p>
                    </div>
                    <div className='items'>
                        <BsServer style={{fontSize: 40, color: 'orange'}}/>
                        <p>Back-End Skills</p>
                    </div>
                    <div className='items'>
                        <FaGamepad style={{fontSize: 40, color: 'purple'}}/>
                        <p>Unity Engine</p>
                    </div>
                </div>
            </div>
        </>
        )
}

export default About