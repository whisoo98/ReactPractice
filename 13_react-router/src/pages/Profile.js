import { useParams } from "react-router-dom";

const data = {
    whisoo98: {
        name: "Kim Whisoo",
        description: "developer who is more developer than yesterday.",
    },
    someone: {
        name: "John Doe",
        description: "Someone Else",
    },
};

const Profile = () => {
    const params = useParams();
    const profile = data[params.username];

    return (
        <div>
            <h1>User Profile</h1>
            {profile ? (
                <div>
                    <h2>{profile.name}</h2>
                    <p>{profile.description}</p>
                </div>
            ) : (
                <p>Does not Exist</p>
            )}
        </div>
    );
};

export default Profile;
