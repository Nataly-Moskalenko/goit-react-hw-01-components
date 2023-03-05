import user from '../data/user.json';
import Profile from './profile/Profile';
import data from '../data/data.json';
import Statistics from './statistics/Statistics';
import friends from '../data/friends.json';
import FriendList from './friend-list/FriendList';
import transactions from '../data/transactions.json';
import TransactionHistory from './transaction-history/TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',        
        display: 'flex',
        gap: 20,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 20,
          maxWidth: 600,
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
