const PersonInfo = ({ title, date, city, phone }) => {
  return (
    <>
      <h3>{title}</h3>
      <h4>{date}</h4>
      <h4>{city}</h4>
      <div class="phone">
        <a class="phone_number" href="tel:+380503901591">
          +38 (050) 050 92 13
        </a>
      </div>
    </>
  );
};

export { PersonInfo };
