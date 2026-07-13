import styled, { keyframes } from 'styled-components'

export const shimmer = keyframes`
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
`

export const SkeletonLine = styled.div`
    background: linear-gradient(
        90deg,
        ${({ theme }) => theme === 'light' ? '#e0e4ec' : '#2a2a3e'} 25%,
        ${({ theme }) => theme === 'light' ? '#f0f2f7' : '#3a3a5e'} 50%,
        ${({ theme }) => theme === 'light' ? '#e0e4ec' : '#2a2a3e'} 75%
    );
    background-size: 200% 100%;
    animation: ${shimmer} 1.5s ease-in-out infinite;
    border-radius: 10px;
    width: 100px;
    height: 14px;
    margin-bottom: 16px;

    &.badge {
        width: 80px;
        height: 18px;
        border-radius: 12px;
        margin-bottom: 12px;
    }

    &.title {
        width: 100%;
    height: 16px;
    margin-bottom: 8px;
    }

    &.date {
        width: 60px;
    height: 12px;
    margin-top: 16px;
    }
`

export const SkeletonCard = styled.div`
    background: ${({ theme }) => theme === 'light' ? '#ffffff' : '#1e1e2f'};
    border-radius: 8px;
    padding: 15px 13px 19px;
    margin-bottom: 10px;
    width: 220px;
    height: 130px;
    box-shadow: ${({ theme }) => theme === 'light' ? '0 1px 3px rgba(0,0,0,0.08)' : 'none'};
`

export const Box = styled.div`
    display: flex;
    gap: 24px;
    padding-top: 15px;

    @media screen and (max-width: 1200px) {
        display: block;

        & .mobile {
            display: flex;
            gap: 15px;
        }
    }
`