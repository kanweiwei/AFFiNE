// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { useSession } from 'next-auth/react';

export function useCurrenLoginStatus():
  | 'authenticated'
  | 'unauthenticated'
  | 'loading' {
  const session = useSession();
  return session.status;
}
