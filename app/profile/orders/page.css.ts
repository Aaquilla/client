import styled from "styled-components";

export const PageWrapper = styled.main`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: "Montserrat Alternates", sans-serif;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const OrderCard = styled.article`
  background: #ffffff;
  border: 1px solid #e9e3d9;
  border-radius: 24px;
  overflow: hidden;
  transition: all 0.3s ease;
`;

export const OrderTop = styled.div`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background: #fff;
`;

export const OrderHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const OrderNumber = styled.div`
  font-family: "Gabriela", serif;
  font-size: 28px;
  color: #3b3028;
`;

export const OrderDate = styled.div`
  font-size: 14px;
  color: #888;
  font-weight: 500;
`;

export const CollapseIcon = styled.div`
  color: #3b3028;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DetailsPanel = styled.div<{ $open: boolean }>`
  display: ${({ $open }) => ($open ? "block" : "none")};
  padding: 0 30px 30px 30px;
`;

/* ===== ТАЙМЛАЙН ===== */
export const Timeline = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  padding: 0 10px;
`;

/* Контейнер для линии, чтобы она шла ровно от центра первого до центра последнего круга */
export const TimelineTrack = styled.div`
  position: absolute;
  top: 24px;
  left: 60px; /* Ровно центр первого шага (10px padding + 50px половина ширины) */
  right: 60px; /* Ровно центр последнего шага */
  transform: translateY(-50%);
  height: 6px;
  background: #f3f0ec;
  border-radius: 4px;
  z-index: 1;
`;

export const TimelineActiveLine = styled.div<{ $progress: number }>`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background: #3b3028;
  border-radius: 4px;
  z-index: 2;
  width: ${({ $progress }) => $progress}%; /* Точно по процентам, без лишних прибавок */
  transition: width 0.3s ease;
`;

export const TimelineStep = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  z-index: 3;
  width: 100px;
  position: relative;
`;

export const TimelineCircle = styled.div<{ $state: "completed" | "active" | "pending" }>`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  
  /* Белый фон перекрывает спрятанную под ним линию */
  background: ${({ $state }) => ($state === "pending" ? "#fff" : "#3b3028")};
  color: ${({ $state }) => ($state === "pending" ? "#3b3028" : "#fff")};
  
  border: ${({ $state }) => ($state === "pending" ? "1px dashed #888" : "none")};
  
  transition: all 0.3s ease;
`;

export const TimelineLabel = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #3b3028;
  text-align: center;
`;

/* ===== СПИСОК ТОВАРОВ ===== */
export const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ProductRow = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 100px 1fr auto;
  gap: 24px;
  align-items: center;
  padding: 24px;
  border-radius: 24px;
  border: 1px solid #e9e3d9;
`;

export const ProductImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ProductName = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #3b3028;
  line-height: 1.4;
`;

export const ProductMeta = styled.div`
  font-size: 14px;
  color: #888;
`;

export const ProductPriceBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 6px;
`;

export const ProductPrice = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #3b3028;
`;

export const ProductQty = styled.div`
  font-size: 14px;
  color: #888;
`;

/* БЕЙДЖ СКИДКИ (-15%) */
export const ProductBadge = styled.div`
  position: absolute;
  top: 24px;
  left: -1px;
  background: #e93a36;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 0 8px 8px 0;
  z-index: 10;
`;