function ProtectedRoute({ user, redirectPath = "/", children }) {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
}

export default ProtectedRoute;
