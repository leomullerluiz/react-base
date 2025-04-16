
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { NavLink } from "react-router-dom";

const Index = () => {
  return (
    <div className="container py-10 mx-auto">
      <div className="flex flex-col items-center justify-center space-y-6 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Welcome to Your Dashboard
        </h1>
        <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl">
          A complete dashboard template built with React, Tailwind CSS, and shadcn/ui.
          Dark mode ready, fully customizable, and powered by React Query.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <NavLink to="/dashboard">
              Go to Dashboard
            </NavLink>
          </Button>
          <Button asChild variant="outline" size="lg">
            <NavLink to="/analytics">
              View Analytics
            </NavLink>
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-6 mt-16 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold">Data Visualization</h3>
            <p className="text-muted-foreground mt-2">
              Interactive charts and graphs powered by Recharts for visualizing your data.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="ghost" className="w-full">
              <NavLink to="/dashboard">Learn More</NavLink>
            </Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold">Theme Support</h3>
            <p className="text-muted-foreground mt-2">
              Switch between light and dark modes with a seamless experience.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="ghost" className="w-full">
              <NavLink to="/settings">Customize</NavLink>
            </Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold">React Query</h3>
            <p className="text-muted-foreground mt-2">
              Efficient data fetching with React Query for a smooth user experience.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="ghost" className="w-full">
              <NavLink to="/analytics">See in Action</NavLink>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Index;
