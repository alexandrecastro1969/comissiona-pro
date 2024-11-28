'use client';

import { useState, KeyboardEvent, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useTranslations } from 'next-intl';
import { MessageCircle, X, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

type Message = {
    role: 'user' | 'assistant';
    content: string;
    timestamp: number;
};

export default function ChatInterface() {
    const t = useTranslations('chat');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState<Message[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isChatOpen, setIsChatOpen] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const { theme, setTheme } = useTheme();

    const getThemeClasses = (isDark: boolean) => ({
        chat: isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200',
        message: {
            user: isDark ? 'bg-blue-900/50 text-white' : 'bg-blue-100 text-gray-900',
            assistant: isDark ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'
        },
        text: isDark ? 'text-white' : 'text-gray-900',
        input: isDark ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-200 text-gray-900'
    });

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest"
        });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        const savedMessages = localStorage.getItem('chatMessages');
        if (savedMessages) {
            setMessages(JSON.parse(savedMessages));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('chatMessages', JSON.stringify(messages));
    }, [messages]);

    const handleSendMessage = async () => {
        if (!message.trim() || isLoading) return;
        
        const userMessage: Message = {
            role: 'user',
            content: message.trim(),
            timestamp: Date.now()
        };

        setMessages(prev => [...prev, userMessage]);
        setMessage('');
        setIsLoading(true);

        try {
            const res = await fetch('/api/chatbot', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: userMessage.content }),
            });

            const data = await res.json();
            
            const assistantMessage: Message = {
                role: 'assistant',
                content: data.response || data.message,
                timestamp: Date.now()
            };

            setMessages(prev => [...prev, assistantMessage]);
        } catch (error) {
            const errorMessage: Message = {
                role: 'assistant',
                content: 'Erro ao enviar mensagem. Tente novamente.',
                timestamp: Date.now()
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    const clearHistory = () => {
        setMessages([]);
        localStorage.removeItem('chatMessages');
    };

    const themeClasses = getThemeClasses(theme === 'dark');

    return (
        <div className="fixed bottom-4 right-4 z-50">
            <div className="flex items-center justify-end mb-2 space-x-2">
                <button
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-all hover:scale-110"
                >
                    {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Chat
                </span>
            </div>

            <button
                onClick={() => setIsChatOpen(!isChatOpen)}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 transition-all transform hover:scale-105 active:scale-95"
            >
                {isChatOpen ? <X size={20} /> : <MessageCircle size={20} />}
            </button>

            {isChatOpen && (
                <div className={`fixed bottom-20 right-4 w-[400px] h-[500px] max-h-[calc(100vh-180px)] 
                    ${themeClasses.chat} rounded-lg shadow-xl border
                    transition-all duration-300 transform animate-slideIn
                    flex flex-col`}>
                    <div className={`flex-1 overflow-y-auto p-4 space-y-4 text-sm ${themeClasses.text}`}>
                        {messages.map((msg) => (
                            <div
                                key={msg.timestamp}
                                className={`p-2 rounded-lg ${
                                    msg.role === 'user' 
                                        ? themeClasses.message.user
                                        : themeClasses.message.assistant
                                } animate-fadeIn`}
                            >
                                {msg.role === 'user' ? (
                                    <p className="whitespace-pre-wrap">{msg.content}</p>
                                ) : (
                                    <div className="prose prose-sm max-w-none dark:prose-invert">
                                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                            {msg.content}
                                        </ReactMarkdown>
                                    </div>
                                )}
                                <small className="text-gray-500 dark:text-gray-400 text-xs block mt-2">
                                    {new Date(msg.timestamp).toLocaleTimeString()}
                                </small>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                                <div className="animate-bounce">●</div>
                                <div className="animate-bounce delay-100">●</div>
                                <div className="animate-bounce delay-200">●</div>
                            </div>
                        )}
                        <div ref={messagesEndRef} className="h-4" />
                    </div>

                    <form 
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleSendMessage();
                        }} 
                        className="p-3 border-t dark:border-gray-700"
                    >
                        <div className="space-y-3">
                            <textarea
                                id="chat-message"
                                name="chat-message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                onKeyDown={handleKeyPress}
                                className={`w-full p-2 rounded-lg resize-none text-sm ${themeClasses.input}`}
                                placeholder={t('placeholder')}
                                rows={2}
                            />
                            <div className="flex justify-between items-center">
                                <button
                                    type="button"
                                    onClick={clearHistory}
                                    className="bg-gray-500 text-white px-3 py-1.5 rounded-lg hover:bg-gray-600 transition-colors text-sm"
                                >
                                    {t('clearHistory')}
                                </button>
                                <button
                                    type="submit"
                                    disabled={isLoading || !message.trim()}
                                    className="bg-blue-500 text-white px-3 py-1.5 rounded-lg disabled:opacity-50 hover:bg-blue-600 transition-colors text-sm"
                                >
                                    {isLoading ? t('sending') : t('send')}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}