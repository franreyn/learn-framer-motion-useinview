import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function useVisible(options = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView(options);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [inView]);

  return { ref, isVisible };
}
