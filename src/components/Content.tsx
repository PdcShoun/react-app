import './Content.css'

type Props = {
  head?: string;
  text: string;
};

function Profile({ head, text } : Props) {
  return (
    <div className="profile">
      <h1>{head}</h1>
      <p>{text}</p>
    </div>
  );
}

export default Profile;
