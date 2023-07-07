import Profile from 'components/Profile/Profile';
import React from 'react';
import user from 'user.json';
// import data from './data.json';
// import Statistics from 'components/Statistics/Statistics';
const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      {/* <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} /> */}
    </>
  );
};

export default App;