"use client";

import React, { useEffect, useState } from "react";
import { Input } from "./ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";
import { IsCorrectPassword } from "@/lib/admin";

type Props = {
  children: React.ReactNode;
};

function AdminPassword({ children }: Props) {
  const [password, setPassword] = useState("");
  const [correct, setIsCorrect] = useState(false);
  const { toast } = useToast();

  const testpassword = async (password: string) => {
    if (await IsCorrectPassword(password)) {
      setIsCorrect(true);
    }
  };

  useEffect(() => {
    if (password !== "") {
      localStorage.setItem("admin-password", password);
    }
  }, [password]);

  useEffect(() => {
    const password = localStorage.getItem("admin-password") ?? "";
    setPassword(password);

    testpassword(password);
  }, []);

  useEffect(() => {
    testpassword(password);
  }, []);

  if (!correct) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center">
        <Card>
          <CardHeader>
            <CardTitle>Admin Login</CardTitle>
            <CardDescription>
              Logga in för att se admin information
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </CardContent>
          <CardFooter>
            <Button
              onClick={async () => {
                if (await IsCorrectPassword(password)) {
                  setIsCorrect(true);
                } else {
                  toast({
                    title: "Wrong password",
                    description: "Password doesn't match correct password",
                    variant: "destructive",
                  });
                }
              }}
            >
              Logga in
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return <>{children}</>;
}

export default AdminPassword;
