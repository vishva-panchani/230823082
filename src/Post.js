import logo from './logo.svg';
import './App.css';
import img from './image/image.jpg';
import vid from './image/vidoe2.png';
import gal from './image/gallery2.png';
import sml from './image/smily2.png';

function Post() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <div>
        <img src={img} style={{"height":"43px","borderRadius":"50%","marginBottom":"-18px","marginTop":"7px","marginLeft":"5px"}}/>
          <input type="text" placeholder="What's happening?"style={{"border":"none","backgroundColor":"rgb(245,245,245)","height":"30px","borderRadius":"8px","padding":"5px","paddingLeft":"15px","width":"17.3%","marginLeft":"15px","marginBottom":"10px"}} />
        </div>
        <div>
          <img src={vid} alt="" style={{ "float": "left","height": "25px","margin":"15px 8px" }} />
          <p style={{"float": "left","marginLeft":"0px","marginRight":"15px"}}>Live video</p>

          <img src={gal} alt="" style={{ "float": "left","height": "20px","margin":"17px 8px"}} />
          <p style={{ "float": "left","marginLeft":"0px","marginRight":"15px" }}>Photos</p>

          <img src={sml}  alt="" style={{ "float": "left","height": "19px","margin":"17px 8px"}} />
          <p style={{ "float": "left","marginLeft":"0px","marginRight":"15px"}}>Feeling</p>

          <button type="button" style={{ "backgroundColor": "rgb(255, 105, 180)","border":"1px solid rgb(255, 105, 180) ","borderRadius":"8%","marginTop":"16px","marginLeft":"5px" ,"padding":"4px","width":"4%","color":"white"}}>
            Post
          </button>
      </div>
    </>

  //  <>
   
  //   <div>
  //     <img src={img} style={{"height":"50px"}}/>
  //     <input type="text" name="name" value="" placeholder="What's happening?" />
  //   </div>
  //  </>
  );
}

export default Post;
