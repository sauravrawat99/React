// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import ProtectedRoute from "./components/ProtectedRoute";

// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
// import Profile from "./pages/Profile";
// import Settings from "./pages/Settings";
// import User from "./pages/User";
// import NotFound from "./pages/NotFound";

// function App() {
//   // 🔐 Fake Auth (practice ke liye)
//   const isLoggedIn = true; // change to false to test

//   return (
//     <BrowserRouter>
//       <Navbar />

//       <Routes>
//         {/* ✅ Public Routes */}
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />

//         {/* ✅ Dynamic Route */}
//         <Route path="/user/:id" element={<User />} />

//         {/* 🔐 Protected Route + Nested */}
//         <Route
//           path="/dashboard"
//           element={
//             <ProtectedRoute isLoggedIn={isLoggedIn}>
//               <Dashboard />
//             </ProtectedRoute>
//           }
//         >
//           <Route path="profile" element={<Profile />} />
//           <Route path="settings" element={<Settings />} />
//         </Route>

//         {/* ❌ 404 */}
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
