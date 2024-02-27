import { Toast } from 'flowbite-react';
import { FaTelegramPlane } from 'react-icons/fa';

function ComponentToast() {
  return (
    <Toast>
      <FaTelegramPlane className="h-5 w-5 text-cyan-600 dark:text-cyan-500" />
      <div className="pl-4 text-sm font-normal">Message sent successfully.</div>
    </Toast>
  );
}

export default ComponentToast;