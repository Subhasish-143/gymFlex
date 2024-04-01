import { trainers } from "../../data"
import CommonHeader from "../../components/CommonHeader"
import HeaderImage from "../../images/header_bg_5.jpg"
import Trainer from './Trainer'
import { BsInstagram } from "react-icons/bs"
import { AiOutlineTwitter } from "react-icons/ai"
import { FaFacebook, FaLinkedin } from "react-icons/fa"
import './Trainers.css'

const Trainers = () => {
  return (
    <div>
        <CommonHeader title="Trainers" image={HeaderImage}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sunt voluptatum quibusdam, cupiditate ab ut aperiam nulla corporis asperiores. Illum accusantium quidem rerum assumenda.
        </CommonHeader>
        <section className="trainers">
            <div className="container trainer_container">
                {
                    trainers.map(({id, image, name, job, socials}, index) => (
                        <Trainer key={id} image={image} name={name} job={job} socials={
                        [    {icon: <BsInstagram/>, link: socials[0]},
                            {icon: <AiOutlineTwitter/>, link: socials[1]},
                            {icon: <FaFacebook/>, link: socials[2]},
                            {icon: <FaLinkedin/>, link: socials[3]},
                        ]
                        }/>
                    ))
                }
            </div>
        </section>
    </div>
  )
}

export default Trainers