import './Content.css'

type Props = {
  name?: string;
  age?: number;
};

function Profile(props: Props) {
  const age = props.age || 12
  const name = props.name || 'Shoun'
  return (
    <div className="profile">
      <h1>Hello, {name}!</h1>
      <p>You are {age} years old.</p>
    </div>
  );
}

export default Profile;
