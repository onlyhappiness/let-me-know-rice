// shop actions
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.withCredentials = true; // front, backend 간 쿠키공유

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
});

export const loadShopLists = createAsyncThunk(
  "shop/loadShopLists",
  async () => {
    const response = await api.get("/shop/lists");
    return response;
  }
);
