import UserInfo from '@/components/user/user-info';
import { currentUser } from '@/lib/auth';

const ServerPage = async () => {
  const user = await currentUser();
  return <UserInfo label="Server" user={user} />;
};

export default ServerPage;
