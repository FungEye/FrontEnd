import { useEffect } from 'react';

//taken from: https://stackoverflow.com/questions/34424845/adding-script-tag-to-react-jsx

const useScript = url => {
  useEffect(() => {
    const script = document.createElement('script');

    script.innerHTML = url;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [url]);
};

export default useScript;