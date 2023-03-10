import { Button } from "react-bootstrap"
function Home() {
  const img = 'src/images/Badface.png'
  return (
<div className="page">
  <div className="home" id="home">
      <img className="img" src="https://i.imgur.com/Aub9OCk.png" />
  </div>
  <div id="about" className="about">
    <h1>About the Bad Faces</h1>
            <p>Bad Faces is a musical group that stands out from the crowd with their distinct sound. They seamlessly blend together soft, delicate tones with rough, edgy elements to create a truly one-of-a-kind musical experience. Their music tells epic stories in relatable language, stirring up feelings of nostalgia while still pushing the boundaries with fresh, innovative ideas. The band places a strong emphasis on powerful vocal delivery, believing that harmony is a key driving force behind their music. This focus on harmony creates a deep emotional connection with their audience and reinforces the band's unique musical style. Whether it's through the use of intricate harmonies or soaring vocal lines, Bad Faces continues to captivate listeners with their unforgettable sound.</p>
           
            <div className="media">
      
     <iframe
      src='https://drive.google.com/file/d/14Hw1NzEQDqqHBAnr78BnVjSoJKswfXQX/preview'
      width='560'
      height='315'
      frameBorder='0'
      allow='accelerometer; autoplay; clipboard-write'
    />
    <iframe
      width='560'
      height='315'
      src='https://www.youtube.com/embed/jY_YLElho8k'
      title='YouTube video player'
      frameBorder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in- picture; web-share'
      allowFullScreen
    />
    <iframe
      width='560'
      height='315'
      src='https://www.youtube.com/embed/nPOyb46inGM'
      title='YouTube video player'
      frameBorder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in- picture; web-share'
      allowFullScreen
      />
    <iframe
      width='560'
      height='315'
      src='https://www.youtube.com/embed/t2ao-HoN1cQ'
      title='YouTube video player'
      frameBorder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in- picture; web-share'
      allowFullScreen
    />
  <iframe
      width='560'
      height='315'
      src='https://www.youtube.com/embed/8pvEuoEn5GY'
      title='YouTube video player'
      frameBorder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in- picture; web-share'
      allowFullScreen
    />
    <iframe
      width='560'
      height='315'
      src='https://www.youtube.com/embed/nXQsR20kyX0'
      title='YouTube video player'
      frameBorder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in- picture; web-share'
      allowFullScreen
    /> 
    </div>
    <div className="mediaImages">
    <img src="https://i.imgur.com/gU3CoAN.jpg" alt="Bad Faces Live" />
     <img src="https://i.imgur.com/O9bO17H.jpg" alt="Bad Faces live" />
    <img src="https://i.imgur.com/jOE5IDS.jpg" alt="Bad Faces Live" />
    <img src="https://i.imgur.com/01A3kz6.jpg" alt="Bad Faces Live" />
    <img src="https://i.imgur.com/ZUlWQvR.jpg" alt="Bad Faces Live" />
    <img src="https://i.imgur.com/TtfxJJ7.jpg" alt="Barry Singing" />
    </div>
  </div>
  <div id="contact" className="contact">
    <h1>Contact Us</h1>
    <p>To Contact the Bad Faces Please Click the Button Below or send an Email Directly to <a href="mailto:badfacesmusic@gmail.com">badfacesmusic@gmail.com</a></p>
   <a href="mailto:badfacesmusic@gmail.com"><button >Click to Contact</button></a>
  </div>
    
        
</div>
    
  )
}

export default Home