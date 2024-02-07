import SectionHead from "./SectionHead"
import {ImQuotesLeft} from 'react-icons/im'
import {IoIosArrowDropleftCircle,IoIosArrowDroprightCircle} from 'react-icons/io'

import { useState } from "react"
import Card from "./Card"

import { testimonials } from "../data"

const Testimonials = () => {
    const [index,setIndex] = useState(0);
    const {name, quote, job, avatar} = testimonials[index];

    function previousTestimonial () {
        if (index > 0) {
            setIndex(index - 1);
        }
        else setIndex(testimonials.length - 1);
    }

    function nextTestimonial () {
        if (index < testimonials.length-1) {
            setIndex(index + 1);
        }
        else {
            setIndex(0);
        }
    }

  return (
    <section className="testimonials">
        <div className="container testimonials_container">
            <SectionHead icon={<ImQuotesLeft/>} title="Testimonials" className="testimonials_head"/>
            <Card className="testimonial">
                <div className="testimonial_avatar">
                    <img src={avatar} alt={name} />
                </div>
                <p className="testimonial_quotes">
                    {`"${quote}"`}
                </p>
                <h5>{name}</h5>
                <small className="testimonial_title">{job}</small>
            </Card>
            <div className="testimonials_btn-container">
                <button className="testimonials_btn" onClick={previousTestimonial}>
                    {<IoIosArrowDropleftCircle/>}
                </button>
                <button className="testimonials_btn" onClick={nextTestimonial}>
                    {<IoIosArrowDroprightCircle/>}
                </button>
            </div>
        </div>
    </section>
  )
}

export default Testimonials