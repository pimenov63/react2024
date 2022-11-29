import styles from "./Profile.module.css";
const Profile = (props) => {
  let user = props.function();
  //   console.log(user);

  return (
    <div className="row">
      <div className="col-sm-3">
        <img src={user.avatar} alt="" width={"100 %"} />
      </div>
      <div className="col-sm-9">
        <h1 style={{ backgroundColor: "lightblue" }}>
          {user.name} {user.lastname}
        </h1>
        <h2 className="{styles.about}">{user.about}</h2>
        <p className={styles.email}>E-mail: {user.email}</p>
        <p style={{ fontWeigt: "700" }}>Id: {user.id}</p>
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          modi corporis eum minima iste, accusamus atque omnis? Nam fuga dolores
          voluptatem odio. Enim consectetur nesciunt aliquid dicta beatae
          molestias accusamus!
        </p>
      </div>
    </div>
  );
};
export default Profile;
