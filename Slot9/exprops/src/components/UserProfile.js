// UserProfile.js
import { Card } from "react-bootstrap";
const UserProfile = ({ user }) => {
//   <div>
//     <p className="custom-text">
//       Hello, {user.name}, {user.age} tuổi
//     </p>
//   </div>
    return (
        <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>
            Age: {user.age} years old
        </Card.Text>
        </Card.Body>
    );
};
export default UserProfile;
