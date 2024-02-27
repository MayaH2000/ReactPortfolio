import myphoto from '/myphoto.jpg'
function AboutMe() {
  
    return (
    <div className="about-content">
        <link rel="stylesheet" href="./src/index.css"></link>
      <h1>About</h1>
      <img src={myphoto} width={250} height={250} alt="Maya" />
      <p>
        Hi there! I'm Maya Hernandez, a passionate web developer with a keen interest in creating engaging and user-friendly websites. I love diving into code, solving problems, and bringing creative ideas to life through digital experiences. When I'm not coding, you can find me exploring the outdoors, experimenting with new recipes in the kitchen, or immersing myself in a good book. I'm always eager to learn and grow both personally and professionally, and I'm excited about the opportunities that lie ahead in the ever-evolving world of technology.
      </p>
    </div>
  );
}

export default AboutMe;