"use server";

export async function IsCorrectPassword(password: string) {
  return password === "grabbarnaadmin";
}
