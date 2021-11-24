import "./brand.css"
import { google, slack, atlassian, dropbox, shopify } from './imports';

const Brand = () => {
  return (
    <div>
      <div id="brand" className= "section_padding">
    <div>
      <img src={google} alt="google"/>
    </div>
    <div>
      <img src={slack}  alt="slack" />
    </div>
    <div>
      <img src={atlassian}  alt="atlassian" />
    </div>
    <div>
      <img src={dropbox}  alt="dropbox" />
    </div>
    <div>
      <img src={shopify}  alt="shopify" />
    </div>
  </div>
    </div>
  )
}

export default Brand