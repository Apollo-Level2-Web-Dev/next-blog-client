import { CreateBlogFormClient } from "@/components/modules/user/createBlog/CreateBlogFormClient";

export default async function CreateBlogPage() {
  return (
    <div className="h-[calc(100vh-100px)] flex items-center justify-center">
      <CreateBlogFormClient />
    </div>
  );
}
