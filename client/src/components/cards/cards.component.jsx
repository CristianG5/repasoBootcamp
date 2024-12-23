import Card from '../card/card.component'
import './cards.styles.css'

function Cards({allUsers}) {

  const userList = allUsers

  return (
    <div className='card-list'>
          {userList?.map((user) => (
            <Card user = {user} />
          ))}
    </div>
  )
}

export default Cards