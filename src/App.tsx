import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import StudentDashboard from './pages/student/StudentDashboard';
import StudentNotifications from './pages/student/StudentNotifications';
import StudentCourses from './pages/student/StudentCourses';
import StudentCourseDetail from './pages/student/StudentCourseDetail';
import StudentAssignments from './pages/student/StudentAssignments';
import StudentChatroom from './pages/student/StudentChatroom';
import StudentSettings from './pages/student/StudentSettings';
import TeacherDashboard from './pages/teacher/TeacherDashboard';
import TeacherNotifications from './pages/teacher/TeacherNotifications';
import TeacherCourses from './pages/teacher/TeacherCourses';
import TeacherCourseDetail from './pages/teacher/TeacherCourseDetail';
import TeacherAssignments from './pages/teacher/TeacherAssignments';
import TeacherChatroom from './pages/teacher/TeacherChatroom';
import TeacherSettings from './pages/teacher/TeacherSettings';
import LibraryHome from './pages/library/LibraryHome';
import LibrarySearch from './pages/library/LibrarySearch';
import LibraryCategory from './pages/library/LibraryCategory';
import LibraryProfile from './pages/library/LibraryProfile';

function ProtectedRoute({ children, allowedRoles }: { children: React.ReactNode; allowedRoles: string[] }) {
  const { user } = useAuth();
  
  if (!user) {
    return <Navigate to="/login" />;
  }
  
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" />;
  }
  
  return <>{children}</>;
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      
      {/* Student Routes */}
      <Route path="/student/dashboard" element={<ProtectedRoute allowedRoles={['student']}><StudentDashboard /></ProtectedRoute>} />
      <Route path="/student/notifications" element={<ProtectedRoute allowedRoles={['student']}><StudentNotifications /></ProtectedRoute>} />
      <Route path="/student/courses" element={<ProtectedRoute allowedRoles={['student']}><StudentCourses /></ProtectedRoute>} />
      <Route path="/student/courses/:courseId" element={<ProtectedRoute allowedRoles={['student']}><StudentCourseDetail /></ProtectedRoute>} />
      <Route path="/student/assignments" element={<ProtectedRoute allowedRoles={['student']}><StudentAssignments /></ProtectedRoute>} />
      <Route path="/student/chatroom" element={<ProtectedRoute allowedRoles={['student']}><StudentChatroom /></ProtectedRoute>} />
      <Route path="/student/settings" element={<ProtectedRoute allowedRoles={['student']}><StudentSettings /></ProtectedRoute>} />
      
      {/* Teacher Routes */}
      <Route path="/teacher/dashboard" element={<ProtectedRoute allowedRoles={['teacher']}><TeacherDashboard /></ProtectedRoute>} />
      <Route path="/teacher/notifications" element={<ProtectedRoute allowedRoles={['teacher']}><TeacherNotifications /></ProtectedRoute>} />
      <Route path="/teacher/courses" element={<ProtectedRoute allowedRoles={['teacher']}><TeacherCourses /></ProtectedRoute>} />
      <Route path="/teacher/courses/:courseId" element={<ProtectedRoute allowedRoles={['teacher']}><TeacherCourseDetail /></ProtectedRoute>} />
      <Route path="/teacher/assignments" element={<ProtectedRoute allowedRoles={['teacher']}><TeacherAssignments /></ProtectedRoute>} />
      <Route path="/teacher/chatroom" element={<ProtectedRoute allowedRoles={['teacher']}><TeacherChatroom /></ProtectedRoute>} />
      <Route path="/teacher/settings" element={<ProtectedRoute allowedRoles={['teacher']}><TeacherSettings /></ProtectedRoute>} />
      
      {/* Library Routes */}
      <Route path="/library" element={<ProtectedRoute allowedRoles={['student', 'teacher']}><LibraryHome /></ProtectedRoute>} />
      <Route path="/library/search" element={<ProtectedRoute allowedRoles={['student', 'teacher']}><LibrarySearch /></ProtectedRoute>} />
      <Route path="/library/category" element={<ProtectedRoute allowedRoles={['student', 'teacher']}><LibraryCategory /></ProtectedRoute>} />
      <Route path="/library/profile" element={<ProtectedRoute allowedRoles={['student', 'teacher']}><LibraryProfile /></ProtectedRoute>} />
      
      {/* Catch-all route - redirect to landing page */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </Router>
  );
}