import CardWrapper from "./card-wrapper";

const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel='Произошла ошибка'
      backButtonLabek='Вернуться на страницу логина'
      backButtonHref='/auth/login'
    ></CardWrapper>
  );
};

export default ErrorCard;
