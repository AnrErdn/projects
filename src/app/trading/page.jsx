"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sidebar } from "@/components/dashboard/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Moon, Sun, Search, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { useTheme } from "next-themes";

export default function TradingPage() {
  const { setTheme, theme } = useTheme();

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <header className="h-16 border-b flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <div className="relative flex items-center">
              <Search className="absolute left-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-64 pl-10 h-9 rounded-md"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 rounded-md"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </header>
        <main className="flex-1 p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Buy Crypto</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Select Coin</label>
                    <select className="w-full h-9 rounded-md border border-input bg-background px-3 py-1">
                      <option>Bitcoin (BTC)</option>
                      <option>Ethereum (ETH)</option>
                      <option>Solana (SOL)</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Amount (USD)</label>
                    <Input type="number" placeholder="0.00" />
                  </div>
                  <Button className="w-full">Buy Now</Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Sell Crypto</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Select Coin</label>
                    <select className="w-full h-9 rounded-md border border-input bg-background px-3 py-1">
                      <option>Bitcoin (BTC)</option>
                      <option>Ethereum (ETH)</option>
                      <option>Solana (SOL)</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Amount (USD)</label>
                    <Input type="number" placeholder="0.00" />
                  </div>
                  <Button variant="destructive" className="w-full">Sell Now</Button>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Trades</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="font-medium">BTC/USD</div>
                      <div className="text-sm text-muted-foreground">Buy</div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">$45,231.89</div>
                      <div className="flex items-center text-sm text-green-500">
                        <ArrowUpRight className="h-4 w-4" />
                        +2.5%
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="font-medium">ETH/USD</div>
                      <div className="text-sm text-muted-foreground">Sell</div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">$3,245.67</div>
                      <div className="flex items-center text-sm text-red-500">
                        <ArrowDownRight className="h-4 w-4" />
                        -1.2%
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
} 