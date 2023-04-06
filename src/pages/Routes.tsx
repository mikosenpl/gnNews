import { Navigate, Route, Routes } from 'react-router';
import NewsPage from './NewsPage';

const Routing = () => {
  return (
    <Routes>
      <Route path="/news" element={<NewsPage />} />
      <Route path="*" element={<Navigate to="news" replace />} />
    </Routes>
  );
};

export default Routing;
