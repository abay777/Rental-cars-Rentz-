
import bmw from '../assets/assets/bmw760.png'
const TopSection = () => {
  
  return (
    <section className="topSection" id="home">
        <div className="pictureContainer">
            <img src={bmw} alt="something" loading='lazy'/>
        </div>
        <div className="topTextSection">
            <h3>we made getting car for rent <span className="h3Span">Easy !</span></h3>
            <p>"Unlock the road to endless possibilities with our dynamic car rental service. 
                Embrace the freedom to explore, the thrill of the drive
                and the convenience of seamless journeys. Your adventure begins with us ,
                redefine travel, one ride at a time."</p>

                <button className="reserveButton" >Reserve now</button>
        </div>
   </section>
  )
}

export default TopSection