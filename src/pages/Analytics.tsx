
import * as React from "react";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/services/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

const Analytics = () => {
  // Fetch posts for our analytics
  const { data: posts, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: () => api.posts.getAll(),
  });

  // Calculate analytics data
  const analyticsData = React.useMemo(() => {
    if (!posts) return null;
    
    const totalPosts = posts.length;
    const avgTitleLength = Math.round(
      posts.reduce((sum, post) => sum + post.title.length, 0) / totalPosts
    );
    const avgBodyLength = Math.round(
      posts.reduce((sum, post) => sum + post.body.length, 0) / totalPosts
    );
    
    // Count posts by user
    const postsByUser: Record<number, number> = {};
    posts.forEach((post) => {
      postsByUser[post.userId] = (postsByUser[post.userId] || 0) + 1;
    });
    
    // Find the user with the most posts
    const mostActiveUserId = Object.entries(postsByUser).reduce(
      (max, [userId, count]) => (count > max[1] ? [Number(userId), count] : max),
      [0, 0]
    );
    
    return {
      totalPosts,
      avgTitleLength,
      avgBodyLength,
      mostActiveUserId: mostActiveUserId[0],
      mostActivePosts: mostActiveUserId[1],
    };
  }, [posts]);
  
  // Fetch most active user
  const { data: mostActiveUser } = useQuery({
    queryKey: ["user", analyticsData?.mostActiveUserId],
    queryFn: () => 
      analyticsData?.mostActiveUserId 
        ? api.users.getById(analyticsData.mostActiveUserId) 
        : Promise.resolve(null),
    enabled: !!analyticsData?.mostActiveUserId,
  });
  
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
        <p className="text-destructive">Error loading analytics data</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Analytics</h2>
        <p className="text-muted-foreground">
          Content analytics and insights
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Posts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analyticsData?.totalPosts}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Avg. Title Length
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analyticsData?.avgTitleLength} chars</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Avg. Content Length
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analyticsData?.avgBodyLength} chars</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Most Active User
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mostActiveUser?.name || "Loading..."}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {analyticsData?.mostActivePosts} posts
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Additional analytics would go here in a real app */}
    </div>
  );
};

export default Analytics;
