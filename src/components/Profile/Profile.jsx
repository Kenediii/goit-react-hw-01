import css from './Profile.module.css'



export const Profile = ({name, tag, location, image, stats}) => {
  return (
    <div className={css.container}>
      <div className={css.wraper}> 
  <div className={css.wrap__wrap}>
    <img className={css.img_profile}
      width={250} 
      height={250}
      src={image}
      alt="User avatar"
    />
    <p className={css.title}>{name}</p>
    <p className={css.text}>@{tag}</p>
    <p className={css.text}>{location}</p>
  </div>

  <ul className={css.list_type}>
    <li className={css.list_type__style}>
      <span className={css.span_title}>Followers</span>
      <span className={css.span_text}>{stats.followers}</span>
    </li>
    <li className={css.list_type__style}>
      <span className={css.span_title}>Views</span>
      <span className={css.span_text}>{stats.views}</span>
    </li>
    <li className={css.list_type__style}>
      <span className={css.span_title}>Likes</span>
      <span className={css.span_text}>{stats.likes}</span>
    </li>
  </ul>
  </div>
</div>
  )
}

export default Profile 