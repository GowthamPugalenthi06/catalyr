import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import './chatbot.css';

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'bot';
}

const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { id: '1', text: 'Hi! I can answer questions about Catalyr. Ask me anything!', sender: 'bot' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            text: input,
            sender: 'user'
        };

        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: userMessage.text }),
            });

            const data = await response.json();

            const botMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: data.reply || `Error: ${data.error}\nDetails: ${data.details || JSON.stringify(data)}`,
                sender: 'bot'
            };

            setMessages(prev => [...prev, botMessage]);
        } catch (error) {
            console.error('Error sending message:', error);
            setMessages(prev => [...prev, {
                id: (Date.now() + 1).toString(),
                text: "Sorry, I'm having trouble connecting right now.",
                sender: 'bot'
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="chatbot-container">
            {!isOpen && (
                <button className="chatbot-toggle" onClick={() => setIsOpen(true)}>
                    <MessageCircle size={32} />
                </button>
            )}

            {isOpen && (
                <div className="chatbot-window">
                    <div className="chatbot-header">
                        <h3>Catalyr Assistant</h3>
                        <button className="chatbot-close" onClick={() => setIsOpen(false)}>
                            <X size={24} />
                        </button>
                    </div>

                    <div className="chatbot-messages">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`message-row ${msg.sender}`}>
                                {msg.sender === 'bot' && (
                                    <div className="bot-icon">
                                        <Sparkles size={18} fill="#000" />
                                    </div>
                                )}
                                <div className={`message ${msg.sender}`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {isLoading && <div className="typing-indicator">Thinking...</div>}
                        <div ref={messagesEndRef} />
                    </div>

                    <form className="chatbot-input-area" onSubmit={handleSubmit}>
                        <div className="chatbot-input-wrapper">
                            <input
                                type="text"
                                className="chatbot-input"
                                placeholder="Type your message..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="chatbot-send" disabled={isLoading}>
                            <Send size={20} />
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
