import React, { useState } from 'react';
import { useCentralData } from '../Context/CentralData';
import { useNavigate } from 'react-router-dom';
import { getAuth, updateEmail } from 'firebase/auth'; // Import Firebase methods
import backgroundImage2 from "../IMAGES_&_LOGOS/bg-2.jpg";
function Profile() {
  const {
    email,
    firstName,
    lastName,
    videocount,
    topic,
    isLoggedIn,
    setIsLoggedIn
  } = useCentralData();

  const [editing, setEditing] = useState(false);
  const [newFirstName, setNewFirstName] = useState(firstName);
  const [newLastName, setNewLastName] = useState(lastName);
  const [newEmail, setNewEmail] = useState(email);
  const [profilePicture, setProfilePicture] = useState('https://via.placeholder.com/150'); // Default profile picture
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/login');
  };

  const handleEdit = () => {
    setEditing(!editing);
  };

  const handleSave = () => {
    // Save the edited profile (you can add functionality to update the context/state)
    setEditing(false);

    // If the email was updated, update it in Firebase
    if (newEmail !== email) {
      updateEmailInFirebase(newEmail);
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result); // Set the new profile picture
      };
      reader.readAsDataURL(file);
    }
  };

  // Function to update email in Firebase
  const updateEmailInFirebase = (newEmail) => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      // Update email in Firebase
      updateEmail(user, newEmail)
        .then(() => {
          console.log('Email updated successfully!');
          // Optionally, you can update the context or show a success message to the user
        })
        .catch((error) => {
          console.error('Error updating email:', error);
          // Optionally, handle errors like re-authentication if needed
        });
    }
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen' style={{
      backgroundImage: `url(${backgroundImage2})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      <div className=' rounded-md shadow-2xl w-full max-w-lg p-8 bg-slate-300 border-2 border-black' >
        <h1 className='text-3xl font-bold text-center mb-8'>User Profile</h1>

        <div className='flex justify-center mb-6 relative '>
          {/* Profile Picture */}
          <div className='w-32 h-32 bg-blue-300 rounded-full overflow-hidden border-2 border-slate-400'>
            <img 
              src={profilePicture} 
              alt='Profile' 
              className='w-full h-full object-cover' 
            />
          </div>

          {/* Pencil Edit Button */}
          <label htmlFor="profile-picture-upload" className="absolute bottom-0 right-0 p-2 bg-blue-500 text-white rounded-full cursor-pointer">
            ✏️
          </label>
          <input 
            type="file" 
            id="profile-picture-upload" 
            accept="image/*" 
            onChange={handleImageUpload}
            className="hidden"
          />
        </div>

        {/* Profile Information */}
        <div className='space-y-4'>
          <div>
            <label className='block text-sm font-semibold text-gray-700'>First Name</label>
            {editing ? (
              <input
                type='text'
                value={newFirstName}
                onChange={(e) => setNewFirstName(e.target.value)}
                className='mt-2 p-2 w-full border border-gray-300 rounded-md'
              />
            ) : (
              <p className='text-lg'>{newFirstName}</p>
            )}
          </div>

          <div>
            <label className='block text-sm font-semibold text-gray-700'>Last Name</label>
            {editing ? (
              <input
                type='text'
                value={newLastName}
                onChange={(e) => setNewLastName(e.target.value)}
                className='mt-2 p-2 w-full border border-gray-300 rounded-md'
              />
            ) : (
              <p className='text-lg'>{newLastName}</p>
            )}
          </div>

          <div>
            <label className='block text-sm font-semibold text-gray-700'>Email</label>
            {editing ? (
              <input
                type='email'
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                className='mt-2 p-2 w-full border border-gray-300 rounded-md'
              />
            ) : (
              <p className='text-lg'>{newEmail}</p>
            )}
          </div>

          <div>
            <label className='block text-sm font-semibold text-gray-700'>Total Videos Uploaded</label>
            <p className='text-lg'>{videocount}</p>
          </div>

          <div>
            <label className='block text-sm font-semibold text-gray-700'>Topic</label>
            <p className='text-lg'>{topic}</p>
          </div>

          {/* Edit/Save Button */}
          <div className='mt-4 flex gap-4'>
            <button
              onClick={handleEdit}
              className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md w-full'>
              {editing ? 'Cancel' : 'Edit Profile'}
            </button>
            {editing && (
              <button
                onClick={handleSave}
                className='bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-md w-full'>
                Save Changes
              </button>
            )}
          </div>
        </div>

        {/* Logout Button */}
        {isLoggedIn && (
          <div className='mt-6'>
            <button
              onClick={handleLogout}
              className='bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-md w-full'>
              Log Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
