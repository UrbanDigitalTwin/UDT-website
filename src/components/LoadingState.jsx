import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`;

const SkeletonPulse = styled.div`
  display: inline-block;
  height: ${props => props.height || '20px'};
  width: ${props => props.width || '100%'};
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.gray.light} 8%,
    ${({ theme }) => theme.colors.gray.medium} 18%,
    ${({ theme }) => theme.colors.gray.light} 33%
  );
  background-size: 800px 100px;
  animation: ${shimmer} 2s linear infinite;
  border-radius: ${props => props.borderRadius || '4px'};
  margin: ${props => props.margin || '0'};
`;

const LoadingContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const CardSkeleton = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const LoadingState = () => {
  return (
    <LoadingContainer>
      <SkeletonPulse height="40px" width="200px" margin="0 0 2rem 0" />
      
      <CardSkeleton>
        <SkeletonPulse height="24px" width="180px" margin="0 0 1rem 0" />
        <SkeletonPulse height="16px" margin="0 0 0.5rem 0" />
        <SkeletonPulse height="16px" width="80%" margin="0 0 0.5rem 0" />
        <SkeletonPulse height="16px" width="90%" />
      </CardSkeleton>

      <CardSkeleton>
        <SkeletonPulse height="24px" width="220px" margin="0 0 1rem 0" />
        <SkeletonPulse height="16px" margin="0 0 0.5rem 0" />
        <SkeletonPulse height="16px" width="85%" margin="0 0 0.5rem 0" />
        <SkeletonPulse height="16px" width="95%" />
      </CardSkeleton>

      <CardSkeleton>
        <SkeletonPulse height="200px" margin="0 0 1rem 0" borderRadius="8px" />
        <SkeletonPulse height="24px" width="160px" margin="0 0 1rem 0" />
        <SkeletonPulse height="16px" width="90%" />
      </CardSkeleton>
    </LoadingContainer>
  );
};

export default LoadingState; 