
'use client';

import { useState } from 'react';
import {
  Bell,
  Bot,
  CircleUser,
  Home,
  Menu,
  Package2,
  Projector,
  Users,
  UserPlus,
  Send,
  Loader2,
  GitCommit,
  Users2
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Progress } from '@/components/ui/progress';
import { Textarea } from '@/components/ui/textarea';
import { getInsight } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const developers = [
    { id: '1', name: 'John Doe', email: 'john@example.com', topSkill: 'React', status: 'Active' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com', topSkill: 'Node.js', status: 'Active' },
    { id: '3', name: 'Peter Jones', email: 'peter@example.com', topSkill: 'Vue.js', status: 'On Leave' },
    { id: '4', name: 'Mary Johnson', email: 'mary@example.com', topSkill: 'Angular', status: 'Active' },
];

const projects = [
    { name: 'DevDNA Platform', status: 'Active', teamSize: 8, completion: 75, lead: 'John Doe' },
    { name: 'AI Chatbot Integration', status: 'Active', teamSize: 5, completion: 60, lead: 'Jane Smith' },
    { name: 'Internal Tools', status: 'Completed', teamSize: 3, completion: 100, lead: 'Peter Jones' },
    { name: 'Data Pipeline', status: 'On Hold', teamSize: 4, completion: 20, lead: 'Mary Johnson' },
]

type Message = {
    role: 'user' | 'assistant';
    content: string;
};

export default function ManagerDashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();
  const { toast } = useToast();

  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const filteredDevelopers = developers.filter(dev =>
    dev.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dev.topSkill.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDevClick = (id: string) => {
    router.push(`/dashboard/developer/${id}`);
  };

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
                href="#"
                className="flex items-center gap-3 rounded-lg bg-neutral-800 px-3 py-2 text-white transition-all hover:text-white"
              >
                <Home className="h-4 w-4" />
                Dashboard
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
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-neutral-800 px-3 py-2 text-white hover:text-white"
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            <h1 className="text-lg font-semibold md:text-2xl">Manager Dashboard</h1>
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
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
          <Tabs defaultValue="developers">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="projects">Project Details</TabsTrigger>
              <TabsTrigger value="developers">Developers</TabsTrigger>
              <TabsTrigger value="chatbot">Chatbot</TabsTrigger>
            </TabsList>
            <TabsContent value="projects" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
                            <Projector className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{projects.length}</div>
                            <p className="text-xs text-muted-foreground">Across all teams</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Engineers</CardTitle>
                             <Users2 className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{developers.length}</div>
                            <p className="text-xs text-muted-foreground">Total active developers</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Commits</CardTitle>
                            <GitCommit className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">12,890</div>
                             <p className="text-xs text-muted-foreground">This quarter</p>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">AI Insights</CardTitle>
                            <Bot className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                           <Button variant="outline" size="sm">Generate Report</Button>
                        </CardContent>
                    </Card>
                </div>
                <Card>
                    <CardHeader>
                        <CardTitle>Projects Overview</CardTitle>
                        <CardDescription>A summary of all ongoing and completed projects.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Project Name</TableHead>
                                    <TableHead>Lead</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Team Size</TableHead>
                                    <TableHead className="text-right">Completion</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {projects.map((project) => (
                                <TableRow key={project.name}>
                                    <TableCell className="font-medium">{project.name}</TableCell>
                                    <TableCell>{project.lead}</TableCell>
                                    <TableCell>
                                        <Badge variant={project.status === 'Active' ? 'default' : project.status === 'Completed' ? 'secondary' : 'outline'}>{project.status}</Badge>
                                    </TableCell>
                                    <TableCell>{project.teamSize}</TableCell>
                                    <TableCell className="text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <span>{project.completion}%</span>
                                            <Progress value={project.completion} className="w-24" />
                                        </div>
                                    </TableCell>
                                </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="developers" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
                <Card className="lg:col-span-3">
                  <CardHeader>
                    <CardTitle className="text-sm font-medium">Search Developers</CardTitle>
                  </CardHeader>
                  <CardContent>
                     <Input
                        placeholder="Search by name or skill (e.g., React)"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                     />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm font-medium">Add Developer</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Button><UserPlus className="mr-2 h-4 w-4" /> Add New Dev</Button>
                  </CardContent>
                </Card>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Developer Profiles</CardTitle>
                  <CardDescription>
                    Click on a developer to view their DevDNA.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Top Skill</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredDevelopers.map((dev) => (
                        <TableRow key={dev.id} onClick={() => handleDevClick(dev.id)} className="cursor-pointer">
                          <TableCell>{dev.name}</TableCell>
                          <TableCell>{dev.email}</TableCell>
                          <TableCell>{dev.topSkill}</TableCell>
                          <TableCell>
                            <Badge variant={dev.status === 'Active' ? 'default' : 'secondary'}>{dev.status}</Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
             <TabsContent value="chatbot">
                <Card className="h-[600px] flex flex-col">
                    <CardHeader>
                        <CardTitle>AI Assistant</CardTitle>
                        <CardDescription>Ask about team skills, project risks, or developer performance.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col">
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
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}
