import { useRouter } from 'next/router';
import { useEffect } from 'react';
function MyComponent() {
  const router = useRouter();

  useEffect(() => {
    router.push('/login');
  }, []); // only run on the first render

  return <div>Enviando para página de login...</div>;
}

export default MyComponent;