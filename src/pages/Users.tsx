
import * as React from "react";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/services/api";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";

const Users = () => {
  const [search, setSearch] = React.useState("");
  
  // Fetch users
  const { data: users, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: () => api.users.getAll(),
  });

  // Filter users based on search
  const filteredUsers = React.useMemo(() => {
    if (!users) return [];
    if (!search.trim()) return users;

    const searchLower = search.toLowerCase();
    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchLower) ||
        user.email.toLowerCase().includes(searchLower) ||
        user.username.toLowerCase().includes(searchLower)
    );
  }, [users, search]);

  if (isLoading) {
    return (
      <div className="flex h-40 w-full items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-40 w-full items-center justify-center">
        <p className="text-destructive">Error loading users data</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Users</h2>
        <p className="text-muted-foreground">Manage users and permissions</p>
      </div>

      <div>
        <div className="flex items-center py-4">
          <Input
            placeholder="Search users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="max-w-sm"
          />
        </div>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Username</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Website</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell>{user.username}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.company.name}</TableCell>
                    <TableCell>{user.website}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="h-24 text-center">
                    No users found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Users;
