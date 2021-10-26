import * as React from 'react';

interface ShowNameProps {
  name: string;
}

const MainPage: React.SFC<ShowNameProps> = ({ name }) => (
  <div>
    내 이름은 <b>{name}</b>
  </div>
);

export default MainPage;