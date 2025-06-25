import { TwitterFollowCard } from './TwitterFollowCard'
import './App.css'
export function App() {
  const users = [
    {
      userName: 'midudev',
      name: 'Miguel Angel Duran',
      isFollowing: true,
    },
    {
      userName: 'tavowl',
      name: 'Gustavo D. Jimenez',
      isFollowing: false,
    },
    {
      userName: 'johaneko',
      name: 'Johan Diaz Saurith',
      isFollowing: false,
    }
  ]
  return (
   
      <section className='App'>
        {
          users.map(({ userName, name, isFollowing }) => (
            <TwitterFollowCard
              key={userName}
              userName={userName}
              initialIsFollowing={isFollowing}
            >
              {name}
            </TwitterFollowCard>
          ))
        }
      </section>
    
  )
}
