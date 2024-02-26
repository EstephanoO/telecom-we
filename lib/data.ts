import axios from "axios"
import { cookies } from "next/headers";
import db from "./db";

export const getUser = async () => {
    const cookieStore = cookies();

    const result = await db.getUser(cookieStore);

    return result
}

export async function getUsers() {
  const users = await axios.get('https://pym-database.pockethost.io/api/collections/users/records')
  return users.data.items
}

