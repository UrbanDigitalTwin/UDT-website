import { Routes, Route, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import Leadership from './Leadership';
import Researchers from './Researchers';
import GraduateStudents from './GraduateStudents';

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.mode === 'dark' ? '#CCCFDC' : theme.colors.text.primary};
`;

const People = () => {
  return (
    <Routes>
      <Route index element={<Navigate to="leadership" replace />} />
      <Route path="leadership" element={<Leadership />} />
      <Route path="researchers" element={<Researchers />} />
      <Route path="graduate-students" element={<GraduateStudents />} />
    </Routes>
  );
};

export default People; 