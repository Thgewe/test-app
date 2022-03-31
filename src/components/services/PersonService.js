import { useCallback } from "react";

export const PersonService = () => {
  const getPersons = useCallback(async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!res.ok) {
        throw new Error(`Could not fetch, status: ${res.status}`);
      }
      const data = await res.json();
      return data;
    } catch (e) {
      throw e;
    }
    
  }, []);

  const getPersonPostsById = useCallback(async (id) => {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`);
      if (!res.ok) {
        throw new Error(`Could not fetch, status: ${res.status}`);
      }
      const data = await res.json();
      return data;
    } catch (e) {
      throw e;
    }
  }, []);

  return { getPersons, getPersonPostsById };
}