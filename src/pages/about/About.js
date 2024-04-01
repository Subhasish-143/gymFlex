import CommonHeader from "../../components/CommonHeader"
import AboutHeader from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import './About.css';

import Position from "./Position";

const About = () => {
  return (
    <>
        <CommonHeader title="About Us" image={AboutHeader}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nulla voluptatem quam nobis. Officia tenetur assumenda qui similique cum molestiae hic rerum laborum id consequatur?
        </CommonHeader>
        <section className="about_story">
            <div className="container about_story-container">
                <Position image={StoryImage} imgLeft={true}>
                    <h1>Our Story</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat at repudiandae libero repellendus quo impedit. Incidunt delectus consectetur iusto esse minus reprehenderit, obcaecati quidem consequuntur dignissimos rerum aliquid officiis recusandae dolore nam aut. Recusandae eaque reprehenderit tempora rem quam aliquid veritatis distinctio libero iste?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium fugiat ab modi ducimus iusto nam! Sequi, exercitationem asperiores. Eos corporis dolor quae nulla fugiat accusantium voluptate similique cupiditate doloribus unde, aspernatur ipsam nisi? Dolor explicabo a dolores deserunt?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, praesentium. Alias sunt quae architecto impedit tenetur, rerum, inventore unde laborum voluptatem quos esse.</p>
                </Position>

                <Position image={VisionImage} imgLeft={false}>
                    <h1>Our Vision</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat at repudiandae libero repellendus quo impedit. Incidunt delectus consectetur iusto esse minus reprehenderit aliquid veritatis distinctio libero iste?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium fugiat ab modi ducimus iusto nam! Sequi, exercitationem asperiores. Eos corporis dolor quae nulla fugiat accusantium voluptate similique cupiditate doloribus unde, aspernatur ipsam nisi? Dolor explicabo a dolores deserunt?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, praesentium. Alias sunt quae architecto impedit tenetur, rerum, inventore unde laborum voluptatem quos esse.</p>
                </Position>

                <Position image={MissionImage} imgLeft={true}>
                    <h1>Our Mission</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat at repudiandae libero repellendus quo impedit. Incidunt delectus consectetur iusto esse minus reprehenderit, obcaecati quidem consequuntur dignissimos rerum aliquid officiis recusandae dolore nam aut. Recusandae eaque reprehenderit tempora rem quam aliquid veritatis distinctio libero iste?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium fugiat ab modi ducimus iusto nam! Sequi, exercitationem asperiores. Eos corporis dolor quae nulla fugiat accusantium voluptate similique cupiditate doloribus unde, aspernatur ipsam nisi? Dolor explicabo a dolores deserunt?</p>
                </Position>
            </div>
        </section>
    </>
  )
}

export default About