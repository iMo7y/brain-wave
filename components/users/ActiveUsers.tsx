import { useOthers, useSelf } from "@/liveblocks.config";
import { Avatar } from "./Avatar";
import styles from "./Avatar.module.css";
import { generateRandomName } from "@/lib/utils";
import { useMemo } from "react";

const ActiveUsers = () => {
  const users = useOthers();
  const currentUser = useSelf();
  const memoizedUsers = useMemo(() => {
    const hasMoreUsers = users.length > 2;

    return (
      <div className='flex items-center justify-center gap-1 py-2'>
        {currentUser && (
          <Avatar name='You' otherStyles='border-[3px] border-primary-green' />
        )}

        {users.slice(0, 2).map(({ connectionId }) => (
          <Avatar
            key={connectionId}
            name={generateRandomName()}
            otherStyles='-ml-3'
          />
        ))}

        {hasMoreUsers && (
          <div className='z-10 -ml-3 flex h-9 w-9 items-center justify-center rounded-full bg-primary-black'>
            +{users.length - 2}
          </div>
        )}
      </div>
    );
  }, [users.length]);

  return memoizedUsers;
};

export default ActiveUsers;
