"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Check } from "lucide-react";
import * as S from "./page.css";

type OrderStatus = "Обробка" | "Комплектація" | "Відправлено" | "Доставлено";

interface Product {
  id: string;
  name: string;
  code: string;
  price: string;
  image: string;
  badge?: string;
  qty?: string;
}

interface Order {
  id: string;
  date: string;
  status: OrderStatus;
  products: Product[];
}

const statusSteps: OrderStatus[] = ["Обробка", "Комплектація", "Відправлено", "Доставлено"];

const orders: Order[] = [
  {
    id: "109283763",
    date: "04.12.2025",
    status: "Комплектація", 
    products: [
      {
        id: "P-001",
        name: "Печиво Konti Super Kontik з молочно-ванільним смаком",
        code: "36732213",
        price: "29.19 грн",
        qty: "x2 шт.",
        image: "/product/kontik.png", 
      },
      {
        id: "P-002",
        name: "Напій Dr.Pepper Regular безалкогольний газований",
        code: "35930019",
        price: "59.99 грн",
        qty: "x2 шт.",
        image: "/product/pepper.png", 
        badge: "-15%",
      },
    ],
  },
  {
    id: "109283764",
    date: "01.12.2025",
    status: "Доставлено",
    products: [
      {
        id: "P-003",
        name: "Набір канцелярії Hermes",
        code: "STN-05",
        price: "2 490 грн",
        qty: "x1 шт.",
        image: "https://via.placeholder.com/100x100",
      },
    ],
  },
];

export default function OrderHistoryPage() {
  const [openOrderIds, setOpenOrderIds] = useState<string[]>(["109283763"]);

  const toggleOrder = (id: string) => {
    setOpenOrderIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <S.PageWrapper>
      <S.ContentWrapper>
        {orders.map((order) => {
          const isOpen = openOrderIds.includes(order.id);
          const activeStepIndex = statusSteps.indexOf(order.status);
          
          const progressPercentage = (activeStepIndex / (statusSteps.length - 1)) * 100;

          return (
            <S.OrderCard key={order.id}>
              <S.OrderTop onClick={() => toggleOrder(order.id)}>
                <S.OrderHeader>
                  <S.OrderNumber>Замовлення №{order.id}</S.OrderNumber>
                  <S.OrderDate>Дата замовлення: {order.date}</S.OrderDate>
                </S.OrderHeader>

                <S.CollapseIcon>
                  {isOpen ? <ChevronUp size={28} strokeWidth={1.5} /> : <ChevronDown size={28} strokeWidth={1.5} />}
                </S.CollapseIcon>
              </S.OrderTop>

              <S.DetailsPanel $open={isOpen}>
                <S.Timeline>
                  {/* Трек для прогресс-бара */}
                  <S.TimelineTrack>
                    <S.TimelineActiveLine $progress={progressPercentage} />
                  </S.TimelineTrack>
                  
                  {statusSteps.map((step, index) => {
                    const isCompleted = index < activeStepIndex;
                    const isActive = index === activeStepIndex;
                    const isPending = index > activeStepIndex;

                    let state: "completed" | "active" | "pending" = "pending";
                    if (isCompleted) state = "completed";
                    if (isActive) state = "active";

                    const stepNumber = `0${index + 1}`;

                    return (
                      <S.TimelineStep key={step}>
                        <S.TimelineCircle $state={state}>
                          {isCompleted ? <Check size={20} strokeWidth={2} /> : stepNumber}
                        </S.TimelineCircle>
                        <S.TimelineLabel>{step}</S.TimelineLabel>
                      </S.TimelineStep>
                    );
                  })}
                </S.Timeline>

                <S.ProductList>
                  {order.products.map((product) => (
                    <S.ProductRow key={product.id}>
                      {product.badge && <S.ProductBadge>{product.badge}</S.ProductBadge>}
                      
                      <S.ProductImage src={product.image} alt={product.name} />
                      
                      <S.ProductInfo>
                        <S.ProductName>{product.name}</S.ProductName>
                        <S.ProductMeta>код: {product.code}</S.ProductMeta>
                      </S.ProductInfo>
                      
                      <S.ProductPriceBlock>
                        <S.ProductPrice>{product.price}</S.ProductPrice>
                        {product.qty && <S.ProductQty>{product.qty}</S.ProductQty>}
                      </S.ProductPriceBlock>
                    </S.ProductRow>
                  ))}
                </S.ProductList>
              </S.DetailsPanel>
            </S.OrderCard>
          );
        })}
      </S.ContentWrapper>
    </S.PageWrapper>
  );
}