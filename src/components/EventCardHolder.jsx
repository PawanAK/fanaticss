import EventCard from "./EventCard";

const EventCardHolder = ({cardData, setCardData}) => {
  const eventCards = cardData.map((event, index) => (
    <EventCard key={index} cardData={event} setCardData={setCardData} />
  ));

  return <div className="flex flex-wrap gap-[20px]"> {eventCards}</div>;
};

export default EventCardHolder;
