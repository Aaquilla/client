import styled from "styled-components";

export const PageWrapper = styled.main`
  min-height: 100vh;
  background: #f3f5f8;
  padding: 28px 16px 36px;
`;

export const ContentWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const PageTitle = styled.h1`
  margin: 0;
  font-size: 28px;
  font-weight: 700;
  color: #111827;
`;

export const OrderCard = styled.article`
  background: #ffffff;
  border: 1px solid #d9d8d3;
  border-radius: 26px;
  overflow: hidden;
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
`;

export const OrderTop = styled.button`
  width: 100%;
  border: none;
  background: transparent;
  padding: 24px 26px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  cursor: pointer;
  text-align: left;

  &:hover {
    background: #f8f8f6;
  }
`;

export const OrderHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const OrderNumber = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #111827;
`;

export const OrderDate = styled.div`
  font-size: 12px;
  color: #6b7280;
`;

export const CollapseIcon = styled.span`
  font-size: 18px;
  color: #6b7280;
  line-height: 1;
  margin-top: 4px;
`;

interface DetailsPanelProps {
  open: boolean;
}
export const DetailsPanel = styled.div<DetailsPanelProps>`
  overflow: hidden;
  max-height: ${({ open }) => (open ? "1400px" : "0")};
  transition: max-height 0.35s ease, padding 0.35s ease;
  border-top: 1px solid #ebe6dd;
  padding: ${({ open }) => (open ? "24px 26px 28px" : "0 26px")};
`;

export const Timeline = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  padding: 18px 0 28px;
`;

export const TimelineLine = styled.span`
  position: absolute;
  left: 24px;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);
  height: 2px;
  background: #ebe6dd;
`;

interface TimelineStepProps {
  active?: boolean;
}
export const TimelineStep = styled.div<TimelineStepProps>`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 80px;
`;

export const TimelineCircle = styled.span<TimelineStepProps>`
  width: 34px;
  height: 34px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 13px;
  font-weight: 700;
  color: ${({ active }) => (active ? "#ffffff" : "#6b7280")};
  background: ${({ active }) => (active ? "#2c1f12" : "#ffffff")};
  border: 1px solid ${({ active }) => (active ? "#2c1f12" : "#d9d8d3")};
`;

export const TimelineLabel = styled.span<TimelineStepProps>`
  margin-top: 10px;
  font-size: 12px;
  color: ${({ active }) => (active ? "#111827" : "#6b7280")};
`;

export const ProductList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 14px;
`;

export const ProductRow = styled.li`
  display: grid;
  grid-template-columns: 110px 1fr auto;
  gap: 18px;
  align-items: center;
  padding: 18px 18px 18px 16px;
  border-radius: 18px;
  border: 1px solid #ece5dd;
  background: #ffffff;
`;

export const ProductImage = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 18px;
  object-fit: cover;
  background: #f3f4f6;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ProductName = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: #111827;
`;

export const ProductMeta = styled.div`
  font-size: 12px;
  color: #6b7280;
`;

export const ProductPrice = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #111827;
  text-align: right;
`;

export const ProductBadge = styled.span`
  display: inline-flex;
  margin-bottom: 10px;
  padding: 6px 10px;
  border-radius: 10px;
  background: #ef4444;
  color: #ffffff;
  font-size: 12px;
  font-weight: 700;
`;
