import './UserPage.css';
import {Link, useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';

function UserPage() {
  const {id} = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then(response => response.json())
      .then((result) => {
        setIsLoaded(true);
        setUser(result.data);
      })
  })
  return (
    <div className={'user-page'}>
      <div className={'user-card'}>
        <div className={'user-card__image'}>
          <img src={user.avatar} alt={'Фото'}/>
        </div>
        <span className={'user-card__title'}>{user.first_name} {user.last_name}</span>
        <div className={'user-card__email'}>
          <a href={`mailto:${user.email}`}>{user.email}</a>
        </div>
      </div>
      <Link to={'/users'} className={'main-page__link'}>
        Вернуться к списку пользователей
      </Link>
    </div>
  );
}

export default UserPage;

