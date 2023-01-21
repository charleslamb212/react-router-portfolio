

const About = (props) => {
    return(
        <div>
            <h1>About Me</h1>
            <img src={props.image} alt="profile" />
            <p>Hi, my name is {props.name} and I am a web developer and designer.</p>
            <p>I have experience in building responsive websites and web applications using React, JavaScript, HTML, CSS, and other modern web technologies.</p>
            <p>In my free time, I enjoy reading about new web development trends and experimenting with new technologies.</p>
        </div>
    )
}

export default About;