import React from 'react'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import { Link } from "react-router-dom";
import Menu from '../components/menu';

const Single = () => {
  return (
    <div className="single">
      <div className="content">
          <img src='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg' alt='img' />
        <div className="user">
          <img src='https://pixels.com/images/overview/apparel/mensTshirts002.jpg' alt='user' />
            <div className="info">
              <span>Suhail</span>
              <p>Posted 2 days ago</p>
            </div>
            <div className="edit">
              <Link to={`/write?edit=2`}>
                <img src={Edit} alt='edit' />
              </Link>
              <img  src={Delete} alt='delete'/>
            </div>
        </div>
            <h1>Lorem Ipsum</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nulla arcu, placerat in semper eget, bibendum in elit. Suspendisse est purus, placerat in quam sit amet, porta venenatis orci. Nullam dignissim posuere ullamcorper. Phasellus sodales fermentum ipsum vel fringilla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus efficitur nulla sit amet nisl aliquet facilisis. Sed vel magna eu enim hendrerit commodo. Nam eros risus, vestibulum sit amet suscipit ac, porttitor imperdiet odio. Morbi vestibulum leo eget quam ornare tempor eu nec odio.
              In hac habitasse platea dictumst.<br/> Vestibulum in nulla mi. Sed mi quam, fringilla eget enim a, consequat scelerisque massa. Maecenas ipsum diam, dignissim id mauris et, tempor vulputate erat. Aliquam erat volutpat. Fusce pharetra enim ac maximus faucibus. Quisque est dolor, vulputate vitae eros ac, vulputate aliquam metus. Pellentesque tempus vehicula augue, non dignissim ante finibus a. Nulla sed arcu vel dui ultricies euismod. Nulla pellentesque justo sit amet ligula bibendum sollicitudin. Quisque ullamcorper nulla orci, ut accumsan neque convallis in.
              Curabitur bibendum massa id diam eleifend lobortis. <br/>Donec accumsan ultricies orci fringilla iaculis. Sed ac dolor vel est pretium blandit vel sed quam. Pellentesque luctus ante nec aliquet gravida. Nulla ut eros rutrum, porttitor magna nec, lobortis risus. Morbi gravida nunc non magna convallis, nec ullamcorper felis egestas. Cras eleifend metus vitae purus cursus cursus. Quisque sem elit, venenatis ut sollicitudin vitae, dapibus eget sapien. Curabitur varius pulvinar magna, eu scelerisque lectus sodales nec. Vivamus vestibulum sapien vitae odio volutpat accumsan. Vivamus ac nulla cursus, imperdiet nisi eget, dignissim ex. Phasellus quis orci nec purus commodo lobortis. Mauris nec eros at urna euismod viverra eget sagittis mauris. Morbi dapibus, leo sit amet iaculis placerat, dolor arcu mollis nibh, in maximus quam felis a ante.
            </p>
      </div>
        <Menu/>
    </div>
  )
}

export default Single
