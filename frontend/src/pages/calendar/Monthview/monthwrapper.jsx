import Day from "./daywrapper";

const Month = ({ month }) => {
    console.log(month);

    return (
        <div className="ml-4 w-full grid grid-cols-7 grid-rows-5 flex-2">
            {month.flat().map((day, idx) => (
                <Day day={day} key={idx} />
            ))}
        </div>
    );
}

export default Month;
