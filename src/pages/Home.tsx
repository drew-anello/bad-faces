function Home() {
  const img = 'src/images/Badface.png'
  return (
<div className="page">
  <div className="home" id="home">
      <img className="img" src={img}></img> 
      <h1>Hey</h1>
  </div>

  <div id="about" className="about">
            <p>Bad Faces is a band that creates a unique sound by blending delicate and rough elements. Their music tells an epic story in relatable language, evoking nostalgia while also pushing forward with fresh ideas. The band puts emphasis on powerful vocal delivery and the belief that harmony is not just a metaphor, but a driving force in their music.</p>
  </div>
  <div id="contact" className="contact">
    <h1>Contact Us</h1>
  </div>
    
        
</div>
    
  )
}

export default Home