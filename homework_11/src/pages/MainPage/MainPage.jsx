import UsersList from "../../components/UsersList/UsersList";
import './MainPage.css'

function MainPage() {
  return (
    <div>
      <h2 className={'mainContainer__title'}>Список пользователей</h2>
      <UsersList/>
    </div>
  )
}

export default MainPage;
