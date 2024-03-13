import { useEffect, useRef, useState } from 'react';

const useOutsideClickModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (
        ref.current &&
        event.target instanceof Node &&
        !ref.current.contains(event.target)
      ) {
        if (modalRef.current && modalRef.current.contains(event.target)) return;
        handleClose();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
  return [ref, modalRef, handleOpen, isOpen] as const;
};
export default useOutsideClickModal;
