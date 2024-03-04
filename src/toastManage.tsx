import { toast } from 'react-toastify';

export const toastManage = {
  success: (message:string) => {
    toast.success(message);
  },
  error: (message:string) => {
    toast.error(message);
  },
  info: (message:string) => {
    toast.info(message);
  },
};