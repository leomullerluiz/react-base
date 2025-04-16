# React Base

## Project info

This project is a complete dashboard developed with React, TypeScript, Tailwind CSS, shadcn/ui and React Query. It supports themes (light and dark), navigation between pages, global state management and API integration for displaying dynamic data. The project is highly modular and uses good development practices, such as reusable components and separation of concerns.

## Run

Make sure you have Node.js (version 16 or higher) and npm installed. If you don't, install them using nvm.

### Clone

``
git clone <URL_DO_REPOSITORIO>
``
``
cd <NOME_DO_PROJETO>
``

### Install Dependencies

``
npm install
``

### Run

``
npm run dev
``
- Project will be available in http://localhost:5173.

## How to Add Features to the Project

### Adding a New Screen

1. **Create the Screen Component**:
   - Navigate to the `src/pages` directory.
   - Create a new file, e.g., `NewPage.tsx`:
     ```tsx
     // filepath: src/pages/NewPage.tsx
     import React from "react";

     const NewPage = () => {
       return (
         <div className="container py-10">
           <h1 className="text-3xl font-bold">New Screen</h1>
           <p className="text-muted-foreground">This is the content of the new screen.</p>
         </div>
       );
     };

     export default NewPage;
     ```

2. **Add the Screen to the Router**:
   - Open `src/App.tsx`.
   - Import the new screen:
     ```tsx
     import NewPage from "./pages/NewPage";
     ```
   - Add a new route inside the `<Routes>` component:
     ```tsx
     <Route path="/new-page" element={<NewPage />} />
     ```

3. **Test the Screen**:
   - Run the development server (`npm run dev`) and navigate to `http://localhost:5173/new-page`.

---

### Adding a New API Endpoint

1. **Define the Endpoint**:
   - Open [api.ts](http://_vscodecontentref_/0).
   - Add the new endpoint to the `api` object:
     ```ts
     export const api = {
       ...existingEndpoints,
       newResource: {
         getAll: () => fetchApi<NewResource[]>("/new-resource"),
         getById: (id: number) => fetchApi<NewResource>(`/new-resource/${id}`),
       },
     };
     ```

2. **Use the Endpoint**:
   - Use the new endpoint in a component or page:
     ```tsx
     import { useQuery } from "@tanstack/react-query";
     import { api } from "@/services/api";

     const { data, isLoading, error } = useQuery({
       queryKey: ["newResource"],
       queryFn: () => api.newResource.getAll(),
     });
     ```

---

### Adding Navigation to the New Screen

1. **Add a Navigation Link**:
   - Open [sidebar.tsx](http://_vscodecontentref_/1).
   - Add a new link to the sidebar:
     ```tsx
     <NavLink to="/new-page" className={({ isActive }) => getNavClass(isActive)}>
       <Icon className="mr-2 h-4 w-4" />
       New Screen
     </NavLink>
     ```

2. **Test the Navigation**:
   - Run the development server (`npm run dev`) and click the new link in the sidebar to navigate to the screen.

---

With these steps, you can easily extend the project by adding new screens, API endpoints, and navigation links.