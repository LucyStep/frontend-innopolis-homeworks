import React from 'react';
import './Card.css';
import {Link} from "react-router-dom";

export default class Card extends React.Component {
  static defaultProps = {
    id: 0,
    email: '',
    firstName: '',
    lastName: '',
    avatar: ''
  }

  render() {
    const {firstName, lastName, avatar, id} = this.props;
    return (
      <div className={'card'}>
        <div className={'card__image'}>
          <img src={avatar} alt={'Фото'}/>
        </div>
        <Link to={id.toString()} className={'card__link'}>
          {firstName} {lastName}
        </Link>
      </div>
    );
  }
}
