import { useContext } from 'react';
import { RefsContext } from '../context';

export const useRefsContext = () => {
  return useContext(RefsContext);
};
