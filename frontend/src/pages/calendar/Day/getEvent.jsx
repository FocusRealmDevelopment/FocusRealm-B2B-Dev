import dayjs from "dayjs";
export const getEvent = (day) => {
    // Mock data for the events of the day
    const events = [
        {
            title: 'Maths Class on Algebra',
            time: day.hour(8).minute(0).toISOString(),
            duration: 1, // Duration in hours
            description: 'Advanced algebraic concepts and techniques.'
        },
        {
            title: 'Science Class on Biology',
            time: day.hour(10).minute(0).toISOString(),
            duration: 1, // Duration in hours
            description: 'Introduction to cellular biology and genetics.'
        },
        // Add more events as needed
    ];
    return events;
};
