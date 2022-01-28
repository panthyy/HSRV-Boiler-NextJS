import { NextPage } from 'next'
import withTransition from '../HOC/withTransition'

const Home: NextPage = () => {
    return (
        <div className=" flex item-center justify-center ">
            <div className="">
                <h1 className='HeroHeading'> Hero Heading</h1>
                <h1>h1-Heading</h1>
                <h2>h2-Heading</h2>
                <h3>h3-Heading</h3>
                <h4>h4-Heading</h4>
                <h5>h5-Heading</h5>
                <p>p-PARAGRAPH</p>
            </div>
        </div>
    )
}

export default withTransition(Home)
