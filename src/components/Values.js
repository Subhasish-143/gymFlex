import {GiCutDiamond} from 'react-icons/gi'

import value_img from '../images/values.jpg'
import SectionHead from './SectionHead'
import {values} from '../data'
import Card from './Card'

const Values = () => {
  return (
    <section className="values">
        <div className="container values_container">
            <div className="values_left">
                <div className="values_image">
                    <img src={value_img} alt="values" />
                </div>
            </div>
            <div className="values_right">
                <SectionHead icon={<GiCutDiamond/>} title="Values" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum sed ipsa praesentium cum </p>
                <div className="values_wrapper">
                    {
                        values.map(({id, icon, title, desc}) => (
                            <Card className="values_value" key={id}>
                                <span>{icon}</span>
                                <h4>{title}</h4>
                                <small>{desc}</small>
                            </Card>
                        ))
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Values