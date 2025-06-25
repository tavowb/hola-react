import { useState } from 'react'

export function TwitterFollowCard({ children, userName, initialIsFollowing = false }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

  const buttonText = isFollowing ? 'Siguiendo' : 'Seguir'

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          src={`https://unavatar.io/${userName}`}
          alt='Avatar'
        />
        <div className='tw-followCard-info'>
          <strong> {children} </strong>
          <span className='tw-followCard-infoUserName'>@{userName}</span>
        </div>
      </header>
      <aside>
        <button
          className={buttonClassName}
          onClick={handleClick}
        >
          <span className='tw-followCard-text'>
            {buttonText}
          </span>
          <span className='tw-followCard-stopFollow'>
            Dejar de seguir
          </span>
        </button>
      </aside>
    </article>
  )
}
