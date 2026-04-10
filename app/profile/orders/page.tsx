"use client";

import { useState } from "react";
import {
  PageWrapper,
  ContentWrapper,
  PageTitle,
  OrderCard,
  OrderTop,
  OrderHeader,
  OrderNumber,
  OrderDate,
  CollapseIcon,
  DetailsPanel,
  Timeline,
  TimelineLine,
  TimelineStep,
  TimelineCircle,
  TimelineLabel,
  ProductList,
  ProductRow,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductMeta,
  ProductPrice,
  ProductBadge,
} from "./page.css";

type OrderStatus = "Створено" | "Підтверджено" | "Відправлено" | "Доставлено";

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
  statusLabel?: string;
  products: Product[];
}

const orders: Order[] = [
  {
    id: "109283763",
    date: "04.12.2025",
    status: "Відправлено",
    statusLabel: "Комплектація",
    products: [
      {
        id: "P-001",
        name: "Печиво Konti Super Kontik з молочно-ванільним смаком",
        code: "36732213",
        price: "29.19 ₴",
        qty: "x2 шт.",
        image: "https://via.placeholder.com/100x100",
      },
      {
        id: "P-002",
        name: "Напій Dr.Pepper Regular безалкогольний газований",
        code: "35930019",
        price: "59.99 ₴",
        qty: "x2 шт.",
        image: "https://via.placeholder.com/100x100",
        badge: "-15%",
      },
    ],
  },
  {
    id: "109283764",
    date: "01.12.2025",
    status: "Доставлено",
    statusLabel: "Доставлено",
    products: [
      {
        id: "P-003",
        name: "Набір канцелярії Hermes",
        code: "STN-05",
        price: "2 490 ₴",
        qty: "x1 шт.",
        image: "https://via.placeholder.com/100x100",
      },
    ],
  },
];

const statusSteps: OrderStatus[] = ["Створено", "Підтверджено", "Відправлено", "Доставлено"];

export default function OrderHistoryPage() {
  const [openOrderIds, setOpenOrderIds] = useState<string[]>(["109283763"]);

  const toggleOrder = (id: string) => {
    setOpenOrderIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <PageWrapper>
      <ContentWrapper>
        <PageTitle>Історія замовлень</PageTitle>

        {orders.map((order) => {
          const isOpen = openOrderIds.includes(order.id);
          const activeStepIndex = statusSteps.indexOf(order.status);

          return (
            <OrderCard key={order.id}>
              <OrderTop onClick={() => toggleOrder(order.id)}>
                <OrderHeader>
                  <div>
                    <OrderNumber>Замовлення №{order.id}</OrderNumber>
                    <OrderDate>Дата замовлення: {order.date}</OrderDate>
                  </div>
                </OrderHeader>

                <CollapseIcon>{isOpen ? "▲" : "▼"}</CollapseIcon>
              </OrderTop>

              <DetailsPanel open={isOpen}>
                <Timeline>
                  <TimelineLine />
                  {statusSteps.map((step, index) => {
                    const active = index <= activeStepIndex;
                    return (
                      <TimelineStep key={step}>
                        <TimelineCircle active={active}>{index + 1}</TimelineCircle>
                        <TimelineLabel active={active}>{step}</TimelineLabel>
                      </TimelineStep>
                    );
                  })}
                </Timeline>

                <ProductList>
                  {order.products.map((product) => (
                    <ProductRow key={product.id}>
                      <ProductImage src={product.image} alt={product.name} />
                      <ProductInfo>
                        <ProductName>{product.name}</ProductName>
                        <ProductMeta>код: {product.code}</ProductMeta>
                        {product.qty && <ProductMeta>{product.qty}</ProductMeta>}
                      </ProductInfo>
                      <div>
                        {product.badge && <ProductBadge>{product.badge}</ProductBadge>}
                        <ProductPrice>{product.price}</ProductPrice>
                      </div>
                    </ProductRow>
                  ))}
                </ProductList>
              </DetailsPanel>
            </OrderCard>
          );
        })}
      </ContentWrapper>
    </PageWrapper>
  );
}
