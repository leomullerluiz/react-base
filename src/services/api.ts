
import { QueryClient } from "@tanstack/react-query";

// Base API URL
const API_URL = "https://jsonplaceholder.typicode.com";

// Create a client
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

// Generic fetch wrapper with error handling
export async function fetchApi<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${API_URL}${endpoint}`;
  
  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || response.statusText);
  }

  return response.json() as Promise<T>;
}

// API functions
export const api = {
  // Users
  users: {
    getAll: () => fetchApi<User[]>("/users"),
    getById: (id: number) => fetchApi<User>(`/users/${id}`),
  },
  // Posts
  posts: {
    getAll: () => fetchApi<Post[]>("/posts"),
    getById: (id: number) => fetchApi<Post>(`/posts/${id}`),
    getByUser: (userId: number) => fetchApi<Post[]>(`/posts?userId=${userId}`),
  },
};

// Types
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
