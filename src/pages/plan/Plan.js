import CommonHeader from '../../components/CommonHeader'
import { plans } from '../../data'
import HeaderImage from '../../images/header_bg_4.jpg'
import Card from '../../components/Card'

import './Plan.css'
const Plan = () => {
  return (
    <div>
        <CommonHeader title="Plans" image={HeaderImage}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ullam explicabo voluptatibus placeat, rerum iste perspiciatis quaerat voluptatem laboriosam similique?
        </CommonHeader>
        <section className="plans">
            <div className="container plans_container">
                {
                    plans.map(({id, name, desc, price, features}) => (
                        <Card className="plan" key={id}>
                            <h3>{name}</h3>
                            <small>{desc}</small>
                            <h1>{`$${price}`}</h1>
                            <h4>features</h4>
                            {
                                features.map(({feature, available}, index) => (
                                    <p key={index} className={available ? 'disabled' : ''}>
                                        {feature}
                                    </p>
                                ))
                            }
                            <button className="btn lg">Choose Plan</button>
                        </Card>
                    ))
                }
            </div>
        </section>
    </div>
  )
}

export default Plan