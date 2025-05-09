import { Position } from "@prisma/client";
import axios from "axios";

interface CreateRecruitPostData {
  title: string;
  description: string;
  position: Position;
  startDate: string;
  endDate: string;
  thumbnailUrl?: string;
}

interface UpdateRecruitPostData extends CreateRecruitPostData {
  id: string;
}

export const createRecruitPost = async (data: CreateRecruitPostData) => {
  try {
    const response = await axios.post("/api/recruit", data);
    return response.data;
  } catch (error) {
    console.error("Error creating recruit post:", error);
    throw new Error("Failed to create recruit post");
  }
};

export const updateRecruitPost = async (data: UpdateRecruitPostData) => {
  try {
    const response = await axios.put(`/api/recruit/${data.id}`, data);
    return response.data;
  } catch (error) {
    console.error("Error updating recruit post:", error);
    throw new Error("Failed to update recruit post");
  }
};

export const getRecruitPost = async (id: string) => {
  try {
    const response = await axios.get(`/api/recruit/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching recruit post:", error);
    throw new Error("Failed to fetch recruit post");
  }
};

export const getRecruitPosts = async () => {
  try {
    const response = await axios.get("/api/recruit");
    return response.data;
  } catch (error) {
    console.error("Error fetching recruit posts:", error);
    throw new Error("Failed to fetch recruit posts");
  }
};

export const deleteRecruitPost = async (id: string) => {
  try {
    const response = await axios.delete(`/api/recruit/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting recruit post:", error);
    throw new Error("Failed to delete recruit post");
  }
};
