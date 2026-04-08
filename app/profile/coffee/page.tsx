"use client";

import React from "react";
import { useExtracted } from "next-intl"; 
import {
  Content,
  Card,
  HeaderInfo,
  CounterBadge,
  TimelineContainer,
  TimelineLine,
  NodeWrapper,
  NodeImage, 
  ClaimButton,
  FreeCoffeeGrid,
  FreeCoffeeItem,
  ActionButton
} from "./page.css";

const CoffeePassportPage = () => {
  // Подключаем переводчик с контекстом "profile"
  const t = useExtracted("profile");

  const timelineNodes = [
    { id: 1, active: true, top: "25%", left: "5%" },
    { id: 2, active: true, top: "75%", left: "20%" },
    { id: 3, active: false, top: "25%", left: "35%" },
    { id: 4, active: false, top: "75%", left: "50%" },
    { id: 5, active: false, top: "25%", left: "65%" },
    { id: 6, active: false, top: "75%", left: "80%" },
    { id: 7, active: false, top: "25%", left: "95%", large: true },
  ];

  return (
    <Content>
      <Card>
        <HeaderInfo>
          <div>
            <h2>{t("Promotion 6 + 1")}</h2>
            <p>{t("Buy 6 coffees and get the 7th as a gift.")}</p>
          </div>
          <CounterBadge>2/6</CounterBadge>
        </HeaderInfo>

        <TimelineContainer>
          <TimelineLine viewBox="0 0 100 100" preserveAspectRatio="none">
            <polyline points="5,25 20,75 35,25 50,75 65,25 80,75 95,25" />
          </TimelineLine>

          {timelineNodes.map((node) => (
            <NodeWrapper key={node.id} $top={node.top} $left={node.left}>
              <NodeImage 
                src={node.active ? "/coffee/Coffee.png" : "/coffee/CoffeeClosed.png"} 
                alt="Coffee Status"
                $large={node.large} 
              />
              
              {node.id === 7 && <ClaimButton disabled>{t("Claim")}</ClaimButton>}
            </NodeWrapper>
          ))}
        </TimelineContainer>
      </Card>

      <Card>
        <HeaderInfo>
          <div>
            <h2>{t("Free coffees")}</h2>
            <p>{t("Enter the code at the checkout when buying coffee and get it for free.")}</p>
          </div>
        </HeaderInfo>

        <FreeCoffeeGrid>
          {[1, 2, 3, 4].map((item) => (
            <FreeCoffeeItem key={item}>
              <NodeImage 
                src="/coffee/GiftedCoffee.png" 
                alt="Free Coffee" 
                style={{ width: "85px", height: "85px" }} 
              />
              <ActionButton>{t("Use")}</ActionButton>
            </FreeCoffeeItem>
          ))}
        </FreeCoffeeGrid>
      </Card>
    </Content>
  );
};

export default CoffeePassportPage;