"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface ApplicationFormProps {
  onSubmit: () => void;
}

export function ApplicationForm({ onSubmit }: ApplicationFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // モック: 送信処理は行わず完了画面へ
    onSubmit();
  };

  return (
    <section className="px-4 py-12">
      <div className="max-w-lg mx-auto">
        <h2 className="text-lg font-semibold text-skin-foreground mb-4 text-center">
          体験会に申し込む
        </h2>
        <Card className="border-skin-border bg-skin-card">
          <CardHeader>
            <p className="text-sm text-skin-muted">
              以下の内容をご記入のうえ、送信してください。
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-skin-foreground">
                  お名前
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="山田 花子"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border-skin-border bg-background"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-skin-foreground">
                  メールアドレス
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-skin-border bg-background"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-skin-foreground">
                  電話番号
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="090-1234-5678"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="border-skin-border bg-background"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-skin-primary hover:bg-skin-primary/90 text-skin-primary-foreground"
              >
                申し込む
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
