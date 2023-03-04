import user from '../info/user.json';
import Profile from './profile/Profile';
import data from '../info/data.json';
import Statistics from './statistics/Statistics';
import friends from '../info/friends.json';
import FriendList from './friend-list/FriendList';
import transactions from '../info/transactions.json';
import TransactionHistory from './transaction-history/TransactionHistory';


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 18,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
