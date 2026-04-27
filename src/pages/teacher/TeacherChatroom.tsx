import { useState } from 'react';
import DashboardNavbar from '../../components/DashboardNavbar';
import DashboardSidebar from '../../components/DashboardSidebar';
import { Send } from 'lucide-react';

export default function TeacherChatroom() {
  const [message, setMessage] = useState('');
  const [selectedClass, setSelectedClass] = useState('class-a');
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'John Smith',
      text: 'Professor, could you explain the chain rule again?',
      time: '10:30 AM',
      isTeacher: false
    },
    {
      id: 2,
      sender: 'You',
      text: 'Of course! The chain rule is used to differentiate composite functions. If you have f(g(x)), the derivative is f\'(g(x)) * g\'(x).',
      time: '10:32 AM',
      isTeacher: true
    },
    {
      id: 3,
      sender: 'Sarah Johnson',
      text: 'That makes so much more sense now. Thank you!',
      time: '10:35 AM',
      isTeacher: false
    }
  ]);

  const classes = [
    { id: 'class-a', name: 'Section A - Advanced Mathematics' },
    { id: 'class-b', name: 'Section B - Basic Calculus' }
  ];

  const handleSend = () => {
    if (message.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          sender: 'You',
          text: message,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isTeacher: true
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
        <DashboardSidebar role="teacher" />
        <main className="flex-1 p-8">
          <div className="max-w-5xl mx-auto h-[calc(100vh-180px)] flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-gray-900 mb-2">Class Chatroom</h1>
                <p className="text-gray-600">Communicate with your students</p>
              </div>
              
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              >
                {classes.map((cls) => (
                  <option key={cls.id} value={cls.id}>
                    {cls.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Messages Container */}
            <div className="flex-1 bg-white rounded-xl shadow-sm p-6 mb-4 overflow-y-auto">
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.isTeacher ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-md ${msg.isTeacher ? 'order-2' : 'order-1'}`}>
                      {!msg.isTeacher && (
                        <p className="text-gray-900 text-sm mb-1">{msg.sender}</p>
                      )}
                      <div
                        className={`px-4 py-3 rounded-lg ${
                          msg.isTeacher
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
