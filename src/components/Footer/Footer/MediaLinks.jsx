import {FaDiscord, FaInstagram, FaRegEnvelope} from 'react-icons/fa'

function MediaLinks(){
  return (
    <div style={{margin:"1em auto"}}>
      <p className='register'>Register for event here</p>
      <div className='media'>
        <a><FaRegEnvelope/></a>
        <a><FaInstagram /></a>
        <a><FaDiscord /></a>
      </div>
    </div>
  )
}

export default MediaLinks
