import { Carousel } from 'react-responsive-carousel';
function Home() {

  const img = 'src/images/Badface.png'
  return (
<div className="page">
  <div className="home" id="home">
      <img className="img" src={img}></img> 
  </div>
  <div id="about" className="about">
    <h1>About the Bad Faces</h1>
            <p>Bad Faces is a musical group that stands out from the crowd with their distinct sound. They seamlessly blend together soft, delicate tones with rough, edgy elements to create a truly one-of-a-kind musical experience. Their music tells epic stories in relatable language, stirring up feelings of nostalgia while still pushing the boundaries with fresh, innovative ideas. The band places a strong emphasis on powerful vocal delivery, believing that harmony is a key driving force behind their music. This focus on harmony creates a deep emotional connection with their audience and reinforces the band's unique musical style. Whether it's through the use of intricate harmonies or soaring vocal lines, Bad Faces continues to captivate listeners with their unforgettable sound.</p>
      
  </div>
  <div id="contact" className="contact">
    <h1>Contact Us</h1>
  </div>
    
        
</div>
    
  )
}

export default Home