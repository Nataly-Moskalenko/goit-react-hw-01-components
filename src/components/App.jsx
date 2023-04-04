import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';
import FriendList from './friendList/FriendList';
import TransactionHistory from './transactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        gap: 30,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 30,
          maxWidth: 560,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <FriendList friends={friends} />
        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
      </div>
      <TransactionHistory items={transactions} />
    </div>
  );
};
