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
    onSubmit();
  };

  return (
    <section className="px-4 py-16">
      <div className="max-w-xl mx-auto">
        <p className="font-serif text-xs tracking-[0.2em] text-skin-muted uppercase mb-2 text-center">
          お申し込み
        </p>
        <h2 className="font-serif text-xl text-skin-foreground mb-8 text-center">
          体験会に申し込む
        </h2>
        <Card className="border-skin-border bg-skin-card shadow-sm rounded-xl overflow-hidden">
          <CardHeader className="px-6 pt-6 pb-2">
            <p className="text-sm text-skin-muted">
              以下の内容をご記入のうえ、送信してください。
            </p>
          </CardHeader>
          <CardContent className="px-6 pb-6">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label
                  htmlFor="name"
                  className="text-skin-foreground text-sm font-medium"
                >
                  お名前
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="山田 花子"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border-skin-border bg-white rounded-md h-11"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-skin-foreground text-sm font-medium"
                >
                  メールアドレス
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-skin-border bg-white rounded-md h-11"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="phone"
                  className="text-skin-foreground text-sm font-medium"
                >
                  電話番号
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="090-1234-5678"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="border-skin-border bg-white rounded-md h-11"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-skin-brand hover:bg-skin-brand/90 text-white rounded-md py-6 text-base font-medium mt-6"
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
