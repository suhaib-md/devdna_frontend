
'use client';

import { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import {
  Bell,
  Bot,
  CircleUser,
  Home,
  Menu,
  Package2,
  Projector,
  Users,
  Send,
  Loader2,
  BarChart,
  Trophy,
  User as UserIcon,
} from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Link from 'next/link';
import { Textarea } from '@/components/ui/textarea';
import { getInsight } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Breadcrumbs from '@/components/ui/breadcrumbs';

type Message = {
    role: 'user' | 'assistant';
    content: string;
};

export default function AiAssistantPage() {
  const { toast } = useToast();
  const router = useRouter();
  const params = useParams();
  const managerId = params.id as string;

  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleChatSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const newMessages: Message[] = [...messages, { role: 'user', content: chatInput }];
    setMessages(newMessages);
    setChatInput("");
    setIsLoading(true);

    const result = await getInsight(chatInput);
    setIsLoading(false);

    if (result.error) {
        toast({
            variant: "destructive",
            title: "Error",
            description: result.error,
        });
    } else if (result.summary) {
        setMessages([...newMessages, { role: 'assistant', content: result.summary }]);
    }
  }

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] bg-black text-white">
      <div className="hidden border-r border-neutral-800 bg-neutral-950/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b border-neutral-800 px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6" />
              <span className="">DevDNA</span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Link
                href={`/dashboard/manager/${managerId}`}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-400 transition-all hover:text-white"
              >
                <Home className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                href={`/dashboard/manager/${managerId}/team`}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-400 transition-all hover:text-white"
              >
                <Users className="h-4 w-4" />
                Team
              </Link>
              <Link
                href={`/dashboard/manager/${managerId}/analytics`}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-400 transition-all hover:text-white"
              >
                <BarChart className="h-4 w-4" />
                Analytics
              </Link>
              <Link
                href={`/dashboard/manager/${managerId}/leaderboard`}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-400 transition-all hover:text-white"
              >
                <Trophy className="h-4 w-4" />
                Leaderboard
              </Link>
              <Link
                href={`/dashboard/manager/${managerId}/profile`}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-400 transition-all hover:text-white"
              >
                <UserIcon className="h-4 w-4" />
                Profile
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b border-neutral-800 bg-neutral-950/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <Link
                  href="#"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Package2 className="h-6 w-6" />
                  <span className="sr-only">DevDNA</span>
                </Link>
                <Link
                  href={`/dashboard/manager/${managerId}`}
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-neutral-400 hover:text-white"
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link
                  href={`/dashboard/manager/${managerId}/team`}
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-neutral-400 hover:text-white"
                >
                  <Users className="h-5 w-5" />
                  Team
                </Link>
                <Link
                  href={`/dashboard/manager/${managerId}/analytics`}
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-neutral-400 hover:text-white"
                >
                  <BarChart className="h-5 w-5" />
                  Analytics
                </Link>
                <Link
                    href={`/dashboard/manager/${managerId}/leaderboard`}
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-neutral-400 hover:text-white"
                >
                    <Trophy className="h-5 w-5" />
                    Leaderboard
                </Link>
                <Link
                    href={`/dashboard/manager/${managerId}/profile`}
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-neutral-400 hover:text-white"
                >
                    <UserIcon className="h-5 w-5" />
                    Profile
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
             <Breadcrumbs />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/login">Logout</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col p-4 md:p-8 items-center justify-center">
            <Card className="w-full max-w-4xl h-[70vh]">
                <CardHeader>
                    <CardTitle>AI Assistant</CardTitle>
                    <CardDescription>Ask about team skills, project risks, or for a summary.</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col h-[calc(70vh-78px)]">
                    <ScrollArea className="flex-grow h-0 pr-4">
                        <div className="space-y-4">
                            {messages.map((message, index) => (
                                <div key={index} className={`flex items-start gap-3 ${message.role === 'user' ? 'justify-end' : ''}`}>
                                    {message.role === 'assistant' && <Avatar className="w-8 h-8"><AvatarFallback><Bot size={20}/></AvatarFallback></Avatar>}
                                    <div className={`rounded-lg px-4 py-2 max-w-[80%] ${message.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}>
                                        <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                                    </div>
                                     {message.role === 'user' && <Avatar className="w-8 h-8"><AvatarFallback><CircleUser size={20}/></AvatarFallback></Avatar>}
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex items-start gap-3">
                                    <Avatar className="w-8 h-8"><AvatarFallback><Bot size={20}/></AvatarFallback></Avatar>
                                    <div className="rounded-lg px-4 py-2 bg-secondary flex items-center">
                                        <Loader2 className="h-5 w-5 animate-spin" />
                                    </div>
                                </div>
                            )}
                        </div>
                    </ScrollArea>
                    <form onSubmit={handleChatSubmit} className="mt-4 flex items-center gap-2 border-t border-neutral-800 pt-4">
                        <Textarea
                            placeholder="e.g., 'Who are my top Python developers?'"
                            value={chatInput}
                            onChange={(e) => setChatInput(e.target.value)}
                            className="min-h-0 text-base bg-neutral-900 border-neutral-700"
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && !e.shiftKey) {
                                    e.preventDefault();
                                    handleChatSubmit(e);
                                }
                            }}
                            rows={1}
                        />
                        <Button type="submit" size="icon" disabled={isLoading || !chatInput.trim()}>
                            <Send className="h-4 w-4" />
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </main>
      </div>
    </div>
  );
}
