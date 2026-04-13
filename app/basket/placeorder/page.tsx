"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, ChevronDown } from "lucide-react";
import * as S from "./page.css";

const steps = [
  "Персональна\nінформація",
  "Доставка та\nоплата",
  "Адреса\nдоставки",
  "Додатково",
];

export default function CheckoutPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const next = () => setStep((s) => Math.min(3, s + 1));
  const prev = () => setStep((s) => Math.max(0, s - 1));

  const progressPercentage = (step / (steps.length - 1)) * 100;

  const renderForm = () => {
    switch (step) {
      case 0:
        return (
          <S.FormContainer>
            <S.FormGroup>
              <S.Label>Ім'я та прізвище</S.Label>
              <S.Input placeholder="Ім'я Прізвище" />
            </S.FormGroup>
            <S.FormGroup>
              <S.Label>Номер телефону</S.Label>
              <S.Input placeholder="+380 XXXXXXXXXX" />
            </S.FormGroup>
          </S.FormContainer>
        );
      case 1:
        return (
          <S.FormContainer>
            <S.FormGroup>
              <S.Label>Спосіб доставки</S.Label>
              <S.SelectWrapper>
                <S.Select defaultValue="">
                  <option value="" disabled hidden>
                    Оберіть спосіб доставки
                  </option>
                  <option value="nova">Нова Пошта</option>
                  <option value="ukr">Укрпошта</option>
                </S.Select>
                <S.SelectIcon>
                  <ChevronDown size={24} />
                </S.SelectIcon>
              </S.SelectWrapper>
            </S.FormGroup>
            <S.FormGroup>
              <S.Label>Спосіб оплати</S.Label>
              <S.SelectWrapper>
                <S.Select defaultValue="">
                  <option value="" disabled hidden>
                    Оберіть спосіб оплати
                  </option>
                  <option value="card">Карткою онлайн</option>
                  <option value="cash">При отриманні</option>
                </S.Select>
                <S.SelectIcon>
                  <ChevronDown size={24} />
                </S.SelectIcon>
              </S.SelectWrapper>
            </S.FormGroup>
          </S.FormContainer>
        );
      case 2:
        return (
          <S.FormContainer>
            <S.FormGroup>
              <S.Label>Поштовий індекс</S.Label>
              <S.Input placeholder="03087" />
            </S.FormGroup>
            <S.FormGroup>
              <S.Label>Адреса доставки</S.Label>
              <S.Input placeholder="№248, б-р Чоколівський, 37" />
            </S.FormGroup>
          </S.FormContainer>
        );
      case 3:
        return (
          <S.FormContainer>
            <S.FormGroup>
              <S.Label>Додаткові нотатки щодо замовлення</S.Label>
              <S.Textarea placeholder="Ваші нотатки" />
            </S.FormGroup>
          </S.FormContainer>
        );
      default:
        return null;
    }
  };

  return (
    <S.Wrapper>
      <S.Title>Оформлення замовлення</S.Title>

      <S.TimelineWrapper>
        <S.TimelineTrack>
          <S.TimelineProgress $progress={progressPercentage} />
        </S.TimelineTrack>

        {steps.map((label, index) => {
          let state: "completed" | "active" | "pending" = "pending";
          if (index < step) state = "completed";
          if (index === step) state = "active";

          return (
            <S.Step key={index}>
              <S.Circle $state={state}>
                {state === "completed" ? (
                  <Check size={24} strokeWidth={3} />
                ) : (
                  `0${index + 1}`
                )}
              </S.Circle>
              <S.StepLabel style={{ whiteSpace: "pre-line" }}>
                {label}
              </S.StepLabel>
            </S.Step>
          );
        })}
      </S.TimelineWrapper>

      {renderForm()}

      <S.Controls>
        <S.IconButton onClick={prev} disabled={step === 0} type="button">
          <ArrowLeft />
        </S.IconButton>

        {step < 3 ? (
          <S.IconButton onClick={next} type="button">
            <ArrowRight />
          </S.IconButton>
        ) : (
          <S.SubmitButton onClick={() => setShowModal(true)} type="button">
            Замовити
          </S.SubmitButton>
        )}
      </S.Controls>

      {showModal && (
        <S.ModalOverlay onClick={() => setShowModal(false)}>
          <S.ModalContent onClick={(e) => e.stopPropagation()}>
            <S.ModalTitle>
              Дякуємо за покупку! Ваше замовлення успішно оформлено!
            </S.ModalTitle>
            <S.ModalButtons>
              <S.ModalBtnOutline onClick={() => setShowModal(false)}>
                Відмінити
              </S.ModalBtnOutline>
              <S.ModalBtnSolid onClick={() => router.push("/")}>
                На головну
              </S.ModalBtnSolid>
            </S.ModalButtons>
          </S.ModalContent>
        </S.ModalOverlay>
      )}
    </S.Wrapper>
  );
}