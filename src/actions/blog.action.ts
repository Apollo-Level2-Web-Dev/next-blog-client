"use server";

import { blogService } from "@/services/blog.service";

export const getBlogs = async () => {
  return await blogService.getBlogPosts();
};
