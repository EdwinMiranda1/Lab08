import React, { useState } from 'react';

const URL_RANDOM_AVATAR = 'https://api.minimalavatars.com/avatar/random/png';

const AvatarImages: React.FC = () => {
  const [avatarUrl, setAvatarUrl] = useState<string>(URL_RANDOM_AVATAR);
  const [description, setDescription] = useState<string>('');

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  return (
    <div className="card" style={{ width: '350px', height: '400px' }} >
        <h2>Random Avatar</h2>
      <img src={avatarUrl} alt="Avatar" style={{ width: '50%', height: 'auto' }} />
      <p>Descripcion</p>
      <textarea
        value={description}
        onChange={handleDescriptionChange}
        style={{ width: '70%', height: '100px', resize:'none' }}
      />
    </div>
  );
};

export default AvatarImages;

