import birthdayData from "../assets/data";
const BirthdayCard = () => {

  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-purple-500 to-pink-500 p-8 min-h-screen mx-auto">
      {birthdayData.map((person, index) => (
        <div
          key={index}
          className="flex flex-col lg:flex-row items-start mb-8 w-full lg:w-2/3 xl:w-1/2 sm:mb-2 space-y-4 lg:space-y-0"
        >
          <img
            data-aos="fade-up-right"
            src={person.imageUrl}
            alt={person.name}
            className="mr-4 w-full md:w-2/6 xl:w-3/6 lg:w-3/6 sm:w-1/6 h-60 object-cover rounded-2xl"
          />
          <div data-aos="fade-up-left" className="bg-white border justify-center rounded p-4 flex flex-col flex-grow">
            <p className="text-gray-700 text-lg font-serif">{person.wish}</p>
            <div className="flex justify-end items-end mt-2">
              <p className="text-sm font-mono text-gray-600">~ {person.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BirthdayCard;
