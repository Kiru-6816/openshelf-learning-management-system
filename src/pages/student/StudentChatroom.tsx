import { useState } from 'react';
import DashboardNavbar from '../../components/DashboardNavbar';
import DashboardSidebar from '../../components/DashboardSidebar';
import { Send } from 'lucide-react';

export default function StudentChatroom() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'John Smith',
      text: 'Hey everyone! Did anyone finish the calculus homework?',
      time: '10:30 AM',
      isOwn: false
    },
    {
      id: 2,
      sender: 'You',
      text: 'I\'m working on it now. Problem 7 is really tricky!',
      time: '10:32 AM',
      isOwn: true
    },
    {
      id: 3,
      sender: 'Sarah Johnson',
      text: 'I can help with problem 7! You need to apply the chain rule.',
      time: '10:35 AM',
      isOwn: false
    },
    {
      id: 4,
      sender: 'Michael Chen',
      text: 'Thanks Sarah! That makes sense now.',
      time: '10:40 AM',
      isOwn: false
    }
  ]);

  const handleSend = () => {
    if (message.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          sender: 'You',
          text: message,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isOwn: true
        }
      ]);
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNavbar />
      <div className="flex">
        <DashboardSidebar role="student" />
        <main className="flex-1 p-8">
          <div className="max-w-5xl mx-auto h-[calc(100vh-180px)] flex flex-col">
            <div className="mb-6">
              <h1 className="text-gray-900 mb-2">Class Chatroom</h1>
              <p className="text-gray-600">Advanced Mathematics - Section A</p>
            </div>

            {/* Messages Container */}
            <div className="flex-1 bg-white rounded-xl shadow-sm p-6 mb-4 overflow-y-auto">
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.isOwn ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-md ${msg.isOwn ? 'order-2' : 'order-1'}`}>
                      {!msg.isOwn && (
                        <p className="text-gray-900 text-sm mb-1">{msg.sender}</p>
                      )}
                      <div
                        className={`px-4 py-3 rounded-lg ${
                          msg.isOwn
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-900'
                        }`}
                      >
                        <p>{msg.text}</p>
                      </div>
                      <p className="text-gray-500 text-xs mt-1">{msg.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Message Input */}
            <div className="bg-white rounded-xl shadow-sm p-4">
              <div className="flex gap-4">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
                <button
                  onClick={handleSend}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
